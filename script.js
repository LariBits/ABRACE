document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Fecha todos os outros itens do acordeão, se houver
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    // Não precisamos mais manipular max-height e padding diretamente aqui,
                    // o CSS cuidará disso quando a classe 'active' for removida.
                }
            });

            // Abre ou fecha o item clicado
            if (isActive) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });
    });
});