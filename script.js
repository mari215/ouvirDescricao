function lerDescricao(botao) {
    window.speechSynthesis.cancel();
    const descricaoImagem = botao.closest('.card').querySelector('img').alt;
    lerTexto(descricaoImagem);
}

function lerTexto(texto) {
    const mensagem = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(mensagem);
}