<<<<<<< HEAD
🧹 LazyClean — Smart Folder Cleaner (Kiro Week 2 Winner-Ready)
<p align="center"> <img src="https://img.shields.io/badge/Node.js-ESM%20Project-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/CLI-Tool-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Kiro-Week%202-ff9800?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p>
🚀 What is LazyClean?

LazyClean is a smart, lightweight, production-ready Node.js command-line tool that automatically organizes messy folders.

It sorts files into:

🖼 Images

🎥 Videos

📄 Documents

🎵 Audio

🗄 Archives

💻 Code

📦 Others

It also detects duplicates using SHA-1 hashing, supports undo, dry-run, recursive scanning, and offers a polished CLI UX.

✨ Key Features
🗂 Automatic Categorization

Organizes files into category-based folders automatically.

🧬 Duplicate Detection

Uses SHA-1 hashing to detect duplicates and moves them to /Duplicates.

🧪 Dry-Run Mode

Preview changes before applying them.

🔁 Undo Support

Revert past operations using the lazyclean-log.json.

🌲 Recursive Scanning

Scan inside nested folders.

🚫 Ignore System

Skip files/folders using .klignore.

🎨 Beautiful CLI Interface

Figlet banner

Chalk colors

Ora spinners

Clean summary tables

📦 Installation
git clone https://github.com/vi9521/lazyclean-kiro.git
cd lazyclean-kiro
npm install

▶️ Usage
🔍 Dry Run (Preview)
node src/lazyclean.js --path <folder> --dry-run

🧹 Real Cleanup
node src/lazyclean.js --path <folder>

🔁 Undo Last Cleanup
node src/lazyclean.js --path <folder> --undo

🔁 Undo Multiple Steps
node src/lazyclean.js --path <folder> --undo --undo-steps 5

📊 Generate Report
node src/lazyclean.js --path <folder> --report

🌲 Recursive Scan
node src/lazyclean.js --path <folder> --recursive

🚫 Ignore Files

Create a file named .klignore:

node_modules/
secret.txt
temp/

📂 Project Structure
lazyclean-kiro/
├── .kiro/
│   ├── config.json
│   └── README-kiro.md
├── src/
│   ├── lazyclean.js
│   ├── utils.js
│   └── src_sample/
├── demo_report/
├── demo_target/
├── README.md
├── .gitignore
├── package.json
└── package-lock.json

🧠 Duplicate Detection — How It Works

LazyClean:

Generates SHA-1 hash for each file

If two hashes match → file is duplicate

Duplicate moved to /Duplicates

Logged for undo

🔁 Undo System

All operations are logged in:

lazyclean-log.json


Undo safely restores files to their original location.
=======
# LazyClean 🧹  

[![Node.js](https://img.shields.io/badge/Node.js-ESM-green)](https://nodejs.org/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](#license)  
[![GitHub Repo Size](https://img.shields.io/github/repo-size/vi9521/lazyclean-kiro)](https://github.com/vi9521/lazyclean-kiro)  

## What is LazyClean?  
LazyClean is a lightweight, fast and reliable command-line tool that automatically organizes messy folders — sorting files into categories like Images, Videos, Documents, Archives, Audio and Code.  
It also detects duplicates, supports undo, dry-run and recursive cleaning, and offers a slick CLI experience with colors and a banner.  

## 🚀 Features  

- **Auto-categorization** by file extension (Images, Videos, Documents, etc.)  
- **Duplicate detection** using SHA-1 hashing; duplicates go to `Duplicates/`  
- **Dry-run** mode — preview changes without moving files  
- **Undo** — revert last cleanups  
- **Recursive scan** — cleans subfolders too  
- **Ignore rules** via `.klignore` or CLI ignore options  
- **Slick CLI UX** — ASCII banner, colored output, spinners  
- **Safe & reversible** — no accidental deletes  

## 🛠 Prerequisites  

- Node.js (>= 16)  
- npm  

## 📦 Installation  

```bash
git clone https://github.com/vi9521/lazyclean-kiro.git  
cd lazyclean-kiro  
npm install  
>>>>>>> 410dd7c0feffc363c0df32e8770dfd008aa7fd5f
