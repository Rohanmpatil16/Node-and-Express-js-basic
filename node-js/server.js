const http = require('http');

// Server on port 1616
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello from port 1616");
}).listen(1616, () => {
    console.log("Server running on port 1616");
});

// Server on port 1600
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello 1600");
}).listen(1600, () => {
    console.log("Server running on  1600");
});
