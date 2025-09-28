# Innovire Event Registration Form

A modern, responsive event registration form built with Next.js 14, TypeScript, and Tailwind CSS. Features a futuristic dark blue theme with neon accents following the Innovire design system.

## 🚀 Features

- **Modern Design**: Dark blue theme with neon cyan accents and glass morphism effects
- **Fully Responsive**: Optimized for all device sizes
- **Next.js 14**: Using the latest App Router and server components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Form Handling**: Integrated with FormSubmit for easy form submissions
- **Accessibility**: Built with accessibility best practices

## 🎨 Design System

### Color Palette
- **Primary Background**: Dark Blue (`#0F172A`)
- **Secondary Surfaces**: Space Gray (`#1E293B`)
- **Accent Color**: Neon Cyan (`#00FFFF`)
- **Secondary Accent**: Electric Blue (`#3B82F6`)

### Key Visual Effects
- Neon glow effects on interactive elements
- Glass morphism cards with backdrop blur
- Smooth hover animations and transitions
- Gradient text effects
- Custom shadow utilities

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page
│   ├── form/
│   │   └── page.tsx         # Registration form page
│   └── thanks/
│       └── page.tsx         # Thank you page
└── components/
    └── layout/
        ├── Navbar.tsx       # Navigation component
        └── Footer.tsx       # Footer component
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🔧 Configuration

### Tailwind Configuration
The project uses custom Tailwind configuration with Innovire design tokens:

```javascript
// tailwind.config.js
colors: {
  'neon-cyan': '#00FFFF',
  'neon-purple': '#8A2BE2', 
  'dark-blue': '#0F172A',
  'space-gray': '#1E293B',
  'electric-blue': '#3B82F6'
}
```

### Custom Utilities
- `.text-shadow-glow`: Adds neon text glow effect
- `.shadow-neon`: Applies neon box shadow
- `.border-glow`: Creates glowing border effect
- `.glow-hover:hover`: Hover glow animation

## 📧 Form Integration

The registration form is configured to work with FormSubmit.co. To customize:

1. Replace the email in the form action:
   ```html
   <form action="https://formsubmit.co/your-email@domain.com" method="POST">
   ```

2. The form collects:
   - First Name
   - Last Name
   - Email Address
   - Grade Level
   - How they heard about the event
   - Questions/Comments

## 🎯 Event Details

**Electromagnet Workshop**
- **Date**: Saturday, February 22nd, 2025
- **Time**: 10:45 AM to 2:30 PM
- **Location**: MindShare Workspace, Mississauga, ON
- **Target**: Students in Grades 6-12

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🔮 Future Enhancements

- Email confirmation system
- Event calendar integration
- Waitlist functionality
- Social media sharing
- Multi-language support

## 🤝 Contributing

This project follows the Innovire design system standards. When contributing:

1. Maintain consistent use of design tokens
2. Follow responsive design patterns
3. Keep accessibility in mind
4. Test across different devices

## 📞 Support

For questions or support:
- Email: [innovireteam@gmail.com](mailto:innovireteam@gmail.com)
- Instagram: [@innovireteam](https://www.instagram.com/innovireteam/)

---

Built with ❤️ by the Innovire Team