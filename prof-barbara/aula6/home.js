// Eu criei a função carregarTitulo() para mostrar detalhes do CBLOL
async function carregarTitulo(titulo) {
    try {
        const detalhesEl = document.getElementById("detalhes");

        // Eu mostro mensagem de carregamento
        detalhesEl.innerHTML = "Carregando informações do título...";

        // Eu simulo um carregamento de API com 2 segundos
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Eu criei um objeto com resumo + lineup de cada título do CBLOL
        const infoTitulos = {
            "CBLOL 2013": `
                <strong>Resumo:</strong> Em 2013, a paiN Gaming conquistou seu <strong>primeiro título do CBLOL</strong>, marcando o início de sua trajetória de sucesso no cenário competitivo brasileiro. A equipe se destacou pelo <strong>entrosamento e estratégia sólida</strong>, mostrando que vinha para ser referência no país.<br><br>
                <strong>Lineup:</strong><br>
                Venon – TOP<br>
                SirT – Jungle<br>
                Kami – MID<br>
                brTT – ADC<br>
                Espeon – SUP
            `,
            "CBLOL 2015 II": `
                <strong>Resumo:</strong> Em 2015 II, a paiN Gaming venceu o CBLOL novamente, consolidando sua posição como uma das equipes mais respeitadas do Brasil. O time demonstrou <strong>excelência tática e domínio nas partidas decisivas</strong>.<br><br>
                <strong>Lineup:</strong><br>
                Mylon – TOP<br>
                SirT – Jungle<br>
                Kami – MID<br>
                brTT – ADC<br>
                Dioud – SUP
            `,
            "CBLOL 2021 I": `
                <strong>Resumo:</strong> Em 2021 I, a paiN Gaming voltou ao topo do CBLOL, mostrando sua <strong>resiliência e capacidade de renovação</strong>. A equipe impressionou pela <strong>coordenação e habilidades individuais</strong>, garantindo mais um título histórico.<br><br>
                <strong>Lineup:</strong><br>
                Robo – TOP<br>
                CarioK – Jungle<br>
                Tinowns – MID<br>
                brTT – ADC<br>
                Luci – SUP
            `,
            "CBLOL 2024 II": `
                <strong>Resumo:</strong> Em 2024 II, a paiN Gaming conquistou mais um CBLOL, reafirmando sua <strong>hegemonia e tradição</strong> no cenário brasileiro. O time se destacou pelo <strong>trabalho em equipe, estratégia sólida e execução impecável</strong>.<br><br>
                <strong>Lineup:</strong><br>
                Wizer – TOP<br>
                CarioK – Jungle<br>
                dyNquedo – MID<br>
                TitaN – ADC<br>
                Kuri – SUP
            `
        };

        // Eu exibo a informação correta ou uma mensagem padrão
        detalhesEl.innerHTML = infoTitulos[titulo] || "Título não encontrado.";

    } catch (erro) {
        // Eu trato possíveis erros
        detalhesEl.innerHTML = "Erro: " + erro.message;
    }
}
