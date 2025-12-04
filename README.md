# 🧹 LazyClean — Smart Folder Cleaner (Kiro Week 2 Ready)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-ESM%20Project-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/CLI-Tool-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Kiro-Week%202-ff9800?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

**📝 Read the full story:** [How LazyClean Was Built with Kiro AI on AWS Builder Center](https://builder.aws.com/content/36LY29Hwh6QeH8EKukVCO0p8jZR/lazyclean-building-a-smart-file-organizer-with-kiro-ai-from-chaos-to-order-in-3-days)

**👤 Author Profile:** [Digvijay Gade on AWS Builder Center](https://builder.aws.com/profiles/digvijaygade)

> Built for **Kiro Week 2 Challenge: Lazy Automation** | ⏱️ Developed in 3 days with Kiro AI assistance

---

## 🤖 Built with Kiro AI

LazyClean was significantly enhanced with **Kiro AI assistance**. Kiro helped implement:

- ✅ Progress bars with `cli-progress` library  
- ✅ File size analysis and formatted tables  
- ✅ Enhanced error handling patterns  
- ✅ Smart backup system architecture  

**Time Saved:** Features that would have taken 12-15 hours were implemented in just 3-4 hours with Kiro's guidance!

📖 **Read the complete development journey:** [LazyClean Blog Post](https://builder.aws.com/content/36LY29Hwh6QeH8EKukVCO0p8jZR/lazyclean-building-a-smart-file-organizer-with-kiro-ai-from-chaos-to-order-in-3-days)

---


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
```

---

## ▶️ Usage

### 🔍 Dry Run (Preview)
```bash
node src/lazyclean.js --path <folder> --dry-run
```

### 🧹 Real Cleanup
```bash
node src/lazyclean.js --path <folder>
```

### 🔁 Undo Last Cleanup
```bash
node src/lazyclean.js --path <folder> --undo
```

### 🔁 Undo Multiple Steps
```bash
node src/lazyclean.js --path <folder> --undo --undo-steps 5
```

### 📊 Report
```bash
node src/lazyclean.js --path <folder> --report
```

### 🌲 Recursive Mode
```bash
node src/lazyclean.js --path <folder> --recursive
```

---

## 🚫 Ignore Rules

Create a `.klignore` file:
```
node_modules/
secret.txt
temp/
```

---

## 📂 Project Structure
```
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
```

---

## 🧠 Duplicate Detection — How It Works

LazyClean:
- Computes SHA-1 hash for each file
- Duplicate files share the same hash
- Duplicates are moved to `/Duplicates`
- Action is logged for undo

---

## 🔁 Undo System

LazyClean logs all operations in:
```
lazyclean-log.json
```

Undo safely restores files to their original location.

---

## 📜 License

MIT License — free to use and modify.

---

## 👨‍💻 Author

Created by [vi9521](https://github.com/vi9521) for Kiro Week 2 Project.
