module.exports = (sequelize, DataTypes) => {
	sequelize.define('todo', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		description: {
			type: DataTypes.TEXT,
		},
		dueDate: {
			type: DataTypes.DATE,
			field: 'due_date',
		},
		complete: {
			type: DataTypes.BOOLEAN,
		},
	}, {
		// sequelize adds updatedAt and createdAt to queries
		timestamps: false,
	});
};
