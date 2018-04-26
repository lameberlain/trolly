import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tasks extends Component {
	render() {
		let tasks = this.props.tasks;
		let tasksMarkup = [];
		console.log('tasks', tasks);
		console.log('this.props.column', this.props.column);
		tasks.forEach((task, index) => {
			console.log('i', index);
			tasksMarkup.push(
				<div className="task" key={index}>
					<div className="task__name" >
						<span>{task}</span>
					</div>
					<div className="task__edit"
						onClick={() => {this.props.renameTask({ index, column: this.props.column, });}}>
						<i className="fa fa-edit"></i>
					</div>
					<div className="task__remove"
						onClick={(e) => {
							this.props.removeTask({ index, column: this.props.column, });
						}}>
						<i className="fa fa-times-circle"></i>
					</div>
					<div className="task__arrows">
						{(this.props.column !== 0)
							? <div className="arrow-left" onClick={() => {this.props.moveTask({ direction: 'left', index, column: this.props.column, });}}>
								<i className="fa fa-chevron-left"></i>
							</div>
							: '' }
						{(this.props.column !== 3)
							? <div className="arrow-right" onClick={() => {this.props.moveTask({ direction: 'right', index, column: this.props.column, });}}>
								<i className="fa fa-chevron-right"></i>
							</div>
							: '' }
					</div>
				</div>
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

	// Actions
	moveTask: PropTypes.func.isRequired,
	renameTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
};


export default Tasks;
