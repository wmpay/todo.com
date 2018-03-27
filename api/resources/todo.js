const errors = require('restify-errors');

module.exports = (server, orm) => {
	server.opts('/todo', (req, res, next) => {

		// to accomodate for JavaScript fetch api preflight checks

		const allowedHeaders = [
			'Access-Control-Allow-Origin',
			'Access-Control-Allow-Headers',
			'Content-Type',
		];

		const allowedMethods = [
			'OPTIONS',
			'GET',
			'POST',
		];

		res.setHeader('Allow', allowedMethods.join(','));
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(','))
		res.send(200);
		return next();
	});

	server.get('/todo', (req, res, next) => {

		res.setHeader('Access-Control-Allow-Origin', '*');

		orm.models.todo
			.findAll()
			.then((data) => {
				res.send(data);
				return next();
			});
	});

	server.post('/todo', (req, res, next) => {
		if (!req.body) {
			return next(new errors.BadRequestError('No data found in body of request'));
		}

		const todo = req.body;

		orm.models.todo.create(todo).then(todo => {
			res.send(200, todo);
			return next();
		})
	});

	server.opts('/todo/:id', (req, res, next) => {

		// to accomodate for JavaScript fetch api preflight checks

		const allowedHeaders = [
			'Access-Control-Allow-Origin',
			'Access-Control-Allow-Headers',
			'Content-Type',
		];

		const allowedMethods = [
			'OPTIONS',
			'PATCH',
			'DELETE',
		];

		res.setHeader('Allow', allowedMethods.join(','));
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', allowedHeaders.join(','));
		res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(','));
		res.send(200);
		return next();
	})

	server.patch('/todo/:id', (req, res, next) => {
		if (!req.body) {
			return next(new errors.BadRequestError('No data found in body of request'));
		}

		const id = req.params.id;
		const payload = req.body;

		orm.models.todo.findById(id).then(todo => {
			if (!todo) {
				return next(new errors.NotFoundError('No todo with that id exists'));
			} else {
				todo.update(payload).then(todo => {
					res.send(200, todo);
					return next();
				})
			}
		})

	});

	server.del('/todo/:id', (req, res, next) => {

		res.setHeader('Access-Control-Allow-Origin', '*');

		const id = req.params.id;
		orm.models.todo.destroy({
			where: {
				id: id,
			},
		}).then(success => {
			if (success) {
				res.send(200);
				return next();
			} else {
				return next(new errors.NotFoundError('No todo with that id exists'));
			}
		});
	});

}