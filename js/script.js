document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });

        // Optional: Close nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', false);
                }
            });
        });
    }

    // Add 'active' class to current page link in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const itemHref = item.getAttribute('href').split('/').pop();
        if (currentPage === itemHref || (currentPage === '' && itemHref === 'index.html')) {
            item.classList.add('active');
        }
    });
});
