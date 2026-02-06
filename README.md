# 🚀 Portfolio - Tanush Banchhod

A modern, interactive portfolio website showcasing my work as an AI & Automation Engineer. Built with vanilla JavaScript, React components, and Three.js for stunning visual effects.

## ✨ Features

- **🎨 Liquid Ether Background** - Interactive WebGL fluid simulation using Three.js
- **💳 3D Profile Card** - Holographic card with tilt effects and smooth animations
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **⚡ Performance Optimized** - Lazy loading, intersection observers, and efficient rendering
- **🎯 Modern UI/UX** - Glassmorphism design with smooth transitions

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**: 
  - React 18 (for components)
  - Three.js (for 3D graphics)
  - WebGL (for fluid simulation)
- **Design**: Custom CSS with modern features (CSS Grid, Flexbox, CSS Variables)
- **Fonts**: Inter & JetBrains Mono (Google Fonts)

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── .gitignore             # Git ignore rules
├── assets/
│   ├── css/               # Stylesheets
│   │   ├── styles.css     # Main styles
│   │   ├── LiquidEther.css
│   │   └── ProfileCard.css
│   ├── js/                # JavaScript files
│   │   ├── script.js      # Main application logic
│   │   ├── liquid-background.js
│   │   └── ProfileCard.js
│   └── images/            # Image assets
│       └── IMG_2683.jpg   # Profile photo
└── components/            # Test/additional components
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open locally**
   - Simply open `index.html` in your browser, or
   - Use a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **View in browser**
   - Open `http://localhost:8000` in your browser

## 📝 Customization

### Updating Profile Information

Edit `index.html` and update:
- Name, title, and contact information
- Work experience in the timeline section
- Skills and technologies
- Project descriptions

### Changing Colors

Edit `assets/css/styles.css` and modify CSS variables:
```css
:root {
    --color-accent-primary: #6366f1;
    --color-accent-secondary: #8b5cf6;
    /* ... more variables */
}
```

### Adding Your Photo

Replace `assets/images/IMG_2683.jpg` with your photo, or update the path in `index.html`:
```javascript
avatarUrl: "assets/images/your-photo.jpg",
```

## 🎯 Performance

- **Lazy Loading**: Images and components load on demand
- **Intersection Observer**: Animations trigger when elements are visible
- **Optimized Rendering**: RequestAnimationFrame for smooth 60fps animations
- **Resource Management**: Proper cleanup and disposal of Three.js objects

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: tanushbanchhod@gmail.com
- **LinkedIn**: [linkedin.com/in/tanush-banchhod](https://linkedin.com/in/tanush-banchhod)
- **GitHub**: [github.com/Tanush-banchhod](https://github.com/Tanush-banchhod)

---

**Built with ❤️ by Tanush Banchhod**
