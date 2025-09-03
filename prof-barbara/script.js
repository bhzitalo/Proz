const destinos = {
  'Salvador - BA': {
    descricao: 'Salvador é famosa pelo seu centro histórico, praias tropicais e cultura afro-brasileira vibrante.',
    curiosidade: 'Foi a primeira capital do Brasil e é conhecida pelo carnaval animado.'
  },
  'Natal - RN': {
    descricao: 'Natal é conhecida por suas dunas, praias paradisíacas e o Forte dos Reis Magos.',
    curiosidade: 'É chamada de "Cidade do Sol" por seu clima quente e ensolarado quase o ano todo.'
  },
  'Santiago - Chile': {
    descricao: 'Santiago é a capital do Chile, cercada pela Cordilheira dos Andes.',
    curiosidade: 'Você pode esquiar nos Andes e beber vinhos chilenos na mesma viagem.'
  },
  'Buenos Aires - Argentina': {
    descricao: 'Buenos Aires é conhecida por sua arquitetura europeia e o tango.',
    curiosidade: 'É chamada de "Paris da América do Sul".'
  }
};

async function buscarInfo(destino) {
  const infoDiv = document.getElementById('info');
  infoDiv.textContent = 'Carregando informações de ' + destino + '...';

  await new Promise(resolve => setTimeout(resolve, 1000));

  const dados = destinos[destino];

  if (dados) {
    infoDiv.innerHTML = `
      <strong>Destino selecionado:</strong> ${destino}<br>
      <strong>Descrição:</strong> ${dados.descricao}<br>
      <strong>Curiosidade:</strong> ${dados.curiosidade}
    `;
  } else {
    infoDiv.textContent = 'Informações não disponíveis para este destino.';
  }
}
