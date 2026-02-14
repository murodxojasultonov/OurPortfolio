# 🎨 Professional Multilingual Portfolio

> Modern, clean, and professional portfolio website built with React + Vite

**🌐 Languages:** English | Русский | O'zbek

---

## ✨ Features

- 🌍 **Multilingual** - Three languages with smooth switching
- 🎨 **Modern Design** - Professional gradients and animations
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Fast** - Built with Vite for instant HMR
- 🎯 **SEO Ready** - Semantic HTML and meta tags
- ♿ **Accessible** - WCAG compliant
- 🎭 **Smooth Animations** - Professional hover effects
- 📧 **Contact Form** - Ready to connect with email services

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/murodxojasultonov/OurPortfolio.git

# Navigate to folder
cd OurPortfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:3000 🎉

---

## 📂 Project Structure

```
src/
├── components/       # React components
│   ├── Navigation.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ScrollToTop.jsx
├── data/            # Content data
│   ├── translations.js
│   └── projects.js
├── styles/          # Global styles
│   └── index.css
├── App.jsx          # Main app
└── main.jsx         # Entry point
```

---

## 🎯 Customization

### Update Contact Information

**File:** `src/components/Contact.jsx`

```javascript
// Line 66: Email
<a href="mailto:your.email@example.com">

// Line 75: GitHub
<a href="https://github.com/yourusername">

// Line 84: LinkedIn
<a href="https://linkedin.com/in/yourusername">
```

### Add Your Projects

**File:** `src/data/projects.js`

```javascript
{
  title: "Your Project",
  problem: "Business problem",
  solution: "Your solution",
  technologies: ["Tech1", "Tech2"]
}
```

### Change Colors

**File:** `src/styles/index.css`

```css
:root {
  --color-primary: #2563eb;  /* Change this! */
}
```

---

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

---

## 📧 Contact Form Setup

The contact form is ready but needs configuration:

### Option 1: Formspree (Easiest - 2 minutes)

1. Sign up at https://formspree.io/
2. Create a form → Get Form ID
3. Update `src/components/Contact.jsx` line 43:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID'
   ```

### Option 2: EmailJS (More features - 5 minutes)

See `EMAIL-SETUP.md` for detailed instructions.

---

## 🌐 Deployment

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Build Settings

- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 🎨 Features Overview

### Home Section
- ✨ Gradient animated title
- 💫 Smooth fade-in animations
- 🎯 Clear call-to-action buttons

### Projects
- 🚀 Emoji icons
- 🎨 Colored tech tags
- 💫 Hover effects with shadows

### Skills
- 🎯 SVG icons (6 different colors)
- 📊 Vertical colored bars
- ✨ Icon animations on hover

### About
- ✅ Gradient backgrounds
- 🎯 Checkmarks in circles
- 📝 Value propositions

### Contact
- 📧 Email, GitHub, LinkedIn links
- 📝 Working contact form
- ✨ Animated feedback messages

### Extras
- ⬆️ Scroll to top button
- 🎨 Professional gradients
- 💫 Smooth transitions
- 📱 Mobile responsive

---

## 🎨 Color Palette

```css
Primary:   #2563eb (Blue)
Secondary: #10b981 (Green)
Tertiary:  #8b5cf6 (Purple)
Orange:    #f59e0b
Cyan:      #06b6d4
```

---

## 📚 Documentation

- **QUICKSTART.md** - Quick start guide
- **README.md** - This file
- **EMAIL-SETUP.md** - Email configuration
- **GITHUB-GUIDE.md** - Git workflow
- **DESIGN-UPDATES.md** - Design changes
- **NEW-FEATURES.md** - Latest features

---

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

---

## 📄 License

MIT License - feel free to use for personal portfolios

---

## 🎉 Credits

Built with ❤️ using:
- React 18
- Vite 5
- Pure CSS (no frameworks)
- SVG icons

---

## 📞 Support

If you have questions, check the documentation files or create an issue.

---

**⭐ Star this repo if you found it helpful!**

---

**Made with React + Vite | Professional Portfolio Template**
