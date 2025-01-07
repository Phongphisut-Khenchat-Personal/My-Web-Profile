// Mobile menu toggle with accessibility improvements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navToggleButton = document.querySelector('.hamburger span');
const body = document.body;


// ปรับปรุง Mobile menu toggle


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// ปิด menu เมื่อคลิก link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
    });
});

// ปิด menu เมื่อคลิกนอก menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
    }
});

//Download
async function downloadFile(fileName) {
    try {
        const fullUrl = `${window.location.origin}/file/Download/${fileName}`;
        console.log('Attempting to download from:', fullUrl);

        // ลองใช้ fetch ก่อน
        try {
            const response = await fetch(fullUrl);
            console.log('Response status:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            
            document.body.appendChild(link);
            link.click();
            
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            
        } catch (fetchError) {
            console.error('Fetch failed:', fetchError);
            
            // ถ้า fetch ไม่สำเร็จ ลองใช้ direct URL
            console.log('Trying direct URL download...');
            const link = document.createElement('a');
            link.href = fullUrl;
            link.download = fileName;
            link.target = '_blank';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    } catch (error) {
        console.error('Download failed:', error);
        alert(`ไม่สามารถดาวน์โหลดไฟล์ ${fileName} ได้\nError: ${error.message}\nURL: ${fullUrl}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.dropdown-item');
    downloadButtons.forEach(button => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            const fileName = button.textContent.trim() + '.pdf';
            console.log('Attempting to download:', fileName);
            await downloadFile(fileName);
        });
    });
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