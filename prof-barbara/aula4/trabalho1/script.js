// Usuários pré-definidos
const usuarios = [
    { login: "italo", senha: "coxinha123" },
    { login: "cintia", senha: "coxinha123" },
    { login: "mateus", senha: "coxinha123" }
];

function fazerLogin() {
    const usuarioInput = document.getElementById("usuario").value;
    const senhaInput = document.getElementById("senha").value;
    let autenticado = false;

    // Laço de repetição para verificar
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarioInput === usuarios[i].login && senhaInput === usuarios[i].senha) {
            autenticado = true;
            break;
        }
    }

    const mensagem = document.getElementById("mensagem");
    if (autenticado) {
        mensagem.style.color = "green";
        mensagem.textContent = "Login realizado com sucesso!";
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = "Usuário ou senha incorretos!";
    }
}