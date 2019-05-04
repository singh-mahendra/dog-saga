import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from './reducers';
import {watcherSaga, watchSelectBreed} from './sagas';

const sagas = createSagaMiddleware();
const store = createStore(combineReducers, compose(applyMiddleware(sagas),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const appJsx = (<Provider store={store}><App/></Provider>);

sagas.run(watcherSaga);
sagas.run(watchSelectBreed);

ReactDOM.render(appJsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
