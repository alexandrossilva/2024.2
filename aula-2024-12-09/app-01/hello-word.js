const http = require("http");

function helloWorld(req, resp) {
    resp.writeHead(200, {
            "Content-Type": "text/html"
        }
    );
    resp.write("<h1>Hello World!</h1>");
    resp.end();
}

let server = http.createServer(helloWorld);

server.listen(3000);