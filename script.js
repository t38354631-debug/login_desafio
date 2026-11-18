
    const botaoEnviar = document.getElementById("e");

    botaoEnviar.addEventListener("click", function(event) {
    event.preventDefault();

//botaoEnviar.addEventListener("click", function() {

     const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

      if( usuario === "HarleyThasys" && senha === "hahdahahdahhh" ) {
        window.location.href = "sucesso.html";
    } else {
        mensagemErro.textContent = "Deu certo não viu?. Tente novamente"
         window.location.href = "regressao.html"

    
    }
})
   