function adicionarSol() {
    let p = document.querySelector("p");

    let img = document.createElement("img");
    img.setAttribute("src", "imagens/sol.png");

    p.appendChild(img);
}

function adicionarLua() {
    let p = document.querySelector("p");

    let img = document.createElement("img");
    img.setAttribute("src", "imagens/lua.png");

    p.appendChild(img);
}

let btnSol = document.getElementById("add-sol");
let btnLua = document.getElementById("add-lua"); 

btnSol.addEventListener("click", adicionarSol);
btnLua.addEventListener("click", adicionarLua);