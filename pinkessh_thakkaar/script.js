/**
 * PINKESSH THAKKAAR - LANDING PAGE SCRIPTS
 * Pure vanilla JavaScript - No frameworks
 */

document.addEventListener('DOMContentLoaded', function() {
    // ================================
    // HEADER SCROLL EFFECT
    // ================================
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    function handleHeaderScroll() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    }
    
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    
    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('mobile-active');
            document.body.style.overflow = nav.classList.contains('mobile-active') ? 'hidden' : '';
        });
        
        // Close menu when clicking nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                nav.classList.remove('mobile-active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // ================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ================================
    // FAQ ACCORDION
    // ================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(function(faq) {
                faq.classList.remove('active');
                faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // ================================
    // FORM SUBMISSION (UI Only)
    // ================================
    const leadForm = document.getElementById('leadForm');
    const contactForm = document.getElementById('contactForm');
    
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(function() {
            // Show success message
            submitBtn.textContent = 'Thank You!';
            submitBtn.style.background = 'linear-gradient(135deg, #059669, #047857)';
            
            // Reset form
            form.reset();
            
            // Restore button after delay
            setTimeout(function() {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
            // Show alert (in production, this would be a proper notification)
            alert('Thank you for your interest! Pinkessh will contact you shortly.');
        }, 1500);
    }
    
    if (leadForm) {
        leadForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // ================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ================================
    const animatedElements = document.querySelectorAll(
        '.trust-item, .service-card, .testimonial-card, .process-step, .result-item, .faq-item'
    );
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Set initial styles and observe
    animatedElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease ' + (index % 4) * 0.1 + 's, transform 0.6s ease ' + (index % 4) * 0.1 + 's';
        observer.observe(el);
    });
    
    // ================================
    // ACTIVE NAV LINK ON SCROLL
    // ================================
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    function highlightNavOnScroll() {
        const scrollY = window.scrollY;
        const headerHeight = header.offsetHeight;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinksAll.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.style.color = 'var(--royal-blue)';
                    } else {
                        link.style.color = '';
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
    
    // ================================
    // COUNTER ANIMATION
    // ================================
    const resultNumbers = document.querySelectorAll('.result-number');
    let countersAnimated = false;
    
    function animateCounters() {
        if (countersAnimated) return;
        
        resultNumbers.forEach(function(counter) {
            const target = counter.textContent;
            const hasPlus = target.includes('+');
            const hasPercent = target.includes('%');
            const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
            
            let current = 0;
            const increment = numericValue / 50;
            const duration = 2000;
            const stepTime = duration / 50;
            
            function updateCounter() {
                current += increment;
                
                if (current < numericValue) {
                    let display = Math.floor(current);
                    if (hasPlus) display += '+';
                    if (hasPercent) display += '%';
                    counter.textContent = display;
                    setTimeout(updateCounter, stepTime);
                } else {
                    counter.textContent = target;
                }
            }
            
            updateCounter();
        });
        
        countersAnimated = true;
    }
    
    // Trigger counter animation when results section is visible
    const resultsSection = document.querySelector('.results');
    
    if (resultsSection) {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    animateCounters();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        counterObserver.observe(resultsSection);
    }
    
    // ================================
    // PARALLAX EFFECT FOR HERO
    // ================================
    const heroSection = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image-wrapper');
    
    if (heroSection && heroImage && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                heroImage.style.transform = 'translateY(' + scrolled * 0.1 + 'px)';
            }
        }, { passive: true });
    }
    
    // ================================
    // INITIALIZE
    // ================================
    handleHeaderScroll();
    highlightNavOnScroll();
    
    console.log('Pinkessh Thakkaar Landing Page Initialized');
});
