const http = require("http");

let server = http.createServer((req, resp) => {
    resp.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8"
        }
    );

    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let hor = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let dataHora = dia + "/" + mes + "/" +
                   ano + ", " + hor + ":" +
                   min + ":" + seg;

    resp.write("<h1>Hello World!, now is " +
        dataHora + "</h1>");
    resp.end();
});

server.listen(3000);