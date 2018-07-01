import React, {Component} from 'react';

import './App.css';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: 'GoalList',
            goals: []
        }
    }

    componentDidMount() {
        this.fetchGoals();
    }

    async fetchGoals() {
        const request = await fetch('/api/goals');
        const goals = await request.json();
        super.setState({goals});
    };

    onAdd = () => {
        super.setState({view: 'GoalAdd'});
    };

    saveNewGoal = (goal) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.view = 'GoalList';
        newState.goals.push({name: goal});
        this.setState(newState);
    };

    get currentView() {
        if (this.state.view === 'GoalAdd') {
            return <GoalAdd onSave={this.saveNewGoal}/>
        } else {
            return <GoalList
                goals={this.state.goals}
                onAdd={this.onAdd}/>
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Rachel's Goal Tracker</h1>
                </header>
                {this.currentView}
            </div>
        );
    }
}

export default App;
