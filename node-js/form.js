const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url === '/submit') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Form Submitted Successfully</h1>");
        res.end();
    }
    else {
        fs.readFile('Html/form.html', (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });

            if (err) {
                res.write("<h1>Error loading file</h1>");
            } else {
                res.write(data);
            }

            res.end();
        });
    }

}).listen(1234);

console.log("Server running on port 1234");