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


// Música romântica com botão
const musica = document.getElementById('musica');
const botaoMusica = document.getElementById('botao-musica');
let tocando = false;

botaoMusica.addEventListener('click', () => {
  if (!tocando) {
    musica.play();
    botaoMusica.textContent = 'Pausar Música 💔';
    tocando = true;
  } else {
    musica.pause();
    botaoMusica.textContent = 'Tocar Música 💖';
    tocando = false;
  }
});


// Criar modal no body via JS
const modalFundo = document.createElement('div');
modalFundo.classList.add('modal-fundo');

const modalConteudo = document.createElement('div');
modalConteudo.classList.add('modal-conteudo');

const modalFechar = document.createElement('div');
modalFechar.classList.add('modal-fechar');
modalFechar.textContent = '×';

// Montar modal
modalFundo.appendChild(modalConteudo);
modalFundo.appendChild(modalFechar);
document.body.appendChild(modalFundo);

// Função para abrir modal com a imagem clicada
function abrirModalImagem(imagemUrl) {
  modalConteudo.style.backgroundImage = `url('${imagemUrl}')`;
  modalFundo.classList.add('ativo');
}

// Fechar modal ao clicar no fundo ou no botão fechar
modalFundo.addEventListener('click', (e) => {
  if (e.target === modalFundo || e.target === modalFechar) {
    modalFundo.classList.remove('ativo');
  }
});

// Seleciona todas as molduras coração
const molduras = document.querySelectorAll('.moldura-coracao');

molduras.forEach(moldura => {
  moldura.style.cursor = 'pointer'; // indica que é clicável
  moldura.addEventListener('click', () => {
    // Pega a imagem de background da moldura clicada
    const bg = getComputedStyle(moldura).backgroundImage;
    // extrai a URL da imagem, removendo url("...") e aspas
    const url = bg.slice(5, -2);
    abrirModalImagem(url);
  });
});
