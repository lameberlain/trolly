import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ColumnsContainer from '../containers/ColumnsContainer.js';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<span className="header__title"><i className="fa fa-train"></i> Lameberlain.com</span>
				</header>
				<ColumnsContainer />
				<span className="footer">eventually, this site is going to have something of value on it. for now, enjoy dragging and dropping stuff. :) </span>
			</div>
		);
	}
}

export default DragDropContext(HTML5Backend)(App);
