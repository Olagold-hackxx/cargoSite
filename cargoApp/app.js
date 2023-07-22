const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end('Welcome to homepage');
	}
	if (req.url === "/signup") {
		res.end('Welcome to signup page');
	}
});

server.listen(5000);
