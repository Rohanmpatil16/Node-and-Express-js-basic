const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    // HOME PAGE
    if (req.url === "/") {
        fs.readFile("Html/index.html", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Error loading page");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }

    // CSS FILE
    else if (req.url === "/style.css") {
        fs.readFile("Html/style.css", "utf-8", (error, data) => {
            if (error) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("CSS not found");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    }

    // 404 PAGE
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }

}).listen(1616, () => {
    console.log("Server running at http://localhost:1616");
});
