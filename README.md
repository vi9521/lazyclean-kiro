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
