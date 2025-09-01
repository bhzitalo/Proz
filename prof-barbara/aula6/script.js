// Eu guardo a lista de usuários
const usuarios = [
  { login: "bhzitalo", senha: "coxinha123" },
  { login: "italo", senha: "coxinha123" },
  { login: "cintia", senha: "#paçoca" },
  { login: "jotaaraujo", senha: "araujojota" }
];

// Eu criei a função entrar()
function entrar() {
  const msgEl = document.getElementById("mensagem");
  const loginEl = document.getElementById("login");
  const senhaEl = document.getElementById("senha");

  const loginVal = loginEl.value.trim();
  const senhaVal = senhaEl.value;

  // Eu verifico campos vazios
  if (!loginVal || !senhaVal) {
    msgEl.className = "erro";
    msgEl.innerText = "Por favor, preencha usuário e senha.";
    return;
  }

  // Eu procuro um usuário válido
  const encontrado = usuarios.find(u => u.login === loginVal && u.senha === senhaVal);

  if (encontrado) {
    msgEl.className = "sucesso";
    msgEl.innerText = "✔️ Autenticado! Redirecionando...";

    // Eu redireciono para home.html
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);

  } else {
    msgEl.className = "erro";
    msgEl.innerText = "❌ Usuário ou senha incorretos.";

    setTimeout(() => {
      loginEl.value = "";
      senhaEl.value = "";
      loginEl.focus();
    }, 900);
  }
}
