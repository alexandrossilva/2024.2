function atualizarDataHora() {
    let d = new Date();

    let spanElemento = document.getElementById("data-hora");

    let dia = d.getDate();
    let mes = d.getMonth() + 1;
    let ano = d.getFullYear();

    let hor = d.getHours();
    let min = d.getMinutes();
    let seg = d.getSeconds();

    if (dia < 10) { dia = "0" + dia; }
    if (mes < 10) { mes = "0" + mes; }
    if (hor < 10) { hor = "0" + hor; }
    if (min < 10) { min = "0" + min; }
    if (seg < 10) { seg = "0" + seg; }

    spanElemento.innerHTML = dia + "/" + mes + "/" + ano + " " + hor + ":" + min + ":" + seg;
}

window.addEventListener("load", atualizarDataHora);

let botao = document.querySelector("button");
botao.addEventListener("click", atualizarDataHora)