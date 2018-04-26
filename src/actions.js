const actions = {
	moveTask: (data) => {
		return {
			type: 'MOVE_TASK',
			data,
		};
	},
	renameTask: (data) => {
		return {
			type: 'RENAME_TASK',
			data,
		};
	},
	removeTask: (data) => {
		return {
			type: 'REMOVE_TASK',
			data,
		};
	},
	addTask: (data) => {
		return {
			type: 'ADD_TASK',
			data,
		};
	},
};

export default actions;
