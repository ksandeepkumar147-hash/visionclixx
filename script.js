// Vision Clixx Website JavaScript

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Mobile Navigation Toggle
function toggleMenu() {
    const nav = document.querySelector('nav');
    const menu = document.createElement('div');
    menu.className = 'md:hidden absolute top-full left-0 w-full glass p-4';
    menu.innerHTML = `
        <div class="flex flex-col space-y-4">
            <a href="#home" class="hover:text-purple-400 transition">Home</a>
            <a href="#services" class="hover:text-purple-400 transition">Services</a>
            <a href="#portfolio" class="hover:text-purple-400 transition">Portfolio</a>
            <a href="#contact" class="hover:text-purple-400 transition">Contact</a>
        </div>
    `;
    
    const existingMenu = nav.querySelector('.md\\:hidden.absolute');
    if (existingMenu) {
        existingMenu.remove();
    } else {
        nav.appendChild(menu);
    }
}

// Smooth Scrolling for Navigation Links
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
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.md\\:hidden.absolute');
        if (mobileMenu) {
            mobileMenu.remove();
        }
    });
});

// Image Modal/Lightbox Functionality
function createImageModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full">
            <img src="${imageSrc}" alt="${imageAlt}" class="max-w-full max-h-full object-contain rounded-lg">
            <button onclick="closeModal(this)" class="absolute -top-10 right-0 text-white text-3xl hover:text-purple-400 transition">
                <i class="fas fa-times"></i>
            </button>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <p class="text-white text-center">${imageAlt}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal.querySelector('button'));
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal.querySelector('button'));
        }
    });
}

function closeModal(button) {
    const modal = button.closest('.fixed');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Add click listeners to portfolio images
document.addEventListener('DOMContentLoaded', function() {
    const portfolioImages = document.querySelectorAll('#portfolio img');
    portfolioImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            createImageModal(this.src, this.alt || 'Portfolio Image');
        });
    });
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
            submitBtn.disabled = true;
            
            // Reset button after 3 seconds (adjust based on your form service)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});

// Scroll-based Navigation Highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-purple-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-purple-400');
        }
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading Animation for Images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
});

// Intersection Observer for Animation Triggers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.hover-scale, .glass');
    animateElements.forEach(el => observer.observe(el));
});

// Contact Form Validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('border-red-500');
            isValid = false;
        } else {
            field.classList.remove('border-red-500');
        }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.classList.add('border-red-500');
            isValid = false;
        }
    }
    
    return isValid;
}

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);