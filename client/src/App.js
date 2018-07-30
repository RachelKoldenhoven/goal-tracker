import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getGoals} from './mainActions';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

export class App extends Component {

    componentDidMount() {
        this.props.getGoals();
    }

    get currentView() {
        if (this.props.url === '/') {
            return <GoalList/>
        } else {
            return <GoalAdd/>
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
        url: state.router.pathname
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGoals: () => dispatch(getGoals())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
