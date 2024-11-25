function atualizarDataHora() {
    let d = new Date();

    let msgElemento = document.getElementById("mensagem");
    let horElemento = document.getElementById("horario");

    let hor = d.getHours();
    let min = d.getMinutes();

    let msg = "";

    if (hor >= 0 && hor < 12)       { msg = "Bom dia"; }
    else if (hor >= 12 && hor < 18) { msg = "Boa tarde"; }
    else                            { msg = "Boa noite"; }    

    if (hor < 10) { hor = "0" + hor; }
    if (min < 10) { min = "0" + min; }

    msgElemento.innerHTML = msg;
    horElemento.innerHTML = hor + ":" + min;
}

window.addEventListener("load", atualizarDataHora);