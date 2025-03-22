# Ben's Template

A modern website template built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Tech Stack**: Next.js 15, React 18, TypeScript, and Tailwind CSS
- **UI Components**: Built with shadcn/ui for beautiful, accessible components
- **Dark Mode Support**: Toggle between light and dark modes
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Built with accessibility in mind
- **SEO Optimization**: Well-structured metadata and semantic HTML
- **Performance**: Fast loading and rendering
- **Clean Code**: Well-organized, maintainable codebase

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bens-template.git

# Navigate to the project directory
cd bens-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── layouts/      # Layout components
│   └── ui/           # UI components
├── lib/              # Utility functions
└── styles/           # Global styles
```

## Customization

### Styling

This template uses Tailwind CSS for styling. The configuration file is located at `tailwind.config.ts`.

### Components

UI components are built with shadcn/ui. You can find them in the `src/components/ui` directory.

### Adding New Pages

Create new pages by adding files to the `src/app` directory following Next.js 15 App Router conventions.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start the production server
- `npm run lint` - Check code quality

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

## License

MIT License

---

Made by Ben Ortiz