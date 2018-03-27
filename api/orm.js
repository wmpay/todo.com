const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://todo:password@localhost:5432/todo');

const models = require('./models/index').forEach((model) => {
	model(sequelize);
});

module.exports = sequelize;