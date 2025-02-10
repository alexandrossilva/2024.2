const express = require("express");

let app = express();

app.get("/soma", (req, resp) => {
    let n1 = req.query["n1"];
    let n2 = req.query["n2"];

    let soma = parseInt(n1) + parseInt(n2);

    resp.end("Soma: " + soma);
});

app.listen(3000);