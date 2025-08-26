// Abrir modais
function abrirLogin() {
    document.getElementById("modalLogin").style.display = "block";
}

function abrirCadastro() {
    document.getElementById("modalCadastro").style.display = "block";
}

// Fechar modais
function fecharModal(id) {
    document.getElementById(id).style.display = "none";
}

// Função Login (agora validando usuário fixo)
function fazerLogin() {
    const usuario = document.getElementById("loginUsuario").value.trim();
    const senha = document.getElementById("loginSenha").value.trim();

    if (usuario === "bhzitalo" && senha === "coxinha123") {
        alert("Login realizado com sucesso! Bem-vindo, bhzitalo!");
        fecharModal("modalLogin");
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

// Função Cadastro (simples, só exibe alerta)
function fazerCadastro() {
    const email = document.getElementById("cadastroEmail").value.trim();
    const usuario = document.getElementById("cadastroUsuario").value.trim();
    const senha = document.getElementById("cadastroSenha").value.trim();

    if (email && usuario && senha) {
        alert(`Cadastro realizado com sucesso!\nUsuário: ${usuario}`);
        fecharModal("modalCadastro");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Página "Sobre"
function irParaSobre() {
    window.open("https://github.com/bhzitalo/Proz/blob/main/prof-wanderley/Trabalhos/Startup/apresenta%C3%A7%C3%A3o.pdf", "_blank");
}

// Fecha o modal clicando fora dele
window.onclick = function(event) {
    const modalLogin = document.getElementById("modalLogin");
    const modalCadastro = document.getElementById("modalCadastro");
    if (event.target === modalLogin) modalLogin.style.display = "none";
    if (event.target === modalCadastro) modalCadastro.style.display = "none";
};