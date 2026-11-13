# NorthPages — Landing Pages That Convert

A dark, cinematic landing page built with **Vite + React + Tailwind CSS** for **NorthPages**, a high-converting landing page and web development studio.

Pure frontend-only architecture: zero server dependencies, zero backend routes, zero database requirements. Ready to deploy directly to Vercel, Netlify, or GitHub Pages as static assets.

---

## 🛠 Tech Stack

- **React 19 & Vite 8**: Fast, modern frontend framework and build tool with instant HMR.
- **Tailwind CSS v4** (`@tailwindcss/vite`): Custom dark palette (`#0A0A0A` near-black, `#C9A227` warm gold accent, `#111111` surface).
- **Framer Motion**: Scroll-triggered entrance animations via reusable `<AnimatedSection>` wrapper.
- **React Scroll**: Smooth anchor navigation with active offset calculations.
- **React Icons**: Clean SVG icon system (`fi` Feather icons).
- **MUI (Material UI)**: Installed and available for future UI components with theme overrides.
- **Google Fonts**: Editorial typography pairing *Playfair Display* (display headlines) and *Inter* (body).

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Production Build
```bash
npm run build
```
Static production files will be output to the `dist/` directory.

---

## 📁 Project Structure

```
north pages/
├── public/
│   ├── favicon.svg              # Brand gold "N" monogram favicon
│   └── images/
│       └── project-krishna.svg  # High-res SVG mockup for the case study
├── src/
│   ├── components/              # Modular, one component per section
│   │   ├── Navbar.jsx           # Sticky blur nav, mobile hamburger drawer
│   │   ├── Hero.jsx             # Headline, CTAs, abstract glowing grid
│   │   ├── TrustBar.jsx         # Trust strip with client/platform badges
│   │   ├── About.jsx            # "01 / WHO I HELP" (Shopify & Service businesses)
│   │   ├── Services.jsx         # "02 / SERVICES" (3 cards with pricing & icons)
│   │   ├── FeaturedWork.jsx     # "03 / FEATURED WORK" (Data-driven case study showcase)
│   │   ├── Process.jsx          # "04 / HOW IT WORKS" (4-step responsive timeline)
│   │   ├── Testimonials.jsx     # "05 / WHAT CLIENTS SAY" (Client quote cards with gold stars)
│   │   ├── Pricing.jsx          # "06 / PRICING" (Starter, Growth, Partner tiers)
│   │   ├── Contact.jsx          # "07 / LET'S BUILD" (Form with client-side validation)
│   │   ├── Footer.jsx           # Brand signature, quick links & socials
│   │   └── AnimatedSection.jsx  # Reusable viewport scroll-animation wrapper
│   ├── data/
│   │   ├── images.js            # Centralized image URLs (swap any image in 1 line)
│   │   ├── projects.js          # Case studies data array (easy to append)
│   │   ├── testimonials.js      # Client testimonials data
│   │   └── pricing.js           # Pricing packages and feature lists
│   ├── App.jsx                  # Main single-page layout
│   ├── main.jsx                 # React root mounting
│   └── index.css                # Tailwind theme variables & bespoke button styles
├── index.html                   # SEO metadata, OpenGraph tags, Google fonts
├── vite.config.js               # Vite config with React & Tailwind plugins
└── package.json
```

---

## 🎨 Design System & Customization

### Swapping Visual Imagery (1-Line Configuration)
All photos, mockups, and textures are organized in `src/data/images.js`. To replace any image on the site with your own brand photography or Unsplash asset, edit the URL inside `siteImages`:
```javascript
export const siteImages = {
  hero: { bg: 'https://your-domain.com/hero-photo.webp' },
  whoIHelp: {
    shopify: { url: 'https://your-domain.com/shopify-product.webp' },
    service: { url: 'https://your-domain.com/service-space.webp' },
  },
  testimonials: {
    alex: 'https://your-domain.com/alex-headshot.jpg',
    // ...
  }
};
```

### Adding New Case Studies
Open `src/data/projects.js` and add an object to the `projects` array:
```javascript
{
  id: 2,
  title: "Brand Name — Project Type",
  client: "Client Name",
  category: "D2C Brand",
  brief: "Client needed a high-converting product page for paid ad traffic.",
  approach: "Designed a mobile-first visual layout with social proof & quick checkout.",
  result: "Add-to-cart rate increased by 38% in week one.",
  image: "/images/your-project-image.jpg",
  liveUrl: "https://yourclientstore.com",
  tags: ["Shopify", "CRO", "Tailwind"]
}
```
The `FeaturedWork` component will automatically render it into the layout without modifying JSX.

### Configuring the Contact Form
The contact form in `src/components/Contact.jsx` is wired for zero-backend static hosting.
1. Sign up for a free endpoint at [formspree.io](https://formspree.io) or [getform.io](https://getform.io).
2. Update the endpoint variable in `src/components/Contact.jsx`:
   ```javascript
   const FORMSPREE_URL = 'https://formspree.io/f/YOUR_ACTUAL_ID';
   ```
3. A direct `mailto:hello@northpages.com` fallback is already provided out-of-the-box.

---

## 🌐 Static Deployment

### Vercel
1. Run `npx vercel` or connect the repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect your repository with build command `npm run build` and publish directory `dist`.

### GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. If hosting under `username.github.io/repo/`, set `base: '/repo/'` in `vite.config.js`.
4. Run `npm run build && npm run deploy`.
