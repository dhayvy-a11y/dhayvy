function mudarAba(event, idAba) {
    // Pega todos os conteúdos de abas e esconde
    const conteudos = document.querySelectorAll('.tab-content');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });

    // Pega todos os botões do menu e remove a classe active
    const botoes = document.querySelectorAll('.tab-btn');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Mostra a aba clicada e ativa o botão correspondente
    document.getElementById(idAba).classList.add('active');
    event.currentTarget.classList.add('active');
}