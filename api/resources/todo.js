module.exports = (server, orm) => {
	server.get('/todo', (req, res, next) => {
		orm.models.todo
			.findAll()
			.then((data) => {
				res.send(data);
				next();
			});
	});

	server.post('/todo', (req, res, next) => {

	});

	server.patch('/todo/:id', (req, res, next) => {

	})

	server.delete('/todo/:id', (req, res, next) => {

	})

}