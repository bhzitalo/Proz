// Lista de usuários e senhas cadastrados diretamente no código
const usuarios = [
    { login: "italo", senha: "coxinha123" },
    { login: "cintia", senha: "coxinha123" },
    { login: "mateus", senha: "coxinha123" }
];

// Função chamada quando o botão "Entrar" é clicado
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
      break;              // Sai do loop (não precisa continuar)
    }
  }

  // Se encontrou login válido
  if (autenticado) {
    msg.innerText = "✅ Login realizado com sucesso!";
  } 
  // Se não encontrou
  else {
    msg.innerText = "❌ Usuário ou senha inválidos!";
  }

  // Limpa os campos de login e senha após clicar
  login.value = "";
  senha.value = "";

  // Depois de 3 segundos, restaura a mensagem original
  setTimeout(() => {
    msg.innerText = "Será que você está cadastrado?";
  }, 3000);
}
