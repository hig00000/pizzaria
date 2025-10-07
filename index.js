document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' da lista de links
        navLinks.classList.toggle('active');
    });
});