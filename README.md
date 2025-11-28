<<<<<<< HEAD
# Nubenta-v2.0
most updated code 
=======
# Beeba & Jennie AI - Marketing Website

A high-performance, 3D-styled marketing website built with React, TypeScript, and Tailwind CSS for selling AI automation bots.

## Features

- **Futuristic UI:** Deep purple/blue gradients, neon glow effects, and 3D glassmorphism cards.
- **Custom Cursor:** Interactive Canvas-based particle trail (desktop only).
- **Responsive:** Fully optimized for Mobile, Tablet, and Desktop.
- **Components:** Reusable 3D cards, Glow Buttons, and Forms.
- **Pages:** Home, Pricing, About Us (with Trusted By section), Contact (with Booking Form).

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS (via CDN for instant portability, easily convertible to PostCSS)
- React Router (HashRouter for broad compatibility)
- Lucide React (Icons)

## Installation & Development

1.  **Clone or Download** the project files.
2.  **Install Dependencies:**
    ```bash
    npm install react react-dom react-router-dom lucide-react
    npm install -D typescript @types/react @types/react-dom vite @vitejs/plugin-react
    ```
    *(Note: This codebase is provided as raw source files. You will need a build tool like Vite or Create React App to run it locally if you aren't dropping it into an existing environment.)*

3.  **Run Development Server** (if using Vite):
    ```bash
    npm run dev
    ```

## Deployment

### Vercel / Netlify

This project is a Single Page Application (SPA).

1.  **Build Command:** `npm run build` (or `vite build`)
2.  **Output Directory:** `dist` (or `build`)
3.  **Routing:** Because this uses `HashRouter`, no special server-side rewrite rules are needed for routing to work on static hosts.

### Manual Upload

Since Tailwind is loaded via CDN in `index.html` for this specific deliverable structure, you can technically build the React bundle and serve the `index.html` on any static host.

## Customization

- **Colors:** Edit `tailwind.config` script in `index.html`.
- **Content:** Update `constants.ts` to change prices, product names, or feature lists.
- **Logos:** Update `TRUSTED_COMPANIES` in `constants.ts`.
>>>>>>> 15a054e (Initial commit)
