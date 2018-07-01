import React, {Component} from 'react';

import './App.css';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'GoalAdd',
            goals: []
        }
    }

    saveNewGoal = (goal) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.view = 'GoalList';
        newState.goals.push(goal);
        this.setState(newState);    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Rachel's Goal Tracker</h1>
                </header>
                <GoalAdd onSave={this.saveNewGoal}></GoalAdd>
                <GoalList goals={this.state.goals}/>
            </div>
        );
    }
}

export default App;
