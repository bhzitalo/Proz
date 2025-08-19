function mudarMensagem() {
    const men = document.getElementById("mensagem");
    men.innerHTML = "Você acabou de GANHAR 10% de descontos em todos os produtos da loja! <br> Aproveite!"

    const tit = document.getElementById("titulo");
    tit.innerHTML = "Parabéns!"

    const bot = document.getElementById("botao");
    bot.innerHTML = "Obrigado por Clicar!"
}