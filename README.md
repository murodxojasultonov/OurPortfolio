# Professional Multilingual Portfolio - React + Vite

A clean, minimal, and professional multilingual portfolio website built with React and Vite for software developers specializing in ERP and automation solutions.

## 🚀 Features

- **React + Vite** - Modern, fast development experience
- **Multilingual** - English, Russian, and Uzbek translations
- **Responsive Design** - Works perfectly on all devices
- **Professional Design** - Clean, business-focused aesthetics
- **Language Persistence** - Selected language saved in localStorage
- **Zero External Dependencies** - Pure React, no UI libraries
- **SEO Friendly** - Semantic HTML and meta tags
- **Fast Performance** - Optimized build with Vite

## 📁 Project Structure

```
vite-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── *.css (component styles)
│   ├── data/
│   │   ├── translations.js
│   │   └── projects.js
│   ├── styles/
│   │   └── index.css (global styles)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd vite-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## ✏️ Customization

### Update Contact Information

Edit the links in `src/components/Contact.jsx`:
- Email: `your.email@example.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`

### Add Your Projects

Edit `src/data/projects.js` and add your projects to each language array:

```javascript
{
  title: "Your Project",
  problem: "Business problem description",
  solution: "Your solution",
  technologies: ["Tech1", "Tech2", "Tech3"]
}
```

### Update Translations

Edit `src/data/translations.js` to customize any text on the website.

### Change Colors

Update CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #2563eb; /* Change this */
}
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 🎨 Design Philosophy

- **Minimal & Professional** - No flashy animations
- **Business-Focused** - Clear value propositions
- **Trust-Building** - Clean, enterprise-style design
- **User-Friendly** - Intuitive navigation and interactions

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1200px
- Mobile: < 768px

## 🌍 Languages

- English (en) - Default
- Russian (ru)
- Uzbek (uz)

Easy to add more languages by extending `translations.js` and `projects.js`.

## 🔧 Technical Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Pure CSS** - No CSS frameworks
- **LocalStorage** - Language persistence
- **React Hooks** - useState, useEffect

## 📈 Performance

- Fast dev server with HMR
- Optimized production builds
- Code splitting ready
- Minimal bundle size

## 🆘 Troubleshooting

**Port already in use:**
Change port in `vite.config.js`:
```javascript
server: { port: 3001 }
```

**Build errors:**
```bash
rm -rf node_modules
npm install
npm run build
```

## 📄 License

This is a custom portfolio template. Free to use for personal portfolios.

## 🎉 You're Ready!

1. Update your contact info
2. Add your real projects
3. Customize translations
4. Build and deploy!

---

**Built with React + Vite | Professional Portfolio Template**
