function soma() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if (isNaN(n1) || isNaN(n2) || n1 == "" || n2 == "") {
        alert("Um ou mais números inválidos!");
    }
    else {
        let maior;

        n1 = parseFloat(n1);        
        n2 = parseFloat(n2);

        if (n1 > n2) { maior = n1; }
        else         { maior = n2; }

        alert("Maior: " + maior);    
    }
}

let botoes = document.querySelectorAll("button");

for (let i = 0; i < botoes.length; i++)
    botoes[i].addEventListener("click", soma);