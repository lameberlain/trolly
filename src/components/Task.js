import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../constants/ItemTypes.js';

const taskSource = {
	beginDrag() {
		console.log('begin');
		return {};
	},
	endDrag(props, monitor) {
		console.log(props);
		console.log('monitor.getDropResult', monitor.getDropResult);
		props.moveTask({ direction: 'left', index: 1, column: props.column, });
		return {};
	}
};

function collect(connect, monitor) {
	// console.log('monitor.didDrop()', monitor.didDrop());
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	};
}

class Task extends Component {
	render() {
		let index = this.props.index;
		const { isDragging, connectDragSource } = this.props;
		return connectDragSource(
			<div className="task" key={this.props.index} style={{ opacity: isDragging ? 0.5 : 1 }}>
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

	// Actions
	moveTask: PropTypes.func.isRequired,
	renameTask: PropTypes.func.isRequired,
	removeTask: PropTypes.func.isRequired,
};
export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);
