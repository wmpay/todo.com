const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://todo:todo@db:5432/todo');
const DataTypes = require('sequelize').DataTypes;

const models = require('./models/index').forEach((model) => {
	model(sequelize, DataTypes);
});

module.exports = sequelize;