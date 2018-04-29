import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from '../constants/ItemTypes.js';

const taskSource = {
	beginDrag(props) {
		return { index: props.index, column: props.column, };
	},
	endDrag(props, monitor) {
		return {};
	}
};

const taskTarget = {
	drop(props, monitor) {
		let item = monitor.getItem();
		props.moveTask({ toColumn: parseInt(props.column), index: item.index, column: item.column, toIndex: parseInt(props.index) });
		return { props };
	},
}

function collectSource(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	};
}

function collectTarget(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
	};
}

class Task extends Component {
	render() {
		let index = this.props.index;
		const { isDragging, connectDragSource, connectDropTarget, isOver } = this.props;
			return connectDropTarget(
				connectDragSource(
				<div className="task" key={this.props.index} style={{ opacity: isDragging ? 0.5 : 1, borderTopColor: isOver ? 'red' : 'white' }}>
					<div className="task__name" >
						<span>{this.props.name}</span>
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
			)
		);
	}
}

Task.propTypes = {
	name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	column: PropTypes.number.isRequired,

	// Injected by React DnD:
	isDragging: PropTypes.bool.isRequired,
	connectDragSource: PropTypes.func.isRequired,
	connectDropTarget: PropTypes.func.isRequired,

	// Actions
	moveTask: PropTypes.func.isRequired,
	renameTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
};

Task = DragSource(ItemTypes.TASK, taskSource, collectSource)(Task);
Task = DropTarget(ItemTypes.TASK, taskTarget, collectTarget)(Task);

export default Task;
