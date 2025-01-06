// Mobile menu toggle with accessibility improvements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navToggleButton = document.querySelector('.hamburger span');

// Toggle menu functionality
hamburger.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    navToggleButton.setAttribute('aria-expanded', isActive);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggleButton.setAttribute('aria-expanded', 'false');
        }
    });
});

// Form submission handling with validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        // Form validation
        if (!name.value || !email.value || !message.value) {
            alert("Please fill in all fields.");
            return;
        }
        
        // Success message
        const button = this.querySelector('button');
        button.textContent = 'Sent!';
        button.style.backgroundColor = '#4CAF50';
        
        // Reset form after delay
        setTimeout(() => {
            this.reset();
            button.textContent = 'Send Message';
            button.style.backgroundColor = '';
        }, 3000);
    });
}

// Intersection Observer setup for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

// Create observer for animations
const createObserver = (elements, callback) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
};

// Project cards animation
const projects = document.querySelectorAll('.project-card');
if (projects.length > 0) {
    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    createObserver(projects, (target) => {
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
    });
}

// Contact section animation
const contactSection = document.querySelector('#contact .social-container');
if (contactSection) {
    contactSection.style.opacity = '0';
    contactSection.style.transform = 'translateY(20px)';
    contactSection.style.transition = 'all 0.5s ease';

    createObserver([contactSection], (target) => {
        target.style.opacity = '1';
        target.style.transform = 'translateY(0)';
    });
}

// Social icons hover animation
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-2px)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0)';
    });
});