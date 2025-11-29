# PostPilot

A modern landing page for PostPilot - a postcard marketing platform for ecommerce businesses.

## 🚀 Tech Stack

- **Next.js 14.2.33** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Swiper** - Touch slider component

## 📦 Features

- Responsive design for all screen sizes
- Smooth animations with Framer Motion
- Custom fonts (Inter & Covered By Your Grace)
- Optimized images with Next.js Image component
- Type-safe development with TypeScript
- Modern UI with Tailwind CSS v4

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Development

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

## 📁 Project Structure

```
post-pilot/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── (home)/       # Home page and components
│   │   ├── fonts/        # Custom fonts
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable components
│   │   ├── animation/    # Animation variants
│   │   ├── constant/     # Data constants
│   │   └── layout/       # Layout components
│   └── ...
├── public/               # Static assets
└── ...
```

## 🎨 Styling

The project uses Tailwind CSS v4 with custom theme configuration in `globals.css`:

- Custom colors (mint, primary, secondary, light-dark)
- Custom fonts (Inter, Covered By Your Grace)
- Responsive container utilities
- Custom utility classes

## 📝 Code Quality

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 🚢 Deployment

The project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

```bash
npm run build
npm start
```

## 📄 License

Private project
