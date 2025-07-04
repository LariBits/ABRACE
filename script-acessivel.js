document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
    
        if (!header.hasAttribute('aria-expanded')) {
            header.setAttribute('aria-expanded', 'false');
        }
        if (!header.id) {
            header.id = 'accordion-' + Math.random().toString(36).substr(2, 9); 
        }
        const content = header.nextElementSibling;
        if (content && !content.hasAttribute('aria-labelledby')) {
            content.setAttribute('role', 'region'); 
            content.setAttribute('aria-labelledby', header.id); 
            content.setAttribute('tabindex', '-1'); 
        }

        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Fecha outros acordeões abertos
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                    otherHeader.nextElementSibling.style.padding = '0 20px';
                }
            });

            // Alterna o estado do acordeão atual
            if (isActive) {
                this.classList.remove('active');
                this.setAttribute('aria-expanded', 'false'); 
                currentContent.style.maxHeight = '0';
                currentContent.style.padding = '0 20px';
            } else {
                this.classList.add('active');
                this.setAttribute('aria-expanded', 'true'); 
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                currentContent.style.padding = '15px 20px 20px 20px';
                currentContent.focus(); 
            }
        });
    });


    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const isExpanded = navLinks.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
            hamburger.setAttribute('aria-label', isExpanded ? 'Fechar menu' : 'Abrir menu');
        });
    }
});


function toggleAccessibilityMenu() {
    const menu = document.getElementById("opcoesAcessibilidade");
    menu.hidden = !menu.hidden;
    
    const button = document.querySelector('.acessibilidade-menu > button');
    if (button) {
        button.setAttribute('aria-expanded', !menu.hidden);
        button.setAttribute('aria-label', menu.hidden ? 'Abrir menu de acessibilidade' : 'Fechar menu de acessibilidade');
    }
}

function increaseText() {
    document.body.classList.toggle("acessibilidade-grande");
}

function toggleHighContrast() {
    document.body.classList.toggle("acessibilidade-contraste");
}

function highlightLinks() {
    document.body.classList.toggle("acessibilidade-links");
}

function resetStyles() {
    document.body.classList.remove("acessibilidade-grande", "acessibilidade-contraste", "acessibilidade-links");
}