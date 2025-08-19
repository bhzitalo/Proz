function verificaCupom(){
    const cab = document.getElementById("cabecalho")
    const men = document.getElementById("mensagem");
    const name = document.getElementById("cupom").value;
    const cupomCadastrado = "GANHA10";
    
    if(name == cupomCadastrado){
        men.innerHTML = "Você acaba de ganhar <strong>10%</strong> de desconto nos cursos oferecidos!"
        cab.innerHTML = "Parabéns!"
        cab.style.color = "green"
    }

    else{
        men.innerHTML = "Cupom não encontrado ou expirado. Favor verificar digitação."
        cab.innerHTML = "ERRO!"
        cab.style.color = "red"
    }
}
