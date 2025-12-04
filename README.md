# 🧹 LazyClean — Smart Folder Cleaner (Kiro Week 2 Ready)

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-ESM%20Project-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/CLI-Tool-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Kiro-Week%202-ff9800?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

**📝 Featured Article:** [LazyClean: Building a Smart File Organizer with Kiro AI - From Chaos to Order in 3 Days](https://builder.aws.com/content/36LY29Hwh6QeH8EKukVCO0p8jZR/lazyclean-building-a-smart-file-organizer-with-kiro-ai-from-chaos-to-order-in-3-days)

**👤 Author:** [Digvijay Gade on AWS Builder Center](https://builder.aws.com/profiles/digvijaygade)

> Built for **Kiro Week 2 Challenge: Lazy Automation** | ⏱️ Developed in 3 days with Kiro AI assistance

---

## 🤖 Built with Kiro AI

LazyClean was significantly enhanced with **Kiro AI assistance**. Kiro helped implement:

- ✅ **Progress bars** with `cli-progress` library  
- ✅ **File size analysis** and formatted tables  
- ✅ **Enhanced error handling** patterns  
- ✅ **Smart backup system** architecture  

**Development Impact:** Features that would have taken 12-15 hours were implemented in just 3-4 hours with Kiro's guidance - **4x faster development!**

📖 **Read the complete story:** [How I Built LazyClean with Kiro AI](https://builder.aws.com/content/36LY29Hwh6QeH8EKukVCO0p8jZR/lazyclean-building-a-smart-file-organizer-with-kiro-ai-from-chaos-to-order-in-3-days)

---

## 🚀 What is LazyClean?

LazyClean is a fast, production-ready Node.js CLI tool that automatically organizes messy folders.

It sorts files into:

- 🖼 **Images** (jpg, png, gif, svg, webp)  
- 🎥 **Videos** (mp4, avi, mkv, mov, wmv)  
- 📄 **Documents** (pdf, doc, docx, txt, xlsx, pptx)  
- 🎵 **Audio** (mp3, wav, flac, aac, ogg)  
- 🗄 **Archives** (zip, rar, 7z, tar, gz)  
- 💻 **Code** (js, py, java, cpp, html, css)  
- 📦 **Others** (everything else)  

LazyClean also detects duplicate files using SHA-1 hashing, supports undo, dry-run, recursive scanning, and provides a beautiful CLI interface.

---

## ✨ Key Features

### 🗂 Automatic Categorization  
Sorts files into category-based folders based on file extensions.

### 🧬 Duplicate Detection  
Uses SHA-1 hashing to identify duplicate files → duplicates moved to `/Duplicates` folder.

### 🧪 Dry-Run Mode  
Preview all actions without modifying any files - see what would happen before committing.

### 🔁 Undo System  
Safely reverts past actions using `lazyclean-log.json` - restore files to their original locations.

### 🌲 Recursive Scan  
Organizes files inside subfolders and nested directory structures.

### 🚫 Ignore System  
Skip specific files/folders using `.klignore` file (similar to `.gitignore`).

### 🎨 Beautiful CLI  
- Figlet ASCII art banner  
- Chalk colored output  
- Ora loading spinners  
- Formatted summary tables  

---

## 📦 Installation
```bash
git clone https://github.com/vi9521/lazyclean-kiro.git
cd lazyclean-kiro
npm install
```

---

## ▶️ Usage

### 🔍 Dry Run (Preview Changes)
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

### 📊 Generate Report
```bash
node src/lazyclean.js --path <folder> --report
```

### 🌲 Recursive Mode (Process Subfolders)
```bash
node src/lazyclean.js --path <folder> --recursive
```

---

## 🚫 Ignore Rules

Create a `.klignore` file in your project root to skip specific patterns:
```
node_modules/
.git/
secret.txt
temp/
*.log
```

LazyClean will automatically skip these files and folders during organization.

---

## 📂 Project Structure
```
lazyclean-kiro/
├── .kiro/
│   ├── config.json          # Kiro configuration
│   └── README-kiro.md        # Kiro integration docs
├── src/
│   ├── lazyclean.js          # Main CLI application
│   ├── utils.js              # Helper functions
│   └── src_sample/           # Sample test files
├── demo_report/              # Example reports
├── demo_target/              # Example organized folders
├── README.md                 # This file
├── .gitignore
├── package.json
└── package-lock.json
```

---

## 🧠 Duplicate Detection — How It Works

LazyClean uses SHA-1 cryptographic hashing for accurate duplicate detection:

1. **Hash Calculation:** Computes SHA-1 hash for each file's content
2. **Comparison:** Files with identical hashes are duplicates (even with different names)
3. **Segregation:** Duplicate files are moved to `/Duplicates` folder
4. **Logging:** All actions logged for safe undo operations

**Example:**
- `vacation.jpg` (hash: abc123...)
- `vacation-copy.jpg` (hash: abc123...) → **Duplicate detected!**

---

## 🔁 Undo System

LazyClean logs all file operations in `lazyclean-log.json`:
```json
{
  "runs": [
    {
      "action": "move",
      "from": "image.jpg",
      "to": "Images/image.jpg",
      "timestamp": "2025-12-04T10:30:00.000Z"
    }
  ]
}
```

Undo safely restores files to their original locations - **zero data loss risk!**

---

## 📖 Learn More

Want to know how LazyClean was built? Read the detailed development story:

**📝 [LazyClean: Building a Smart File Organizer with Kiro AI](https://builder.aws.com/content/36LY29Hwh6QeH8EKukVCO0p8jZR/lazyclean-building-a-smart-file-organizer-with-kiro-ai-from-chaos-to-order-in-3-days)**

The article covers:
- The 2 AM problem that inspired LazyClean
- How Kiro AI accelerated development by 4x
- Technical implementation details
- Challenges solved and lessons learned

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

## 👨‍💻 Author

**Digvijay Gade** ([@vi9521](https://github.com/vi9521))

- 🌐 [AWS Builder Center Profile](https://builder.aws.com/profiles/digvijaygade)
- 📝 [Read My Articles](https://builder.aws.com/profiles/digvijaygade)
- 💼 Built for **Kiro Week 2 Challenge: Lazy Automation**

---

## 🎯 Project Status

✅ **Fully Functional** - Production-ready CLI tool  
✅ **Well Documented** - Complete usage guide and blog post  
✅ **Kiro Enhanced** - Built with AI assistance for rapid development  
✅ **Open Source** - MIT License, contributions welcome  

---

## 🙏 Acknowledgments

- **Kiro AI** - For accelerating feature development
- **AWS Builder Center** - For hosting the development blog
- **AI for Bharat** - For organizing the Kiro Week 2 Challenge

---

<p align="center">
  <strong>⭐ Star this repo if you find it useful!</strong>
</p>

<p align="center">
  Built with ❤️ for developers who hate messy folders
</p>
