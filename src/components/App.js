import React, { Component } from 'react';
import ColumnsContainer from '../containers/ColumnsContainer.js';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="header">
					<span className="header__title"><i className="fa fa-train"></i> Trolly</span>
				</header>
				<ColumnsContainer />
			</div>
		);
	}
}

export default App;
