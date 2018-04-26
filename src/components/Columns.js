import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksContainer from '../containers/TasksContainer.js';

class Columns extends Component {
	render() {
		let columns = this.props.columns;
		console.log('columns', columns);
		let columnsMarkup = [];
		Object.keys(columns).forEach((i) => {
			let column = columns[i];
			let name = column.name;
			let tasks = column.tasks;
			columnsMarkup.push(
				<div className="column" key={name}>
					<div className="column__name">
						<span>{name}</span>
					</div>
					<div className="column__body">
						<TasksContainer tasks={tasks} column={parseInt(i)}/>
						<div className="add-task" onClick={() => {this.props.addTask({ column: i });}}>
							<i className="fa fa-plus"></i>
						</div>
					</div>
				</div>
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
};


export default Columns;
