import React, {Component} from 'react';

import './App.css';
import GoalAdd from './GoalAdd';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Rachel's Goal Tracker</h1>
                </header>
                <GoalAdd></GoalAdd>
            </div>
        );
    }
}

export default App;
