// src/utils.js
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const fileTypes = {
  Images: ["png","jpg","jpeg","gif","svg","webp","heic"],
  Videos: ["mp4","mkv","avi","mov","webm"],
  Documents: ["pdf","docx","doc","txt","xlsx","pptx","csv"],
  Archives: ["zip","rar","7z","tar","gz"],
  Code: ["js","py","java","cpp","c","cs","html","css","ts","jsx","tsx","go","rs"],
  Audio: ["mp3","wav","flac","aac"]
};

export function ensureDirSync(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

export function getCategoryFromExt(ext) {
  if (!ext) return "Others";
  ext = ext.toLowerCase();
  for (const cat of Object.keys(fileTypes)) {
    if (fileTypes[cat].includes(ext)) return cat;
  }
  return "Others";
}

export function sha1FileSync(filePath) {
  const hash = crypto.createHash("sha1");
  const data = fs.readFileSync(filePath);
  hash.update(data);
  return hash.digest("hex");
}

export function safeRenameSync(src, dest) {
  // ensure dest dir exists and avoid overwrite by adding suffix if required
  ensureDirSync(path.dirname(dest));
  if (!fs.existsSync(dest)) {
    fs.renameSync(src, dest);
    return dest;
  }
  const base = path.basename(dest, path.extname(dest));
  const ext = path.extname(dest);
  let i = 1;
  let candidate;
  do {
    candidate = path.join(path.dirname(dest), `${base}(${i})${ext}`);
    i++;
  } while (fs.existsSync(candidate));
  fs.renameSync(src, candidate);
  return candidate;
}
