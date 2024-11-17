document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event) {
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if (event.key === 'Enter') {
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0);
                    // Se o valor digitado for 'MARIO', move para o primeiro slide (índice 0).
                    break;
                case 'POKEMON':
                    swiper.slideTo(1);
                    // Se o valor digitado for 'POKEMON', move para o segundo slide (índice 1).
                    break;
                case 'ZELDA' || 'LEGEND OF ZELDA':
                    swiper.slideTo(2);
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    // Se o valor não corresponder a nenhum dos casos, exibe um alerta informando que o jogo não foi encontrado.
                    break;
            }
        }
    });

    const openModal = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const purchaseForm = document.getElementById("purchaseForm");
    const messageElement = document.getElementById('message');

    // Abre a modal ao clicar no ícone SVG
    openModal.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fecha a modal ao clicar no botão de fechar
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        clearForm(); // Limpa os campos ao fechar a modal
        hideMessage(); // Oculta mensagens ao fechar
    });

    // Processa o formulário
    purchaseForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o reload da página
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Limpa mensagens anteriores
        hideMessage();

        // Valida se todos os campos foram preenchidos
        if (!name || !email || !password) {
            showMessage('Por favor, preencha todos os campos!', 'error');
            return;
        }

        // Se todos os campos estiverem preenchidos, exibe a mensagem de sucesso
        showMessage('Compra realizada com sucesso!', 'success');

        // Limpa os campos do formulário
        clearForm();
    });

    // Função para limpar o formulário
    function clearForm() {
        purchaseForm.reset(); // Método prático para limpar o formulário
    }

    // Função para exibir mensagens
    function showMessage(msg, type) {
        messageElement.textContent = msg;
        messageElement.className = type; // Define a classe como 'error' ou 'success'
        messageElement.style.display = 'block';
    }

    // Função para ocultar mensagens
    function hideMessage() {
        messageElement.textContent = '';
        messageElement.style.display = 'none';
    }
});