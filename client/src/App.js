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

    viewList = () => {
        super.setState({view: 'GoalList'});
    };

    async saveNewGoal(goal) {
        const newGoal = {name: goal};
        await fetch('api/goals', {
            method: 'POST',
            body: JSON.stringify(newGoal),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        this.fetchGoals();
        this.viewList();
    };

    get currentView() {
        if (this.state.view === 'GoalAdd') {
            return <GoalAdd onSave={(goal) => this.saveNewGoal(goal)}/>
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
