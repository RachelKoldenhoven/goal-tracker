import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

const initialState = {
    goals: [],
    view: 'GoalList'
};

const reducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals};
        case 'NAV_ADD_GOAL':
            return {...state, view: 'GoalAdd'};
        default:
            return state;
    }
};

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
