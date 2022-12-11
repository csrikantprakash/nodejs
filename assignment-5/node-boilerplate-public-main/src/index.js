var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    switch (req.url) {
        case "/welcome":
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("Welcome to Dominos!");
            res.end();
            break;
        case "/contact":
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({
                phone: '18602100000',
                email: 'guestcaredominos@jublfood.com'
            }));
            res.end();
            break;
        default :
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write("Error");
            res.end();
            break;

    }
}
httpServer.listen(8081, () => console.log("server at 8081"));
module.exports = httpServer;