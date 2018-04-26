import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from './Task.js';

class Tasks extends Component {
	render() {
		let tasks = this.props.tasks;
		let tasksMarkup = [];
		console.log('tasks', tasks);
		console.log('this.props.column', this.props.column);
		tasks.forEach((task, index) => {
			console.log('i', index);
			tasksMarkup.push(
				<Task
					index={index}
					key={index}
					name={task}
					column={this.props.column}
					moveTask={this.props.moveTask}
					removeTask={this.props.removeTask}
					renameTask={this.props.renameTask}
				/>
			);
		});
		console.log('tasksMarkup', tasksMarkup);
		return (
			<div className="tasks">
				{tasksMarkup}
			</div>
		);
	}
}

Tasks.propTypes = {
	tasks: PropTypes.object.isRequired,
	column: PropTypes.number.isRequired,

	moveTask: PropTypes.func.isRequired,
	renameTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
};


export default Tasks;
