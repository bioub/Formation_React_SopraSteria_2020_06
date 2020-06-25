import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from './store/configureStore';

const store = configureStore();

ReactDOM.render(<App />, document.getElementById('root'));
