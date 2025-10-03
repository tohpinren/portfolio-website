# Pin Ren Toh - Portfolio Website

A minimal, fast-loading portfolio website for a Backend/AI Engineer. Built with pure HTML/CSS for maximum speed and simplicity.

## 🚀 How to Run

This is a static website with zero dependencies. You can run it in multiple ways:

### Option 1: Direct File Opening
```bash
open index.html
```
Opens directly in your default browser.

### Option 2: Local Server (Recommended)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx serve .

# PHP (if you have it)
php -S localhost:8000
```
Then visit `http://localhost:8000`

### Option 3: Live Server (VS Code)
Install Live Server extension and right-click `index.html` → "Open with Live Server"

## 📁 File Structure

```
/
├── index.html          # Main website file
├── styles.css          # Terminal-style CSS
├── favicon.ico         # Site icon
├── resume.pdf          # Your PDF resume (add this)
├── icons/              # SVG icons for companies/projects
│   ├── kipo.svg        # Kipo AI
│   ├── marymount.svg   # Marymount Labs
│   ├── icare.svg       # i-CARE
│   ├── nec.svg         # NEC Asia Pacific
│   ├── nus.svg         # National University of Singapore
│   ├── stanford.svg    # Stanford University
│   ├── sql.svg         # SQL Mutation Testing project
│   ├── coreflint.svg   # CoreFlint project
│   └── whatsapp.svg    # WhatsApp Actions project
└── README.md           # This file
```

## 🎯 Design Philosophy

- **Zero dependencies** - Pure HTML/CSS, no frameworks
- **Terminal aesthetic** - Monospace fonts, black background, white text
- **Lightning fast** - Optimized for hiring manager time constraints
- **No animations** - Focus on content, not flair
- **Mobile responsive** - Works on all screen sizes
- **Accessibility focused** - Screen reader friendly

## 🔧 Customization

### Adding Your Resume
Replace the placeholder with your actual PDF:
```bash
# Remove placeholder and add your resume
rm resume.pdf
cp /path/to/your/resume.pdf ./resume.pdf
```

### Updating Content
All content is in `index.html`. Key sections:
- **Experience** - Work history with quantified achievements
- **Projects** - Technical projects with impact metrics
- **Education** - Academic background
- **Skills** - Technical stack organized by category

### Modifying Styles
Edit `styles.css` for visual changes:
- Colors: Currently black background (#000) with white text (#fff)
- Typography: Monospace font stack for terminal feel
- Layout: Responsive grid with mobile breakpoints

### Icon Customization
All icons are in `icons/` as SVG files:
- 24x24px white stroke icons
- Minimal geometric designs
- Easily customizable via SVG editing

## 🚀 Deployment

### Static Hosting (Recommended)
- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Drag & drop the folder or connect Git
- **GitHub Pages**: Enable in repo settings
- **AWS S3**: Upload files to S3 bucket with static hosting

### Manual Upload
Upload all files to any web server that serves static files.

## ⚡ Performance Features

- **Inline critical CSS** - No external CSS blocking
- **Optimized images** - SVG icons for scalability
- **Minimal DOM** - Clean semantic HTML structure
- **No JavaScript** - Pure static content
- **Fast fonts** - System font fallbacks

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## 🔄 Updates

To update content:
1. Edit `index.html` directly
2. Test locally with any of the run methods above
3. Deploy updated files

No build process needed - what you see is what you deploy.

## 📊 Site Metrics

- **Load time**: Sub-second on most connections
- **File size**: < 15KB total (excluding resume.pdf)
- **Requests**: Minimal (HTML + CSS + icons)
- **Dependencies**: Zero

---

**Built for speed, built for hiring managers, built for results.**