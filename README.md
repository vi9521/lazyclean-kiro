🧹 LazyClean — Smart Folder Cleaner (Kiro Week 2 Ready)
<p align="center"> <img src="https://img.shields.io/badge/Node.js-ESM%20Project-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/CLI-Tool-blue?style=for-the-badge" /> <img src="https://img.shields.io/badge/Kiro-Week%202-ff9800?style=for-the-badge" /> <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" /> </p>
🚀 What is LazyClean?

LazyClean is a fast, production-ready Node.js CLI tool that automatically organizes messy folders.

It sorts files into categories:

🖼 Images
🎥 Videos
📄 Documents
🎵 Audio
🗄 Archives
💻 Code
📦 Others

LazyClean also detects duplicate files using SHA-1, supports undo, dry-run, recursive scan, and provides a beautiful CLI experience.

✨ Key Features
🗂 Automatic Categorization
Sorts files into category-based folders.

🧬 Duplicate Detection
SHA-1 hashing → duplicates moved to /Duplicates.

🧪 Dry-Run Mode
Preview actions without modifying files.

🔁 Undo System
Revert past actions using lazyclean-log.json.

🌲 Recursive Scan
Organizes files inside nested folders.

🚫 Ignore System
Skip files/folders using .klignore.

🎨 Beautiful CLI
Figlet banner
Chalk colors
Ora spinners
Summary tables

📦 Installation
git clone https://github.com/vi9521/lazyclean-kiro.git
cd lazyclean-kiro
npm install

▶️ Usage
🔍 Dry Run
node src/lazyclean.js --path <folder> --dry-run

🧹 Real Cleanup
node src/lazyclean.js --path <folder>

🔁 Undo Last Cleanup
node src/lazyclean.js --path <folder> --undo

🔁 Undo Multiple Steps
node src/lazyclean.js --path <folder> --undo --undo-steps 5

📊 Report
node src/lazyclean.js --path <folder> --report

🌲 Recursive Mode
node src/lazyclean.js --path <folder> --recursive

🚫 Ignore Rules
Create .klignore:
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
Same hash → file is a duplicate
Duplicate moved to /Duplicates
Logged for undo

🔁 Undo System
All operations are logged in:
lazyclean-log.json

Undo restores files safely to their original locations.
