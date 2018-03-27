const restify = require('restify');
const orm = require('./orm');
const todoResource = require('./resources/todo');

const options = {
	name: 'api',
};

const server = restify.createServer(options);

todoResource(server, orm);

server.listen(9000, () => {
	console.log('%s listening at %s', server.name, server.url)
})