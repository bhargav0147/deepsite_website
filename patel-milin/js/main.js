
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-md');
    } else {
        navbar.classList.remove('shadow-md');
    }
    
    lastScrollY = window.scrollY;
});

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Smooth scroll for anchor links
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

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const isM = target.includes('M');
        const isK = target.includes('K');
        
        let numericValue = parseFloat(target.replace(/[^0-9.]/g, ''));
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (target.includes('.')) {
                displayValue = current.toFixed(1);
            }
            
            let suffix = '';
            if (isK) suffix = 'K+';
            else if (isM) suffix = 'M+';
            else if (isPlus) suffix = '+';
            else if (isPercentage) suffix = '%';
            
            counter.innerText = displayValue + suffix;
        }, stepTime);
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stat-number').closest('section');
let counted = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
            animateCounters();
            counted = true;
        }
    });
}, { threshold: 0.5 });

observer.observe(statsSection);

// Form validation enhancement
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.classList.add('border-red-300');
            input.classList.remove('border-slate-200');
        } else {
            input.classList.remove('border-red-300');
            input.classList.add('border-slate-200');
        }
    });
    
    input.addEventListener('focus', () => {
        input.classList.remove('border-red-300');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link'); // includes mobile + desktop

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-sky-500', 'font-semibold');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-sky-500', 'font-semibold');
        }
    });
});