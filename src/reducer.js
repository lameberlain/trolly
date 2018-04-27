function reducer(state = {}, action) {
	let newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case 'MOVE_TASK': {
			let col;
			console.log('action.data', action.data);
			console.log('newState', newState);
			if (typeof action.data.toColumn !== 'undefined') {
				col = action.data.toColumn;
			} else {
				col = (action.data.direction === 'left') ? action.data.column - 1 : action.data.column + 1;
			}
			console.log('col', col);
			console.log('newState.columns[col]', newState.columns[col]);
			if (col !== action.data.column) {
				newState.columns[col].tasks.push(state.columns[action.data.column].tasks[action.data.index]);
				newState.columns[action.data.column].tasks.splice(action.data.index, 1);
			}
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
