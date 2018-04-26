import { connect } from 'react-redux';
import actions     from '../actions';
import Tasks     from '../components/Tasks.js';

const TasksContainner = connect(
	function mapStateToProps(state, ownProps) {
		return {
			columns : state.columns,
		};
	},
	function mapDispatchToProps(dispatch, ownProps) {
		return {
			moveTask: (data) => {
				dispatch(actions.moveTask(data));
			},
			renameTask: (data) => {
				dispatch(actions.renameTask(data));
			},
			removeTask: (data) => {
				dispatch(actions.removeTask(data));
			},
		};
	}
)(Tasks);

export default TasksContainner;
