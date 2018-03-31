const errors = require('restify-errors');

module.exports = (server, orm) => {
	server.get('/todo', (req, res, next) => {

		const where = {};

		const today = new Date();
		const tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);

		switch(req.query.filter) {
			case 'dueSoon':
				where.dueDate = {
					$between: [
						today.toISOString().slice(0, 10),
						tomorrow.toISOString().slice(0, 10),
					],
				};
				break;
			case 'pastDue':
				where.dueDate = {
					$lt: today.toISOString().slice(0, 10),
				};
				break;
			case 'completed':
				where.complete = true;
				break;
			default:
		}

		orm.models.todo
			.findAll({
				where: where,
				order: [
					['dueDate', 'DESC'],
				],
			})
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
		}).catch(err => {
			return next(new errors.InvalidContentError(err));
		});
	});

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
				}).catch(err => {
					return next(new errors.InvalidContentError(err));
				});
			}
		});

	});

	server.del('/todo/:id', (req, res, next) => {

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

};