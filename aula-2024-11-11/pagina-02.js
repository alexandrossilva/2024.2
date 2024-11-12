function soma() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let soma = n1 + n2;

    alert("Soma: " + soma);
}

let botoes = document.querySelectorAll("button");

for (let i = 0; i < botoes.length; i++)
    botoes[i].addEventListener("click", soma);