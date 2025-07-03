document.addEventListener('DOMContentLoaded', () => {
    const diasEl = document.getElementById('dias');
    const horasEl = document.getElementById('horas');
    const minutosEl = document.getElementById('minutos');
    const segundosEl = document.getElementById('segundos');
    const diasRestantesEl = document.getElementById('dias-restantes');

    const aniversarioUmAno = new Date('December 31, 2025 00:00:00').getTime();

    function atualizarContador() {
        const agora = new Date().getTime();
        const diferenca = aniversarioUmAno - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        diasEl.innerHTML = String(dias).padStart(2, '0');
        horasEl.innerHTML = String(horas).padStart(2, '0');
        minutosEl.innerHTML = String(minutos).padStart(2, '0');
        segundosEl.innerHTML = String(segundos).padStart(2, '0');
        diasRestantesEl.innerHTML = dias;

        if (diferenca < 0) {
            clearInterval(intervaloContador);
            document.querySelector('.contador').innerHTML = '<span class="feliz-aniversario">Feliz 1 Ano de Amor!</span>';
            document.querySelector('.frase-contagem').style.display = 'none';
            diasRestantesEl.innerHTML = "0";
        }
    }

    const intervaloContador = setInterval(atualizarContador, 1000);
    atualizarContador();

    // Criar estrelas de fundo
    function criarEstrelas() {
        const totalEstrelas = 50;
        const body = document.body;

        for (let i = 0; i < totalEstrelas; i++) {
            const estrela = document.createElement('div');
            estrela.classList.add('estrela');
            estrela.style.width = `${Math.random() * 4 + 4}px`;
            estrela.style.height = estrela.style.width;
            estrela.style.top = `${Math.random() * 100}%`;
            estrela.style.left = `${Math.random() * 100}%`;
            estrela.style.animationDelay = `${Math.random() * 5}s`;
            estrela.style.animationDuration = `${Math.random() * 3 + 3}s`;
            body.appendChild(estrela);
        }
    }

    criarEstrelas();
});
