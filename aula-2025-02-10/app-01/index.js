const express = require("express");

let app = express();

app.use(express.static("public"));

app.get("/soma", (req, resp) => {
    let n1 = req.query["n1"];
    let n2 = req.query["n2"];

    let soma = parseInt(n1) + parseInt(n2);

    resp.end("Soma: " + soma);
});

app.get("/operacao", (req, resp) => {
    let n1 = req.query["n1"];
    let n2 = req.query["n2"];
    let op = req.query["op"];

    let res;

    switch(op) {
        case "som": res = parseInt(n1) + parseInt(n2); break;
        case "subt": res = parseInt(n1) - parseInt(n2); break;
        case "mult": res = parseInt(n1) * parseInt(n2); break;
        case "div": res = parseInt(n1) / parseInt(n2); break;
    }

    resp.end("Resultado: " + res);
});

app.listen(3000);