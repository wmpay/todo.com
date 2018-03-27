const restify = require('restify');
const orm = require('./orm');

const options = {
	name: 'api',
};

const server = restify.createServer(options);

function respond(req, res, next) {
	res.send('hello world');
	next();
}

server.get('/hello', respond)

server.listen(9000, () => {
	console.log('%s listening at %s', server.name, server.url)
})