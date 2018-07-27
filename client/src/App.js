import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getGoals} from './mainActions';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

class App extends Component {

    componentDidMount() {
        this.props.getGoals();
    }

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
        this.props.getGoals();
        this.viewList();
    };

    get currentView() {
        if (this.props.view === 'GoalAdd') {
            return <GoalAdd onSave={(goal) => this.saveNewGoal(goal)}/>
        } else {
            return <GoalList/>
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

const mapStateToProps = (state) => {
    return {
        'view': state.view
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGoals: () => dispatch(getGoals())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
