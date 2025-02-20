// Additional JavaScript functionality can be added here
// This file serves as a secondary JavaScript file for the project

// Example: Add event listeners for course card hover effects
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 12px 20px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// Example: Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Add form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Form submitted successfully!');
    });
});

// Initialize any additional functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add initialization code here
});
