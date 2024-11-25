function meioNome() {
    let nome = document.getElementById("nome").value.toUpperCase();
    let tamanho = nome.length;
    if (tamanho % 2 == 0) {
        let meio1 = nome.charAt(tamanho / 2 - 1);
        let meio2 = nome.charAt(tamanho / 2);
        alert("Meio: [" + meio1 + meio2 + "]");
    }
    else {
        let meio = nome.charAt(tamanho / 2);
        alert("Meio: [" + meio + "]");
    }
}

let botao = document.querySelector("button");
botao.addEventListener("click", meioNome)