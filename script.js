
    const botaoEnviar = document.getElementById("e");

botaoEnviar.addEventListener("click", async function() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (!usuario || !senha) {
        alert("Preencha todos os campos.");
        return;
    }