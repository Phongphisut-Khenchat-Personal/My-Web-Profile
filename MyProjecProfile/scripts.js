// Mobile menu toggle with accessibility improvements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navToggleButton = document.querySelector('.hamburger span');

// เพิ่ม event listener ให้ hamburger เพื่อแสดง/ซ่อนเมนู
hamburger.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    // ปรับค่า aria-expanded สำหรับ accessibility
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
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    const message = this.querySelector('textarea');
    
    // Form validation: check if any field is empty
    if (!name.value || !email.value || !message.value) {
        alert("Please fill in all fields.");
        return;
    }
    
    // If all fields are filled, show the success message
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

// Add scroll animation for projects
const projects = document.querySelectorAll('.project-card');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

projects.forEach(project => {
    project.style.opacity = '0';
    project.style.transform = 'translateY(20px)';
    project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(project);
});
