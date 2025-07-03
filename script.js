// script.js
document.addEventListener('DOMContentLoaded', () => {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const daysRemainingElement = document.getElementById('days-remaining');

    // Define a data do aniversário de 1 ano (31 de dezembro de 2025)
    
    const oneYearAnniversary = new Date('December 31, 2025 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = oneYearAnniversary - now;

        // Cálculos para dias, horas, minutos e segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Atualiza os elementos HTML
        daysElement.innerHTML = String(days).padStart(2, '0');
        hoursElement.innerHTML = String(hours).padStart(2, '0');
        minutesElement.innerHTML = String(minutes).padStart(2, '0');
        secondsElement.innerHTML = String(seconds).padStart(2, '0');
        daysRemainingElement.innerHTML = days; // Para a frase "Faltam X dias"

        // Se a contagem regressiva terminou
        if (distance < 0) {
            clearInterval(countdownInterval);
            // Exemplo de como mudar o texto quando termina
            document.querySelector('.countdown-timer').innerHTML = '<span class="feliz-aniversario">Feliz 1 Ano de Amor!</span>';
            document.querySelector('.countdown-phrase').style.display = 'none'; // Esconde a frase
            daysRemainingElement.innerHTML = "0"; // Reinicia a contagem para 0 dias
        }
    }

    // Atualiza a contagem regressiva a cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Chama a função uma vez imediatamente para evitar delay inicial
    updateCountdown();

    // --- Efeitos Mágicos (Adicionaremos aqui mais tarde) ---
    // Função para criar estrelas cintilantes no fundo
    function createStars() {
        const numStars = 50; // Quantidade de estrelas
        const body = document.body;

        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = `${Math.random() * 3 + 1}px`; // 1 a 4px
            star.style.height = star.style.width;
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`; // Atraso para cintilar em momentos diferentes
            star.style.animationDuration = `${Math.random() * 3 + 3}s`; // Duração da animação
            body.appendChild(star);
        }
    }

    createStars(); // Chama a função para criar as estrelas ao carregar
});