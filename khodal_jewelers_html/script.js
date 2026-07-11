/* ========================================
   Khodal Jewelers - Minimal JavaScript
   Pure Vanilla JS - No Libraries
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.getElementById('header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (menuToggle) {
        menuToggle.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // ========================================
    // Smooth Scroll for Navigation Links
    // ========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.length <= 1) {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // FAQ Accordion
    // ========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Check if this item is already active
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(function(faqItem) {
                    faqItem.classList.remove('active');
                });
                
                // If the clicked item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // ========================================
    // Animate on Scroll (Simple Implementation)
    // ========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animateOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .process-step, .stat');
    
    animateElements.forEach(function(element) {
        animateOnScroll.observe(element);
    });
    
    // ========================================
    // Close mobile menu on escape key
    // ========================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // ========================================
    // Close mobile menu on click outside
    // ========================================
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMobileMenu();
        }
    });
    
});
