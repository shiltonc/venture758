const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu-overlay');
const closeMenuButton = document.getElementById('close-mobile-menu');

// Toggle mobile menu on button click
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
});

// Close mobile menu
closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
});

// Close menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
    });
});
