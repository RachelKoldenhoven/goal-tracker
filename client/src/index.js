import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
    createBrowserHistory,
    routerReducer,
    routerMiddleware as createRouterMiddleware,
    startListener,
    push
} from 'redux-first-routing'

import './index.css';
import App from './App';
import goalReducer from './reducers/goalReducer';


const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: routerReducer,
    goal: goalReducer
});

const routerMiddleware = createRouterMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware));
startListener(history, store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
