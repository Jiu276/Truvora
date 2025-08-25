// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const blogGrid = document.getElementById('blog-grid');
const productsGrid = document.getElementById('products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Search functionality
if (searchBtn && searchInput) {
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            console.log(`Searching for: ${searchTerm}`);
            // Here you would implement actual search logic
            // For demo purposes, we'll just highlight the search term
            highlightSearchResults(searchTerm);
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Filter functionality for blog posts
if (filterButtons.length > 0 && blogGrid) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blog posts
            filterBlogPosts(category);
        });
    });
}

function filterBlogPosts(category) {
    const blogCards = document.querySelectorAll('.blog-card');
    
    blogCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filter functionality for products
const productFilterButtons = document.querySelectorAll('.products-filters .filter-btn');
const sortSelect = document.getElementById('sort-select');

if (productFilterButtons.length > 0 && productsGrid) {
    productFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active state
            productFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
}

if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        sortProducts(sortSelect.value);
    });
}

function filterProducts(category) {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const itemCategory = item.dataset.category;
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.5s ease';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortProducts(sortBy) {
    const productItems = Array.from(document.querySelectorAll('.product-item'));
    const container = document.querySelector('.products-grid');
    
    productItems.sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
            case 'price-low':
                return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
            case 'price-high':
                return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
            case 'newest':
                // For demo, we'll just reverse the order
                return 0;
            default:
                return 0;
        }
    });
    
    // Remove existing items and re-append in sorted order
    productItems.forEach(item => item.remove());
    productItems.forEach(item => container.appendChild(item));
}

// Pagination functionality
const paginationNumbers = document.querySelectorAll('.pagination-number');
const paginationBtns = document.querySelectorAll('.pagination-btn');

paginationNumbers.forEach(number => {
    number.addEventListener('click', () => {
        // Update active state
        paginationNumbers.forEach(num => num.classList.remove('active'));
        number.classList.add('active');
        
        // Here you would implement actual pagination logic
        console.log(`Navigating to page: ${number.textContent}`);
    });
});

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Add animation classes to elements
window.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to blog cards
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        // Trigger animation immediately for blog cards in viewport
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 100);
    });
    
    // Add fade-in animation to product items
    document.querySelectorAll('.product-item').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
        // Trigger animation for product items
        setTimeout(() => {
            item.classList.add('visible');
        }, index * 100);
    });
    
    // Add fade-in animation to featured products
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        // Trigger animation for featured products
        setTimeout(() => {
            card.classList.add('visible');
        }, (index * 100) + 500);
    });
    
    // Add slide animations to about page elements
    document.querySelectorAll('.about-text').forEach(el => {
        el.classList.add('slide-in-left');
        setTimeout(() => el.classList.add('visible'), 100);
    });
    
    document.querySelectorAll('.about-image').forEach(el => {
        el.classList.add('slide-in-right');
        setTimeout(() => el.classList.add('visible'), 100);
    });
    
    // Add fade-in animation to team members
    document.querySelectorAll('.team-member').forEach((member, index) => {
        member.classList.add('fade-in');
        member.style.transitionDelay = `${index * 0.2}s`;
        setTimeout(() => member.classList.add('visible'), 200 + (index * 200));
    });
    
    // Add animations to stats and methodology sections
    document.querySelectorAll('.stat-item').forEach((item, index) => {
        item.classList.add('fade-in');
        setTimeout(() => item.classList.add('visible'), 300 + (index * 100));
    });
    
    document.querySelectorAll('.methodology-item').forEach((item, index) => {
        item.classList.add('fade-in');
        setTimeout(() => item.classList.add('visible'), 400 + (index * 150));
    });
});

// Search result highlighting
function highlightSearchResults(searchTerm) {
    const blogCards = document.querySelectorAll('.blog-card');
    const productItems = document.querySelectorAll('.product-item');
    
    // Reset previous highlights
    document.querySelectorAll('.highlight').forEach(el => {
        el.classList.remove('highlight');
    });
    
    // Search in blog cards
    blogCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            card.classList.add('highlight');
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
    
    // Search in product items
    productItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('.product-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.classList.add('highlight');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}

// Add highlight CSS class
const style = document.createElement('style');
style.textContent = `
    .highlight {
        transform: scale(1.02);
        box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
        border: 2px solid #007bff;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Back to top button with enhanced styling
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 55px;
    height: 55px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
    font-size: 18px;
`;

// Add hover effects
backToTopBtn.addEventListener('mouseenter', () => {
    backToTopBtn.style.transform = 'scale(1.1) translateY(-2px)';
    backToTopBtn.style.boxShadow = '0 12px 35px rgba(0, 123, 255, 0.4)';
});

backToTopBtn.addEventListener('mouseleave', () => {
    backToTopBtn.style.transform = 'scale(1) translateY(0)';
    backToTopBtn.style.boxShadow = '0 8px 25px rgba(0, 123, 255, 0.3)';
});

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
        backToTopBtn.style.animation = 'slideInUp 0.3s ease-out';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    // Add click animation
    backToTopBtn.style.animation = 'pulse 0.3s ease-out';
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Reset animation
    setTimeout(() => {
        backToTopBtn.style.animation = '';
    }, 300);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;
        if (scrolled < heroHeight) {
            const opacity = Math.max(0, 1 - scrolled / heroHeight);
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = opacity;
        }
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        
        img.addEventListener('load', () => {
            img.style.transition = 'all 0.3s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        });
    }
});

// Enhanced hover effects for cards
document.querySelectorAll('.blog-card, .product-card, .product-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'pulse 0.3s ease-in-out';
        
        // Add glow effect
        this.style.boxShadow = '0 20px 40px rgba(0,123,255,0.15), 0 0 0 1px rgba(0,123,255,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = '';
        this.style.boxShadow = '';
    });
});

// Add typewriter effect to hero title
function typeWriter(element, text, speed = 100) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typewriter effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Social media sharing functionality
function shareOnSocial(platform, url, text) {
    let shareUrl;
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);
    
    switch (platform) {
        case 'weibo':
            shareUrl = `https://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedText}`;
            break;
        case 'wechat':
            // WeChat sharing would typically require their SDK
            alert('Please copy the link to share on WeChat');
            navigator.clipboard.writeText(url);
            return;
        case 'tiktok':
            // TikTok doesn't have a direct web sharing API
            alert('Please copy the link to share on TikTok');
            navigator.clipboard.writeText(url);
            return;
        default:
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Add event listeners to social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platform = link.getAttribute('aria-label');
        const url = window.location.href;
        const text = document.title;
        shareOnSocial(platform, url, text);
    });
});

// Newsletter subscription (if present)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing! We will send the latest content to your email.');
            e.target.reset();
        }
    });
}

// Error handling for broken images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjVGNUY1Ii8+CjxwYXRoIGQ9Ik0yMCAyOEMyNC40MTgzIDI4IDI4IDI0LjQxODMgMjggMjBDMjggMTUuNTgxNyAyNC40MTgzIDEyIDIwIDEyQzE1LjU4MTcgMTIgMTIgMTUuNTgxNyAxMiAyMEMxMiAyNC40MTgzIDE1LjU4MTcgMjggMjAgMjhaIiBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMjAgMjJWMTYiIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHA+';
        img.alt = 'Image failed to load';
    });
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced search
const debouncedSearch = debounce((searchTerm) => {
    highlightSearchResults(searchTerm);
}, 300);

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm.length > 2) {
            debouncedSearch(searchTerm);
        }
    });
}