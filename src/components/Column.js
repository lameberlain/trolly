import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksContainer from '../containers/TasksContainer.js';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/ItemTypes.js';

const columnTarget = {
	drop(props, monitor, component) {
		console.log('props', props);
		this.props.moveTask({ direction: 'left', column: this.props.index });
	},
};

function collect(connect, monitor) {
	return {};
}

class Column extends Component {
	render() {
		return (
			<div className="column" key={this.props.name}>
				<div className="column__name">
					<span>{this.props.name}</span>
				</div>
				<div className="column__body">
					<TasksContainer tasks={this.props.tasks} column={parseInt(this.props.index)}/>
					<div className="add-task" onClick={() => {this.props.addTask({ column: this.props.index });}}>
						<i className="fa fa-plus"></i>
					</div>
				</div>
			</div>
		);
	}
}

Column.propTypes = {
	tasks: PropTypes.object.isRequired,
	index: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,

	addTask: PropTypes.func.isRequired,
	moveTask: PropTypes.func.isRequired,
};

export default DropTarget(ItemTypes.TASK, columnTarget, collect)(Column);
