const http = require("http");

let server = http.createServer((req, resp) => {
    resp.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
        }
    );

    if (req.url == "/portugues") {
        resp.write("<h1>Alô Mundo!</h1>");
    }
    else {
        resp.write("<h1>Hello World!</h1>");
    }
    
    resp.end();
});

server.listen(3000);