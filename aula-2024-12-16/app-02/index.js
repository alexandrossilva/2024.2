const express = require("express")

let app = express();

app.get("/", (req, resp) => {
    resp.send("Hello Word, BSI!");
});

app.get("/portugues", (req, resp) => {
    resp.send("Alo Mundo, BSI!");
});

app.listen(3000);