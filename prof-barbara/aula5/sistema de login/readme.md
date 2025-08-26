## 🔹 Proposta

- Implementar login e senha para 3 usuários já definidos no código.

- Como não há banco de dados, os logins e senhas foram inseridos diretamente no JavaScript.

- O sistema deveria usar um laço de repetição para verificar se as credenciais digitadas estavam corretas.

- Exibir mensagens de sucesso ou erro.

- Adicionar funcionalidades extras:
- Restaurar a mensagem original do HTML após alguns segundos.

- Limpar automaticamente os campos de login e senha após o clique no botão.

## 🔹 Como foi feito

- Criamos três arquivos separados:

    - ```index.html``` → estrutura da página.
    - ```style.css``` → estilos visuais.
    - ```script.js``` → lógica do sistema de login.

- No JavaScript:

    - Definimos os ```usuários``` e ```senhas``` em um array de objetos.

    - Utilizamos um loop ```for``` para percorrer os usuários e verificar o login/senha.

    - Se as credenciais estivessem corretas → exibir mensagem de sucesso.

    -  Caso contrário → exibir mensagem de erro.

    - Após o clique:

        - Os campos de entrada foram limpos automaticamente.

        - A mensagem original "Será que você está cadastrado?" foi restaurada após 3 segundos usando setTimeout().

## ✅ Conclusão

A atividade foi cumprida com sucesso, utilizando HTML, CSS e JavaScript. O sistema funciona de forma simples e cumpre todos os requisitos propostos. 