#!/usr/bin/env node
// ==============================
//  LazyClean - Kiro Week 2 Tool
//  Full CLI Version (ESM)
// ==============================

import { program } from "commander";
import figlet from "figlet";
import chalk from "chalk";
import ora from "ora";
import fs from "fs";
import path from "path";

import {
  fileTypes,
  ensureDirSync,
  getCategoryFromExt,
  sha1FileSync,
  safeRenameSync,
} from "./utils.js";

// Log file inside target folder
const LOG_FILE = "lazyclean-log.json";

// ==============================
//  Helpers
// ==============================

function loadLog(targetPath) {
  const logPath = path.join(targetPath, LOG_FILE);
  if (!fs.existsSync(logPath)) return { runs: [] };
  try {
    return JSON.parse(fs.readFileSync(logPath, "utf8"));
  } catch {
    return { runs: [] };
  }
}

function saveLog(targetPath, log) {
  const logPath = path.join(targetPath, LOG_FILE);
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));
}

function scanFiles(targetPath, recursive = true, ignorePatterns = []) {
  const results = [];

  function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);

      // Skip ignored paths
      const relative = path.relative(targetPath, full);
      if (ignorePatterns.includes(relative)) continue;

      const stat = fs.lstatSync(full);

      if (stat.isDirectory() && recursive) {
        walk(full);
      } else if (stat.isFile()) {
        results.push(full);
      }
    }
  }

  walk(targetPath);
  return results;
}

function readIgnore(targetPath) {
  const ignoreFile = path.join(targetPath, ".klignore");
  if (fs.existsSync(ignoreFile)) {
    return fs.readFileSync(ignoreFile, "utf8")
      .split("\n")
      .map((x) => x.trim())
      .filter(Boolean);
  }
  return [];
}

// ==============================
//  CORE: Organize
// ==============================

function organize(targetPath, opts) {
  const { dryRun, recursive, ignore } = opts;
  const report = {
    moved: [],
    duplicates: [],
    skipped: [],
    errors: [],
  };

  const fileList = scanFiles(targetPath, recursive, ignore);
  const log = loadLog(targetPath);
  const hashMap = {};

  for (const file of fileList) {
    try {
      const rel = path.relative(targetPath, file);

      if (rel === LOG_FILE) {
        report.skipped.push({ file: rel, reason: "log file" });
        continue;
      }

      const ext = path.extname(file).replace(".", "");
      const cat = getCategoryFromExt(ext);
      const destDir = path.join(targetPath, cat);
      ensureDirSync(destDir);

      const hash = sha1FileSync(file);

      // Duplicate handling
      if (hashMap[hash]) {
        const dupDir = path.join(targetPath, "Duplicates");
        ensureDirSync(dupDir);
        const dest = path.join(dupDir, path.basename(file));

        if (!dryRun) {
          const final = safeRenameSync(file, dest);
          log.runs.push({
            action: "move",
            from: rel,
            to: path.relative(targetPath, final),
            ts: new Date().toISOString(),
          });
        }
        report.duplicates.push({ file: rel });
        continue;
      }

      // Normal move
      const dest = path.join(destDir, path.basename(file));
      hashMap[hash] = dest;

      if (!dryRun) {
        const final = safeRenameSync(file, dest);
        log.runs.push({
          action: "move",
          from: rel,
          to: path.relative(targetPath, final),
          ts: new Date().toISOString(),
        });
      }

      report.moved.push({ file: rel, dest });
    } catch (err) {
      report.errors.push({ file, message: err.message });
    }
  }

  if (!dryRun) saveLog(targetPath, log);
  return report;
}

// ==============================
//  CORE: Undo
// ==============================

function undo(targetPath, steps) {
  const log = loadLog(targetPath);
  const actions = log.runs;
  if (!actions.length) throw new Error("No actions to undo.");

  const reverted = [];

  for (let i = 0; i < steps && actions.length; i++) {
    const last = actions.pop();
    const from = path.join(targetPath, last.from);
    const to = path.join(targetPath, last.to);

    try {
      if (fs.existsSync(to)) {
        ensureDirSync(path.dirname(from));
        fs.renameSync(to, from);
        reverted.push({ from: last.to, restoredTo: last.from });
      } else {
        reverted.push({ from: last.to, status: "Missing file" });
      }
    } catch (e) {
      reverted.push({ from: last.to, error: e.message });
    }
  }

  saveLog(targetPath, log);
  return reverted;
}

// ==============================
//  CLI SETUP
// ==============================

program
  .name("lazyclean")
  .description("Smart folder cleaner with categories, dry-run, undo, recursive scan & duplicate detection.")
  .version("1.0.0");

program
  .option("-p, --path <folder>", "Target folder", ".")
  .option("--dry-run", "Simulate actions")
  .option("--recursive", "Scan subfolders", false)
  .option("--undo", "Undo last actions")
  .option("--undo-steps <n>", "Undo N actions", parseInt)
  .option("--report", "Show a preview scan summary")
  .option("--ignore <items...>", "Ignore specific paths");

program.parse(process.argv);
const opts = program.opts();

// ==============================
//  EXECUTION
// ==============================

console.log(chalk.cyan(figlet.textSync("LazyClean")));

const targetPath = path.resolve(opts.path);
if (!fs.existsSync(targetPath)) {
  console.log(chalk.red("Invalid path."));
  process.exit(1);
}

const ignore = (opts.ignore || []).concat(readIgnore(targetPath));

(async () => {
  try {
    // ----------- REPORT MODE -----------
    if (opts.report) {
      const spinner = ora("Scanning...").start();
      const files = scanFiles(targetPath, opts.recursive, ignore);
      spinner.succeed(`Found ${files.length} files.`);
      console.table(
        files.slice(0, 20).map((f) => ({
          file: path.relative(targetPath, f),
        }))
      );
      return;
    }

    // ----------- UNDO MODE -----------
    if (opts.undo) {
      const steps = opts.undoSteps || 1;
      const spinner = ora("Undoing changes...").start();
      const out = undo(targetPath, steps);
      spinner.succeed("Undo complete.");
      console.table(out);
      return;
    }

    // ----------- CLEAN MODE -----------
    const spinner = ora(
      opts.dryRun ? "Simulating cleanup..." : "Cleaning folder..."
    ).start();

    const result = organize(targetPath, {
      dryRun: opts.dryRun,
      recursive: opts.recursive,
      ignore,
    });

    spinner.succeed("Done");

    console.log(chalk.green("\nSummary:"));
    console.table({
      moved: result.moved.length,
      duplicates: result.duplicates.length,
      skipped: result.skipped.length,
      errors: result.errors.length,
    });

    if (result.moved.length)
      console.log(chalk.blue("\nMoved sample: "), result.moved.slice(0, 10));

    if (result.duplicates.length)
      console.log(
        chalk.yellow("\nDuplicate sample: "),
        result.duplicates.slice(0, 10)
      );
  } catch (e) {
    console.log(chalk.red("Error:"), e.message);
  }
})();
