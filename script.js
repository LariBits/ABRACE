document.addEventListener('DOMContentLoaded', function() {
    // Código antigo do accordion (já existente)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                    otherHeader.nextElementSibling.style.padding = '0 20px';
                }
            });

            if (isActive) {
                this.classList.remove('active');
                currentContent.style.maxHeight = '0';
                currentContent.style.padding = '0 20px';
            } else {
                this.classList.add('active');
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                currentContent.style.padding = '15px 20px 20px 20px';
            }
        });
    });

    // Novo: Menu hamburguer
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
