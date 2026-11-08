# Farouk Benouali — Software Engineer Portfolio

A modern, responsive, trilingual portfolio website engineered for **Farouk Benouali**, Full-Stack & Flutter Mobile/Desktop Developer from Aïn Témouchent, Algeria.

## 🌟 Key Features

- **Obsidian Black & Dark Crimson Theme**: High-contrast, tech-refined aesthetic with custom glowing accents and ambient mesh gradients.
- **Dark & Light Mode**: Smooth transition between dark mode and clean light mode, persisting preference in `localStorage`.
- **Trilingual Localization (EN / FR / AR)**:
  - **English (EN)**
  - **Français (FR)**
  - **العربية (AR)**: Dynamic Right-To-Left (`dir="rtl"`) layout flipping, with Cairo/Rubik typography for native Arabic glyphs.
- **Embedded Real Photo & Visuals**: High-resolution profile portrait with animated glowing frame and status badges.
- **Interactive Project Showcase**:
  - Filter tabs: All, Full-Stack & Web, Flutter & Desktop, AI & Data Pipelines.
  - Interactive deep-dive modal for each project detailing the challenge, technical architecture, and highlights.
  - Direct links to GitHub repositories (`https://github.com/benofarouk8-byte`).
  - Bundled interactive live demos (`demos/winwin-mini.html`, `demos/medfinder.html` and `demos/scarlet.html`) testable directly from the portfolio.
- **Fully Responsive**: Fluid layout for phones, tablets, laptops and large screens, with a mobile menu and active-section highlighting in the nav.
- **Working Contact Form**: After pressing Send, the visitor can send the prepared message with Gmail, their mail app, or copy it. One-click email copy button with toast notification (`benofarouk8@gmail.com`) and social links to LinkedIn and GitHub.

---

## 📁 Project Structure

```
farouk-portfolio/
│
├── index.html                 # Semantic, accessible HTML5 single-page application
├── styles.css                 # CSS custom properties, RTL support, dark/light theme
├── script.js                  # i18n dictionaries, theme engine, project modal logic
├── assets/
│   ├── farouk.jpg             # High-res profile portrait
│   └── medfinder-preview.jpg  # Project visual
├── demos/
│   ├── winwin-mini.html       # Standalone interactive WinWin DZ demo
│   ├── medfinder.html         # Standalone MedFinder demo
│   └── scarlet.html           # Standalone Scarlet voice assistant demo (notes, timer, calculator, music)
└── README.md                  # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening
Double-click `index.html` in file explorer to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Local HTTP Server (Python / Node / VS Code)
Using Python:
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

Using VS Code:
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Free 1-Click Deployment Options

### 1. GitHub Pages
1. Push this folder to your GitHub repository: `https://github.com/benofarouk8-byte/portfolio`
2. Go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (root) and click **Save**.
4. Your site will be live at: `https://benofarouk8-byte.github.io/portfolio/`

### 2. Vercel
1. Install Vercel CLI (`npm i -g vercel`) or visit [vercel.com](https://vercel.com).
2. Run `vercel` in this folder or link your GitHub repository.
3. Instant deployment with automatic HTTPS and custom domain support.

### 3. Netlify
Drag and drop this entire folder into [app.netlify.com/drop](https://app.netlify.com/drop) for instant deployment.

