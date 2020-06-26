import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from './store/reducers';

// Active les outils de dev en development uniquement
const devTools = process.env.NODE_ENV === 'development';

ReactDOM.render(
  <Provider store={configureStore({reducer: rootReducer, devTools})}>
<App />
</Provider>
, document.getElementById('root'));
