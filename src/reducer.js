function reducer(state = {}, action) {
	let newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'MOVE_TASK': {
			let col;
			if (action.data.direction === 'left') {
				col = action.data.column - 1;
			} else {
				col = action.data.column + 1;
			}
			newState.columns[col].tasks.push(state.columns[action.data.column].tasks[action.data.index]);
			newState.columns[action.data.column].tasks.splice(action.data.index, 1);
			return newState;
		}
		case 'RENAME_TASK': {
			let newName = prompt('Rename', state.columns[action.data.column].tasks[action.data.index]);
			if (newName) {
				newState.columns[action.data.column].tasks[action.data.index] = newName;
			}
			return newState;
		}
		case 'REMOVE_TASK': {
			newState.columns[action.data.column].tasks.splice(action.data.index, 1);
			return newState;
		}
		case 'ADD_TASK': {
			let placeholders = ['order pizza', 'sweep floor', 'make a Trello clone!', 'beer run', 'fix your broken code', 'walk to Starbucks'];
			let placeholder = placeholders[(Math.floor(Math.random() * Math.floor(5)))];
			let newTask = prompt('New task', placeholder);
			if (newTask) {
				newState.columns[action.data.column].tasks.push(newTask);
			}
			return newState;
		}
		default: {
			return state;
		}
	}
}

export default reducer;
