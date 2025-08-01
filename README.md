# Alex Chen - Portfolio Website

A stunning, responsive portfolio website for graphic designers and video editors. Built with modern HTML, CSS, and JavaScript featuring smooth animations, dark/light theme toggle, and interactive elements.

## 🎨 Features

### Core Features
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme Toggle** - User preference is saved locally
- **Smooth Scrolling Navigation** - Seamless section transitions
- **Interactive Portfolio Gallery** - Filter by category with smooth animations
- **Animated Skill Bars** - Dynamic progress indicators
- **Testimonials Carousel** - Auto-advancing with manual controls
- **Contact Form** - With validation and success notifications
- **Mobile-First Navigation** - Hamburger menu for mobile devices

### Visual Elements
- **Hero Section** - Full-screen video background with overlay
- **About Section** - Professional introduction with experience stats
- **Tools & Setup** - Showcase of professional software and hardware
- **Skills Section** - Animated progress bars for design and video skills
- **Portfolio Gallery** - Filterable grid with hover effects
- **Client Testimonials** - Carousel with touch/swipe support
- **Contact Section** - Contact form with social media links
- **Resume Download** - Call-to-action section

### Technical Features
- **Modern CSS** - Flexbox, Grid, CSS Variables, Animations
- **Performance Optimized** - Throttled scroll events, lazy loading
- **Accessibility** - Keyboard navigation, focus indicators
- **Cross-Browser Compatible** - Works on all modern browsers
- **SEO Optimized** - Semantic HTML structure

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your portfolio
4. **Deploy** to your preferred hosting service

## 📁 File Structure

```
Portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This documentation
```

## 🎯 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Update name and title -->
<title>Your Name - Graphic Designer & Video Editor</title>
<h2>Your Name</h2>

<!-- Update hero section -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your tagline</p>

<!-- Update about section -->
<p>Your personal description...</p>

<!-- Update contact information -->
<p>your.email@example.com</p>
<p>+1 (555) 123-4567</p>
<p>Your Location</p>
```

### Portfolio Items
Add or modify portfolio items in the portfolio section:

```html
<div class="portfolio-item" data-category="logo">
    <div class="portfolio-image">
        <img src="path/to/your/image.jpg" alt="Project Title">
        <div class="portfolio-overlay">
            <h3>Project Title</h3>
            <p>Project description</p>
            <a href="#" class="portfolio-link">View Details</a>
        </div>
    </div>
</div>
```

### Skills
Update skill percentages in the skills section:

```html
<div class="skill-bar">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>85%</span>
    </div>
    <div class="skill-progress">
        <div class="skill-fill" data-percent="85"></div>
    </div>
</div>
```

### Tools & Software
Modify the tools section to reflect your setup:

```html
<div class="tool-item">
    <i class="fab fa-adobe"></i>
    <span>Adobe Photoshop</span>
</div>
```

### Testimonials
Add or update client testimonials:

```html
<div class="testimonial-item">
    <div class="testimonial-content">
        <div class="testimonial-text">
            <p>"Client testimonial text..."</p>
        </div>
        <div class="testimonial-author">
            <img src="client-photo.jpg" alt="Client Name">
            <div class="author-info">
                <h4>Client Name</h4>
                <p>Client Title, Company</p>
            </div>
        </div>
    </div>
</div>
```

## 🎨 Theme Customization

### Colors
Update CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary color */
    --accent-color: #f59e0b;       /* Accent color */
    --bg-color: #ffffff;           /* Background color */
    --text-color: #333333;         /* Text color */
    --surface-color: #f8fafc;      /* Surface color */
    --border-color: #e2e8f0;       /* Border color */
}
```

### Fonts
Change fonts by updating the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Custom Animations
Add new keyframes in `styles.css`:

```css
@keyframes yourAnimation {
    from {
        /* Initial state */
    }
    to {
        /* Final state */
    }
}
```

### Portfolio Filter Categories
Add new filter buttons and update the JavaScript filter logic:

```html
<button class="filter-btn" data-filter="newcategory">New Category</button>
```

### Contact Form Integration
Replace the simulated form submission in `script.js` with actual API calls:

```javascript
// Replace the setTimeout with actual form submission
fetch('/api/contact', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    showNotification('Message sent successfully!', 'success');
})
.catch(error => {
    showNotification('Error sending message', 'error');
});
```

## 🌟 Performance Tips

1. **Optimize Images** - Use WebP format and compress images
2. **Minimize HTTP Requests** - Combine CSS/JS files for production
3. **Enable Gzip Compression** - On your web server
4. **Use CDN** - For external libraries and fonts
5. **Lazy Load Images** - For better initial page load

## 🔒 Security Considerations

1. **Form Validation** - Both client and server-side validation
2. **HTTPS** - Always use HTTPS in production
3. **Content Security Policy** - Add CSP headers
4. **Input Sanitization** - Sanitize all user inputs

## 📈 SEO Optimization

1. **Meta Tags** - Add proper meta descriptions and keywords
2. **Structured Data** - Add JSON-LD schema markup
3. **Alt Text** - Add descriptive alt text to all images
4. **Sitemap** - Create and submit XML sitemap
5. **Page Speed** - Optimize for Core Web Vitals

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select source branch
4. Your site will be available at `username.github.io/repository-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployments on every push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts

## 🛠️ Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you need help customizing this portfolio:

1. Check the customization guide above
2. Review the code comments
3. Open an issue for bugs
4. Contact for custom development

## 🎉 Credits

- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Icons**: Font Awesome
- **Images**: Unsplash (placeholder images)
- **Design Inspiration**: Modern portfolio trends

---

**Made with ❤️ for creative professionals** 