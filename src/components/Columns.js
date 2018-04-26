import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Column from './Column.js';

class Columns extends Component {
	render() {
		let columns = this.props.columns;
		let columnsMarkup = [];
		Object.keys(columns).forEach((i) => {
			let column = columns[i];
			columnsMarkup.push(
				<Column
					key={i}
					name={column.name}
					tasks={column.tasks}
					column={column}
					addTask={this.props.addTask}
					moveTask={this.props.moveTask}
					index={i} />
			);
		});
		return (
			<div className="columns">
				{columnsMarkup}
			</div>
		);
	}
}

Columns.propTypes = {
	columns: PropTypes.object.isRequired,

	addTask: PropTypes.func.isRequired,
	moveTask: PropTypes.func.isRequired,
};

export default Columns;
