import { connect } from 'react-redux';
import actions     from '../actions';
import Columns     from '../components/Columns.js';

const ColumnsContainer = connect(
	function mapStateToProps(state, ownProps) {
		return {
			columns : state.columns,
		};
	},
	function mapDispatchToProps(dispatch, ownProps) {
		return {
			addTask: (data) => {
				dispatch(actions.addTask(data));
			},
			moveTask: (data) => {
				dispatch(actions.moveTask(data));
			},
		};
	}
)(Columns);

export default ColumnsContainer;
