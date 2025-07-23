// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
});

// Close menu when clicking on nav links
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    });
});

// Sticky Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ScrollReveal Animations
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 1000,
    delay: 200
});

// Home Content
ScrollReveal().reveal('.home-content h3', { origin: 'top' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .social-media, .btn', { origin: 'right' });

// About Section
ScrollReveal().reveal('.about-content h2', { origin: 'left' });
ScrollReveal().reveal('.about-content h3', { origin: 'right' });
ScrollReveal().reveal('.about-content p, .btn', { origin: 'bottom' });

// Skills Section
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.skill-card', { interval: 200 });

// Projects Section
ScrollReveal().reveal('.projects .heading', { origin: 'top' });
ScrollReveal().reveal('.project-card', { interval: 200 });

// Contact Section
ScrollReveal().reveal('.contact .heading', { origin: 'top' });
ScrollReveal().reveal('.contact-form', { origin: 'left' });
ScrollReveal().reveal('.contact-info', { origin: 'right' });

// Active Section Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`.navbar a[href*=${id}]`).classList.add('active');
            });
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    console.log({ name, email, subject, message });
    
    // Show success message
    alert('Message sent successfully!');
    contactForm.reset();
});

// Back to Top Button
const backToTopBtn = document.querySelector('.footer-iconTop');

window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.scrollY > 500);
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});