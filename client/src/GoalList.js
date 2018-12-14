import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push as pushRoute} from 'redux-first-routing';

import {onSelectGoal} from "./mainActions";
import styles from './GoalList.module.css';

export class GoalList extends Component {

    onSelect = (goal) => {
        this.props.selectGoal(goal);
    };

    get goals() {
        return this.props.goals.map(goal => {
            return <ul key={goal.id}
                       className={styles["Goal"]}>
                <li><h4>{goal.name}</h4></li>
                <button className="onEdit"
                        onClick={() => this.onSelect(goal)}>
                    Select
                </button>
            </ul>

        });
    }

    render() {
        return (
            <div className={styles['GoalList']}>
                <h3>My Goals</h3>
                <div className={styles['Goals']}>
                    {this.goals}
                </div>
                <button className={styles['onAdd']}
                        onClick={this.props.onAdd}>
                    Add a Goal
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        'goals': state.goal.goals
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch(pushRoute('GoalAdd')),
        selectGoal: (goal) => dispatch(onSelectGoal(goal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalList);