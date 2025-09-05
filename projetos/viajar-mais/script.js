// Aqui eu guardo os destinos com suas descrições e imagens
const destinos = {
  salvador: {
    descricao: "Salvador é conhecida como a capital da alegria, com carnaval vibrante, praias incríveis e o famoso Pelourinho.",
    imagem: "img/salvador.jpg"
  },
  natal: {
    descricao: "Natal é famosa pelas dunas de Genipabu, praias paradisíacas e o Forte dos Reis Magos.",
    imagem: "img/natal.jpg"
  },
  santiago: {
    descricao: "Santiago é a capital do Chile, cercada pela Cordilheira dos Andes, com vinícolas renomadas e cultura rica.",
    imagem: "img/santiago.jpg"
  },
  buenosaires: {
    descricao: "Buenos Aires é a capital da Argentina, famosa pelo tango, arquitetura europeia e a Casa Rosada.",
    imagem: "img/buenos-aires.jpg"
  },
  amsterdam: {
    descricao: "Amsterdam é conhecida por seus canais pitorescos, bicicletas, arquitetura histórica e os famosos moinhos.",
    imagem: "img/amsterdam.jpg"
  },
  capadocia: {
    descricao: "A Capadócia, na Turquia, é famosa por suas paisagens únicas, balões coloridos, cidades subterrâneas e história milenar.",
    imagem: "img/turquia.jpg"
  }
};

// Função que eu uso para exibir descrição e imagem do destino clicado
async function carregarDestino(destino) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "<p>Carregando informações...</p>";
  await new Promise(resolve => setTimeout(resolve, 1500));
  resultado.innerHTML = `
    <h2>${destino.charAt(0).toUpperCase() + destino.slice(1)}</h2>
    <p>${destinos[destino].descricao}</p>
    <img src="${destinos[destino].imagem}" alt="${destino}">
  `;
}

// Slideshow do background usando pseudo-elemento com fade
const imagensFundo = [
  "img/salvador.jpg",
  "img/natal.jpg",
  "img/santiago.jpg",
  "img/buenos-aires.jpg",
  "img/amsterdam.jpg",
  "img/turquia.jpg"
];

let indice = 0;
const body = document.body;

// Função para trocar o background com efeito de fade
function trocarBackground() {
  // Crio um elemento temporário para fazer o fade
  const tmp = document.createElement("div");
  tmp.style.position = "fixed";
  tmp.style.top = "0";
  tmp.style.left = "0";
  tmp.style.width = "100%";
  tmp.style.height = "100%";
  tmp.style.backgroundImage = `url(${imagensFundo[indice]})`;
  tmp.style.backgroundSize = "cover";
  tmp.style.backgroundPosition = "center";
  tmp.style.filter = "blur(6px) brightness(0.7)";
  tmp.style.opacity = 0;
  tmp.style.transition = "opacity 1.5s ease-in-out";
  tmp.style.zIndex = "-1";

  body.appendChild(tmp);

  // Disparo o fade
  requestAnimationFrame(() => {
    tmp.style.opacity = 1;
  });

  // Removo a imagem antiga depois do fade
  setTimeout(() => {
    const old = body.querySelectorAll("div[data-bg='true']");
    old.forEach(el => body.removeChild(el));
    tmp.setAttribute("data-bg", "true");
  }, 1500);

  indice = (indice + 1) % imagensFundo.length;
}

// Inicializo a primeira imagem
trocarBackground();

// Troco a imagem a cada 5 segundos
setInterval(trocarBackground, 5000);
