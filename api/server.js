const restify = require('restify');
const orm = require('./orm');
const todoResource = require('./resources/todo');

const options = {
	name: 'api',
};

const server = restify.createServer(options);

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

todoResource(server, orm);

server.listen(9000, () => {
	// eslint-disable-next-line no-console
	console.log('%s listening at %s', server.name, server.url);
});