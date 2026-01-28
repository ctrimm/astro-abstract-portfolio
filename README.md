# Brutalistic Portfolio Theme

<img width="3812" height="2282" alt="Home page of burtalistic website theme" src="https://github.com/user-attachments/assets/4324feb2-1328-4ae6-9dd1-90c98500ac87" />

A modern, dark-themed portfolio website built with Astro, inspired by early glitch websites.

## Features

- 🎨 **Dark Mode Design** - Beautiful dark theme with vibrant violet accents
- ⚡ **Fast & Performant** - Built with Astro for optimal performance
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Smooth Animations** - Engaging scroll animations and transitions
- 📝 **Content Collections** - Type-safe content management for projects and blog posts
- 🎯 **SEO Optimized** - Meta tags, Open Graph, and sitemap included
- 🚀 **GitHub Pages Ready** - Automated deployment with GitHub Actions

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: MDX with Content Collections
- **Typography**: Inter Variable font
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ctrimm/astro-abstract-portfolio.git
cd astro-abstract-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

```
/
├── public/               # Static assets
│   ├── fonts/
│   └── images/
├── src/
│   ├── assets/          # Image assets
│   ├── components/      # Astro components
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/         # Content collections
│   │   ├── blog/
│   │   ├── projects/
│   │   └── testimonials/
│   ├── data/            # Site configuration
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## Customization

### Site Configuration

Edit `src/data/site.ts` to update your site information:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  url: 'https://yourdomain.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    // ... other social links
  },
};
```

### Adding Projects

Create a new markdown file in `src/content/projects/`:

```markdown
---
title: Your Project Title
description: Project description
thumbnail: /images/projects/your-project.jpg
category: web-design
technologies: [React, Next.js, Tailwind CSS]
featured: true
publishDate: 2024-01-01
---

Your project content here...
```

### Color Theme

Customize colors in `tailwind.config.mjs` and `src/styles/global.css`:

```css
:root {
  --accent-primary: 139 92 246;  /* Violet-500 */
  /* ... other color variables */
}
```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. The GitHub Action will automatically build and deploy
3. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)

### Manual Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Design inspired by [Impressa](https://www.webestica.com/framer-templates/personal-portfolio-framer-template) by Webestica
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## Support

If you have any questions or run into issues, please open an issue on GitHub.
