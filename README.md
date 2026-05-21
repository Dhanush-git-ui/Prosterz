# 🎨 Prosterz - Premium Poster E-Commerce Platform

> A modern, interactive poster marketplace built with React, TypeScript, and Vite

[![React](https://img.shields.io/badge/React-18.x-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

## 📌 About Prosterz

Prosterz is a cutting-edge e-commerce platform dedicated to curating and selling premium posters across multiple categories including movies, music albums, sports icons, sneakers, and collectibles. Built with modern web technologies, it features an immersive shopping experience with stunning 3D animations, seamless cart management, and direct WhatsApp ordering. The platform empowers creators with a robust admin dashboard for managing inventory and engaging customers through a beautifully designed, fully responsive interface that works flawlessly on any device.

## ✨ Features

- **🎯 Interactive Poster Gallery** - Browse an extensive collection of high-quality posters with stunning hover animations
- **🛒 Shopping Cart** - Add posters to cart and manage purchases seamlessly
- **👨‍💼 Admin Dashboard** - Complete poster management system with upload, edit, and delete capabilities
- **🔐 Authentication** - Secure sign-in and sign-up functionality
- **📱 Responsive Design** - Beautiful, mobile-first UI that works perfectly on all devices
- **🎨 3D Effects** - Immersive poster viewing with 3D rotation and depth animations
- **💾 Database Integration** - Powered by Supabase for reliable data management
- **🔍 Smart Filtering** - Filter posters by category and subcategory
- **💳 Pricing System** - Flexible pricing with multiple size options
- **📦 Image Management** - Organized upload and preview system

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations
- **shadcn/ui** - High-quality component library

### Backend & Database
- **Supabase** - PostgreSQL database and authentication
- **PostcSS** - CSS transformations

### Development Tools
- **ESLint** - Code quality and consistency
- **Bun** - Fast JavaScript runtime

## 📋 Project Structure

```
Prosterz/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── poster/         # Poster-related components
│   │   ├── admin/          # Admin dashboard components
│   │   ├── cart/           # Shopping cart components
│   │   ├── layout/         # Header, Footer, Navbar
│   │   └── ui/             # UI component library
│   ├── pages/              # Page components
│   ├── data/               # Static data and types
│   ├── hooks/              # Custom React hooks
│   ├── context/            # React context (Cart state)
│   ├── lib/                # Utility functions and helpers
│   └── integrations/       # Third-party integrations (Supabase)
├── public/                 # Static assets and uploads
├── supabase/               # Supabase configuration
└── vite.config.ts          # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Prosterz
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start the development server**
```bash
bun run dev
# or
npm run dev
```

The application will be available at `http://localhost:5173`

5. **Build for production**
```bash
bun run build
# or
npm run build
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run ESLint |

## 🔑 Key Features Explained

### Poster Gallery
- **Hover Effects** - 3D rotation and parallax effects when hovering over posters
- **Modal View** - Click any poster to view details and choose sizes
- **Categories** - Filter by Movies, Music, Sports, Sneakers, and more

### Shopping Cart
- **Persistent Cart** - Cart data stored in React Context
- **Size Selection** - Choose from multiple size options
- **Price Calculation** - Automatic price updates based on size
- **Quick Checkout** - One-click WhatsApp ordering

### Admin Dashboard
- **Poster Management** - Create, edit, and delete posters
- **Image Upload** - Drag-and-drop image upload with preview
- **Bulk Operations** - Manage multiple posters efficiently
- **Real-time Data** - Synced with Supabase database

### Authentication
- **Sign Up** - Create new user accounts
- **Sign In** - Secure login functionality
- **Admin Access** - Role-based dashboard access

## 🎨 Design System

### Color Palette
- **Primary** - Clean white and gray tones
- **Accents** - Modern blue and red highlights
- **Backgrounds** - Light grays with subtle shadows

### Animation Standards
- **Hover Effects** - 3D rotation on poster cards
- **Transitions** - Smooth 300-400ms durations
- **Spring Physics** - Natural motion curves for interactive elements

## 📱 Responsive Design

The application is fully responsive across all screen sizes:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

## 🔐 Security

- **Supabase Authentication** - Secure user management
- **Protected Routes** - Admin dashboard access control
- **Input Validation** - Form validation and sanitization

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support

Have questions or found a bug? Please open an issue on GitHub or contact the development team.

## 🙏 Acknowledgments

- **shadcn/ui** - For the excellent component library
- **Framer Motion** - For smooth and intuitive animations
- **Supabase** - For the amazing backend infrastructure
- **Vite** - For the blazing fast build tool

---

**Made with ❤️ by the Prosterz Team**

