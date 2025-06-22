document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling; // O conteúdo que segue o cabeçalho
            const isActive = this.classList.contains('active');

            // Fecha todos os outros itens do acordeão, se houver
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                    otherHeader.nextElementSibling.style.padding = '0 20px'; // Reseta o padding
                }
            });

            // Abre ou fecha o item clicado
            if (isActive) {
                this.classList.remove('active');
                currentContent.style.maxHeight = '0';
                currentContent.style.padding = '0 20px'; // Reseta o padding
            } else {
                this.classList.add('active');
                // Define a altura máxima para o conteúdo. Use scrollHeight para que a altura se ajuste ao conteúdo.
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
                currentContent.style.padding = '15px 20px 20px 20px'; // Define o padding quando aberto
            }
        });
    });
});