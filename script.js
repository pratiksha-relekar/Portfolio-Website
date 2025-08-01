// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize preloader
    initPreloader();
    
    // Initialize all functionality
    initThemeToggle();
    initMobileNavigation();
    initSmoothScrolling();
    initPortfolioFilter();
    initTestimonialsCarousel();
    initSkillAnimations();
    initContactForm();
    initScrollAnimations();
    initNavbarScroll();
});

// Preloader Functionality
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Remove preloader from DOM after animation
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000); // Show preloader for at least 1 second
    });
    
    // Fallback: Hide preloader if load event doesn't fire
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 3000);
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light theme
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.className = savedTheme;
    updateThemeIcon(themeIcon, savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
        body.className = currentTheme;
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(themeIcon, currentTheme);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark-theme') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .hero-buttons a, .footer-section a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Portfolio Filter Functionality
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items with animation
            portfolioItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Testimonials Carousel
function initTestimonialsCarousel() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialItems.forEach(item => item.classList.remove('active'));
        navDots.forEach(dot => dot.classList.remove('active'));
        
        testimonialItems[index].classList.add('active');
        navDots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialItems.length;
        showSlide(currentSlide);
    }
    
    // Auto-advance slides
    setInterval(nextSlide, 5000);
    
    // Manual navigation with dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carousel = document.querySelector('.testimonials-carousel');
    
    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                currentSlide = (currentSlide + 1) % testimonialItems.length;
            } else {
                // Swipe right - previous slide
                currentSlide = (currentSlide - 1 + testimonialItems.length) % testimonialItems.length;
            }
            showSlide(currentSlide);
        }
    }
}

// Skill Animations
function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const percent = skillBar.getAttribute('data-percent');
                skillBar.style.width = percent + '%';
                skillBar.classList.add('animate');
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else {
        notification.style.background = '#ef4444';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.about-content, .tools-grid, .skills-grid, .portfolio-grid, .contact-content');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background on scroll
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            if (document.body.classList.contains('dark-theme')) {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            if (document.body.classList.contains('dark-theme')) {
                navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            }
        }
        
        // Hide/show navbar on scroll (optional)
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Portfolio Item Click Handlers
document.addEventListener('DOMContentLoaded', function() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkType = this.getAttribute('data-type');
            const videoUrl = this.getAttribute('data-video');
            
            if (linkType === 'video' && videoUrl) {
                // Show video modal
                showVideoModal(videoUrl);
            } else {
                // Get portfolio item info for image modal
                const portfolioItem = this.closest('.portfolio-item');
                const title = portfolioItem.querySelector('h3').textContent;
                const description = portfolioItem.querySelector('p').textContent;
                
                // Show modal with portfolio details
                showPortfolioModal(title, description);
            }
        });
    });
});

function showPortfolioModal(title, description) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>${description}</p>
                    <p>This is a detailed view of the project. You can add more information, images, or videos here.</p>
                </div>
            </div>
        </div>
    `;
    
    // Style the modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;
    
    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: var(--bg-color);
        border-radius: 15px;
        max-width: 500px;
        width: 100%;
        max-height: 80vh;
        overflow-y: auto;
        position: relative;
    `;
    
    const header = modal.querySelector('.modal-header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 1px solid var(--border-color);
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: var(--text-color);
    `;
    
    const body = modal.querySelector('.modal-body');
    body.style.cssText = `
        padding: 20px;
        color: var(--text-color);
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    function closeModal() {
        document.body.removeChild(modal);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Video Modal Function
function showVideoModal(videoUrl) {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    const closeBtn = document.querySelector('.video-modal-close');
    
    // Set video URL
    videoFrame.src = videoUrl;
    
    // Show modal
    videoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Close modal functionality
    function closeVideoModal() {
        videoModal.style.display = 'none';
        videoFrame.src = '';
        document.body.style.overflow = 'auto';
    }
    
    // Close on close button click
    closeBtn.addEventListener('click', closeVideoModal);
    
    // Close on overlay click
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    });
}

// Resume Download Handler
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Resume download started!', 'success');
            
            // You can implement actual file download here
            // For now, we'll just show a notification
        });
    }
});

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    const heroVideo = document.querySelector('.hero-video');
    
    if (hero && heroVideo) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroVideo.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', initParallaxEffect);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Navigate through sections with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = document.querySelectorAll('section[id]');
        const currentSection = getCurrentSection(sections);
        
        if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
            sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowUp' && currentSection > 0) {
            sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }
});

function getCurrentSection(sections) {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            return i;
        }
    }
    
    return 0;
} 