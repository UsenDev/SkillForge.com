// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Intersection Observer for Counter Animation
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelector('.statistics').querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Testimonial Carousel
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

const showTestimonial = (index) => {
    testimonialCards.forEach((card, i) => {
        card.classList.toggle('active', i === index);
    });
};

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(currentIndex);
});

// Initialize first testimonial
showTestimonial(currentIndex);

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = newsletterForm.querySelector('input[type="email"]');

newsletterForm.addEventListener('submit', (e) => {
    if (!emailInput.value || !emailInput.checkValidity()) {
        e.preventDefault();
        emailInput.classList.add('error');
        setTimeout(() => emailInput.classList.remove('error'), 2000);
    }
});

// Scroll Reveal Animation
const scrollReveal = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

scrollReveal.reveal('.course-card, .instructor-card, .testimonial-card', { 
    interval: 200 
});

// Mobile Menu Toggle (if needed)
const mobileMenuToggle = () => {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
};

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});
