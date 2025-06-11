function changeContent() {
    // Muda a posição do ConteudoConteiner para a esquerda
    document.querySelector('.ConteudoConteiner').style.transform = 'translateX(-150%)';

    // Após a transição, escondemos o ConteudoConteiner
    setTimeout(() => {
        document.querySelector('.ConteudoConteiner').style.display = 'none'; // Esconde a div
    }, 1000); // Tempo correspondente à duração da transição

    // Exibe o novo conteúdo com fade-in
    document.getElementById('novoConteudo').style.display = 'block';
    setTimeout(() => {
        document.getElementById('novoConteudo').style.opacity = '1'; // Fade-in do conteúdo
    }, 100);
}

function backToPrevious() {
    // Move o novo conteúdo para a direita
    document.getElementById('novoConteudo').style.opacity = '0';

    // Após a transição de fade-out, escondemos o novo conteúdo e restauramos o ConteudoConteiner
    setTimeout(() => {
        document.getElementById('novoConteudo').style.display = 'none';
        document.getElementById('novoConteudo').style.transform = 'translateX(0)'; // Reseta a transformação
    }, 1000); // Tempo correspondente à duração da transição

    // Mostra a .ConteudoConteiner com fade-in e reposiciona para a esquerda
    document.querySelector('.ConteudoConteiner').style.display = 'flex';
    setTimeout(() => {
        document.querySelector('.ConteudoConteiner').style.opacity = '1'; // Fade-in suave
        document.querySelector('.ConteudoConteiner').style.transform = 'translateX(0)'; // Volta à posição original
    }, 100);
    
    // Restabelece a opacidade do novo conteúdo
    setTimeout(() => {
        document.getElementById('novoConteudo').style.opacity = '0'; // Fade-out do conteúdo
    }, 100);
}
