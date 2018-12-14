import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import './skeleton.css';
import './normalize.css';
import styles from './App.module.css';
import {getGoals} from './mainActions';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';
import GoalEdit from './GoalEdit';

export class App extends Component {

    componentDidMount() {
        this.props.getGoals();
    }

    get currentView() {
        if (this.props.loading) return <div>Loading</div>;
        if (this.props.url === '/GoalAdd') {
            return <GoalAdd/>
        } else if (this.props.url.startsWith('/goals/')) {
            return <GoalEdit/>
        } else return <GoalList/>
    }

    render() {
        return (
            <div className={styles['App']}>
                <header className={styles['header']}>
                    <h1 className={styles['title']}>
                        Welcome to Rachel's Goal Tracker
                    </h1>
                </header>
                {this.currentView}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        url: state.router.pathname,
        loading: state.goal.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGoals: () => dispatch(getGoals())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
