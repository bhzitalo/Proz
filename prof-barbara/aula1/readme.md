# 📚 Aula 1 – Introdução ao HTML, CSS e JavaScript  
📅 **Data:** Sexta-feira, 08/08/2025  
👩‍🏫 **Professora:** [Bárbara de Almeida](https://github.com/ProfBabi)  


## 1. HTML (Estrutura)  
- HTML (HyperText Markup Language) é a **linguagem de marcação** usada para criar a estrutura das páginas web.  
- Define os **elementos** básicos da página, como títulos, parágrafos, imagens, links, etc.  
- Utiliza **tags** para estruturar o conteúdo:  
  - `<html>` → Início de um documento HTML.  
  - `<head>` → Contém informações sobre o documento (metadados, título, etc.).  
  - `<body>` → Contém o conteúdo visível da página.  

### Exemplo de Estrutura HTML:  
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Minha Página</title>
</head>
<body>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Este é um parágrafo.</p>
</body>
</html>
``` 
## 2. CSS (Aparência)

CSS (Cascading Style Sheets) é utilizado para estilizar os elementos HTML, controlando a aparência da página (cores, fontes, margens, etc.).

A separação entre HTML (estrutura) e CSS (estilo) torna o código mais organizado.

### Exemplo de Estilo CSS:
```css
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}

p {
    font-size: 16px;
    line-height: 1.5;
}
```
## 3. JavaScript (Dinamismo e Ação)

JavaScript é uma linguagem de programação que adiciona dinamismo e interatividade às páginas web. Permite que a página reaja a ações do usuário, como cliques, teclas pressionadas e movimentos do mouse. Ela Pode modificar a estrutura HTML ou alterar o estilo CSS dinamicamente.

### Exemplo de JavaScript:
```js
function mudarMensagem() {
    document.getElementById("mensagem").innerHTML = "Olá, JavaScript!";
}
``` 

## 📝 Atividade – Primeiros Passos com HTML

```txt
- Crie um arquivo chamado html.
- No corpo da página, dentro de uma <div></div>, insira as informações:
a) Um título para um site fictício (usando <h1></h1>)
b) Seu nome completo (usando <h2></h2>)
c) O nome de uma cidade (usando <p></p>)

📌 Observações:

- Coloque cada uma das informações uma abaixo da outra.
- Crie um botão que, quando clicado, retorna uma mensagem de boas-vindas.
- Insira uma estilização básica para a página.
- Salve o arquivo e abra no navegador para verificar o resultado.