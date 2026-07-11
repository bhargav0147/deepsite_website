/**
 * Return2Success Business Club
 * Interactive JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // ========================================
    // Sticky Navbar on Scroll
    // ========================================
    const navbar = document.getElementById('navbar');
    let lastScrollY = window.scrollY;
    
    function handleNavbarScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    
    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                
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
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // ========================================
    // Scroll Animations (Intersection Observer)
    // ========================================
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // ========================================
    // Back to Top Button
    // ========================================
    const backToTopBtn = document.getElementById('backToTop');
    
    function handleBackToTopVisibility() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========================================
    // Active Navigation Link Highlight
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        const scrollY = window.scrollY;
        const navHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection, { passive: true });
    
    // ========================================
    // Stats Counter Animation
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const heroSection = document.getElementById('hero');
        if (!heroSection) return;
        
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom < window.innerHeight + 200) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
                const suffix = finalValue.replace(/[\d]/g, '');
                
                let currentValue = 0;
                const increment = Math.ceil(numericValue / 30);
                const duration = 1500;
                const stepTime = duration / (numericValue / increment);
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        currentValue = numericValue;
                        clearInterval(counter);
                    }
                    stat.textContent = currentValue + suffix;
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateStats, { passive: true });
    
    // ========================================
    // Referral Layer Hover Effects
    // ========================================
    const referralLayers = document.querySelectorAll('.referral-layer');
    
    referralLayers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            this.querySelector('.layer-content').style.transform = 'scale(1.02)';
        });
        
        layer.addEventListener('mouseleave', function() {
            this.querySelector('.layer-content').style.transform = 'scale(1)';
        });
    });
    
    // ========================================
    // Initialize - Trigger initial scroll handlers
    // ========================================
    handleNavbarScroll();
    handleBackToTopVisibility();
    highlightActiveSection();
    
    // Check if user has scrolled past hero on page load
    setTimeout(animateStats, 500);
});
