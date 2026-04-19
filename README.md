# Portfolio Website

A personal portfolio built with React and Vite, featuring terminal-inspired aesthetics with custom ASCII animations.

## Features

### Pages (React Router)
- **Home Page**: About Me, Research Interests, Personal Details, Profile Section
- **Projects Page**: Interactive project showcase with GitHub repository links

### Navigation
- NavLink-based routing with active state styling

### Personal Details
- Name: Gavinolla Hrishikesh Reddy
- Phone: +91 7799889259
- Email: hrishikeshreddyg@gmail.com | se23ucse065@mahindrauniversity.edu.in
- Skills: Python, Java, C++, JavaScript, FPGA, AI/ML, React, FastAPI

### Projects (2+)
1. **UAV Threat Classifier** - FPGA-based real-time UAV detection using quantized CNN
2. **Eco Tracker** - AI-powered ecological footprint analyzer
3. **Quantum Pharma** - Pharmaceutical research platform
4. **Digital Menu** - Restaurant management system
5. **No Face Reporting** - Anonymous complaint system

### Animations & Visual Effects
- **ASCII Fluid Animation** - Dynamic background with flowing ASCII characters
- **Glitch Text Effect** - Cyberpunk-style glitchy text rendering
- **3D ASCII Torus** - Rotating 3D torus rendered in ASCII
- **Scanline Effect** - Retro CRT scanline overlay
- **Smooth Scroll** - Anchor-based smooth scrolling
- **Hover Transitions** - Color and transform animations on interactive elements
- **Marquee Effect** - Infinite scrolling text banner
- **Motion Animations** - Page load animations using Framer Motion

### Styling
- Terminal/cyberpunk aesthetic
- Dark theme with green accents (#00ff00)
- Responsive design (mobile + desktop)
- Custom CSS with CSS variables
- Tailwind CSS for utility classes

### Tech Stack
- React 19
- Vite 6
- TypeScript
- Framer Motion (motion/react)
- Tailwind CSS 4
- Lucide React (icons)
- React Router DOM

## Deployment (GitHub Pages)

### Step 1: Initialize Git & Push
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hrishikesh-reddi/portfolio.git
git push -u origin main
```

### Step 2: Install gh-pages
```bash
npm install gh-pages --save-dev
```

### Step 3: Update package.json
Add to scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
Add homepage:
```json
"homepage": "https://hrishikesh-reddi.github.io/portfolio"
```

### Step 4: Use HashRouter
Replace `BrowserRouter` with `HashRouter` in App.tsx

### Step 5: Deploy
```bash
npm run deploy
```

### Step 6: Enable GitHub Pages
- Go to Repository → Settings → Pages
- Select branch: gh-pages
- Save

## Live Links

- **GitHub Repository**: https://github.com/hrishikesh-reddi/portfolio
- **Live Website**: https://hrishikesh-reddi.github.io/portfolio

## File Structure
```
/src
  /components
    AsciiFluid.tsx     - ASCII fluid animation
    AsciiTorus.tsx    - 3D torus in ASCII
    GlitchText.tsx     - Glitch text effect
    Chatbot.tsx        - AI chatbot widget
  App.tsx              - Main app with routing
  main.tsx            - Entry point
  index.css            - Global styles
```

## Assignment Details

- **Course**: CSE
- **Deadline**: 22/04/2026
- **Objective**: Build personal portfolio using React Router

## License

MIT
