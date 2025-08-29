// Lista de usuários e senhas cadastrados diretamente no código
const usuarios = [
    { login: "italo", senha: "coxinha123" },
    { login: "cintia", senha: "#paçoca" },
    { login: "jotaaraujo", senha: "araujojota" }
];

// Chama a função quando clica no botão "Entrar"
function entrar() {
  // Pega os elementos da página (mensagem, login e senha)
  const msg = document.getElementById("mensagem");
  const login = document.getElementById("login");
  const senha = document.getElementById("senha");

  let autenticado = false; // Variável para saber se encontrou usuário válido

  // Percorre todos os usuários cadastrados
  for (let i = 0; i < usuarios.length; i++) {
    // Verifica se o login e a senha digitados batem com algum cadastrado
    if (login.value === usuarios[i].login && senha.value === usuarios[i].senha) {
      autenticado = true; // Marca como válido
      break;              // Finaliza o loop
    }
  }

  // Se encontrou login válido
  if (autenticado) {
    msg.innerText = "🔄 Redirecionando...";

    // Aguarda 4 segundos e redireciona para outra página
    setTimeout(() => {
      window.location.href = "home.html"; // Direciona para home.html
    }, 4000);

  } else {
    // Se não
    // Aguarda 4 segundos e exibe mensagem de erro 
    setTimeout(() => {
      msg.innerText = "❌ Login ou senha incorretos, tente novamente.";

      // Limpa os campos 
      login.value = "";
      senha.value = "";
    }, 2000);
  }
}
