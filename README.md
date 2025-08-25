# Truvora - Product Review Blog Website

A modern product review and recommendation blog website, dedicated to providing users with professional and objective product evaluations.

## Features

### 🎨 Design Features
- **Modern Design**: Clean and beautiful interface design
- **Responsive Layout**: Perfect compatibility with desktop, tablet, and mobile devices
- **Smooth Animations**: Rich CSS animations and transition effects
- **Truvora Branding**: Professional brand identity and color scheme

### 📱 Page Structure
- **Homepage**: Hero section, blog article showcase, featured product recommendations
- **Blog Pages**: Article categorization, search, and pagination functionality
- **Product Pages**: Detailed product information, images, ratings, and purchase links
- **About Us**: Company introduction, team showcase, review methodology explanation
- **Contact Page**: Contact form, FAQ, and location information

### ⚡ Interactive Features
- **Smart Search**: Real-time search for articles and products
- **Category Filtering**: Filter blog articles and products by category
- **Product Sorting**: Sort by rating, price, and publication date
- **Pagination Navigation**: Optimized pagination experience
- **Social Sharing**: Integrated social media sharing functionality
- **Form Validation**: Complete contact form functionality

### 🚀 Technical Features
- **Native JavaScript**: Dependency-free modern JavaScript
- **CSS Grid/Flexbox**: Modern CSS layout techniques
- **Intersection Observer**: High-performance scroll animations
- **Responsive Images**: Optimized image loading
- **SEO Friendly**: Semantic HTML structure

## File Structure

```
Truvora/
├── index.html          # Homepage
├── about.html          # About us page
├── contact.html        # Contact page
├── products.html       # Product recommendation page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── assets/
│   └── truvora-logo.svg # Brand logo
└── README.md           # Project documentation
```

## Usage Instructions

1. **Local Development**:
   ```bash
   # Start local server in project root directory
   python -m http.server 8000
   # Or using Node.js
   npx serve .
   ```

2. **Access Website**:
   Open browser and visit `http://localhost:8000`

## Feature Details

### Search Functionality
- Supports real-time search of article titles and content
- Highlighted search results display
- Debounced optimization for improved performance

### Category Filtering
- Blog article categories: Technology, Home & Living, Beauty & Care, Fitness & Sports
- Product categories: Including kitchen appliances and more categories
- Smooth filtering animation effects

### Responsive Design
- Mobile-friendly hamburger menu
- Flexible grid layout
- Adaptive font sizes and spacing for different screen sizes

### Animation Effects
- Scroll-triggered fade-in animations
- Hover effects and transition animations
- Progressive animations during page loading

### Social Media Integration
- Twitter, Facebook, Instagram, LinkedIn links
- Content sharing functionality
- Social media icon hover effects

## Customization Guide

### Modify Color Scheme
Modify CSS variables in `styles.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #ff6b6b;
  --gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Add New Products
Add new product cards in `products.html` and `index.html`:
```html
<div class="product-item" data-category="New Category" data-rating="4.5" data-price="999">
  <!-- Product content -->
</div>
```

### Modify Blog Articles
Add new articles in the blog section of `index.html`:
```html
<article class="blog-card" data-category="Category">
  <!-- Article content -->
</article>
```

## Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance Optimization

- Image lazy loading
- CSS and JavaScript optimization
- Responsive images
- Debounced search
- Optimized animation performance

## Contact Information

If you have any questions or suggestions, please contact us:
- Email: info@truvora.com
- Phone: +1 (555) 123-4567

---

© 2025 Truvora. Professional product review and recommendation platform.