# Melissa Gaglione - Content Creator Portfolio

A stunning, interactive portfolio website for Melissa Gaglione, featuring modern animations, glassmorphism effects, and a WebGL shader background.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)

## ✨ Features

- **WebGL Shader Background** - Animated RGB wave effect using Three.js
- **Card Dispersion Animation** - Cards fan out from center like a deck of playing cards
- **Glassmorphism Design** - Modern glass-effect cards with blur and transparency
- **Framer Motion Animations** - Smooth, hardware-accelerated animations throughout
- **Responsive Design** - Optimized for all screen sizes
- **Cyan/Teal Theme** - Modern color palette with gradient accents

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles & theme
├── components/
│   ├── sections/         # Page sections
│   │   ├── hero-section.tsx
│   │   ├── expertise-section.tsx
│   │   ├── audience-section.tsx
│   │   ├── events-section.tsx
│   │   ├── podcast-section.tsx
│   │   ├── videos-section.tsx
│   │   └── footer-section.tsx
│   ├── ui/               # UI components
│   │   ├── web-gl-shader.tsx
│   │   └── liquid-glass-button.tsx
│   └── shared/           # Reusable components
│       ├── animated-card.tsx
│       └── gradient-text.tsx
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:
```css
--primary: #22d3ee;    /* Cyan accent */
--accent: #06b6d4;     /* Darker cyan */
```

### Content
Update section content in `src/components/sections/` files.

## 📄 License

MIT License

---

Built with ❤️ using Next.js and Framer Motion
