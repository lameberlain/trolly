// All columns are viewable by default

const init_store = {
	// When expand all is false, cherry pick expanded entities
	columns: {
		0: {name: 'To do', tasks: ['coffee', 'shower']},
		1: {name: 'Working', tasks: ['wake up']},
		2: {name: 'Review', tasks: []},
		3: {name: 'Completed', tasks: []},
	}
};

export default init_store;
