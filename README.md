🧹 LazyClean — Smart Folder Cleaner (Kiro Week 2 Ready)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-ESM%20Project-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/CLI-Tool-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Kiro-Week%202-ff9800?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

## 🚀 What is LazyClean?

LazyClean is a fast, production-ready Node.js CLI tool that automatically organizes messy folders.

It sorts files into:

- 🖼 Images  
- 🎥 Videos  
- 📄 Documents  
- 🎵 Audio  
- 🗄 Archives  
- 💻 Code  
- 📦 Others  

LazyClean also detects duplicate files using SHA-1 hashing, supports undo, dry-run, recursive scanning, and provides a beautiful CLI interface.

---

## ✨ Key Features

### 🗂 Automatic Categorization  
Sorts files into category-based folders.

### 🧬 Duplicate Detection  
SHA-1 hashing → duplicates moved to `/Duplicates`.

### 🧪 Dry-Run Mode  
Preview actions without modifying files.

### 🔁 Undo System  
Reverts past actions using `lazyclean-log.json`.

### 🌲 Recursive Scan  
Organizes files inside subfolders.

### 🚫 Ignore System  
Skip files/folders using `.klignore`.

### 🎨 Beautiful CLI  
- Figlet banner  
- Chalk colors  
- Ora spinners  
- Summary tables  

---

## 📦 Installation

```bash
git clone https://github.com/vi9521/lazyclean-kiro.git
cd lazyclean-kiro
npm install
