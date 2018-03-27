const Datatypes = require('sequelize').DataTypes;

module.exports = (sequelize) => {
	sequelize.define('todo', {
		id: {
			type: Datatypes.INTEGER,
			primaryKey: true,
		},
		name: {
			type: Datatypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
		dueDate: {
			type: Datatypes.DATE,
			field: 'due_date',
		},
		complete: {
			type: Datatypes.BOOLEAN,
		},
	});
};