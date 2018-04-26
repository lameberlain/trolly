import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App.js';
import reducer from './reducer.js';
import init_store from './init_store.js';

const store = createStore(reducer, init_store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
