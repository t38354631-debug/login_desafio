
const continuar = document.getElementById("continuar");

continuar.addEventListener("click", function () {

    window.location.href = "login.html";

});
setTimeout(() => {
    window.location.href = "sucesso.html";
}, 1000);