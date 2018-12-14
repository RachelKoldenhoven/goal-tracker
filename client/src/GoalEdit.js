import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateGoal} from "./mainActions";
import {deleteGoal} from "./mainActions";
import {push as pushRoute} from "redux-first-routing";
import styles from './GoalEdit.module.css';

export class GoalEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.selectedGoal.name,
            id: this.selectedGoal.id
        }
    }

    get selectedGoal() {
        const goalId = this.props.url;
        const id = goalId.substring(goalId.lastIndexOf('/') + 1);

        return this.props.goals.find((goal) => {
            return goal.id === parseInt(id, 10);
        });
    }

    get view() {
        if (!this.selectedGoal) return <p>Oops, goal not found!</p>;
        else return <div className={styles['Main']}>
            <div className={styles['Goal']}>
                <label>
                    Goal:
                    <input onChange={this.onChange}
                           type="text"
                           name="name"
                           value={this.state.name}/>
                </label>
                <div className={styles['Buttons']}>
                    <button name="cancel"
                            className={styles["onCancel"]}
                            onClick={() => this.props.onCancel()}>
                        Cancel
                    </button>
                    <button name="save"
                            className={styles["onSave"]}
                            onClick={() => this.onSave(this.state.name)}>
                        Save Changes
                    </button>
                </div>
            </div>
            <div className={styles['Delete']}>
                <button name="delete"
                        className={styles["onDelete"]}
                        onClick={() => this.props.deleteGoal(this.state)}>
                    Delete Goal
                </button>
            </div>
        </div>
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        this.setState({...this.state, name: value});
    };

    onSave = (goalName) => {
        const goal = {
            name: goalName,
            id: this.state.id
        };
        this.props.updateGoal(goal);
    };

    render() {
        return (
            <div className={styles['GoalEdit']}>
                {this.view}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        url: state.router.pathname,
        goals: state.goal.goals
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateGoal: (goal) => dispatch(updateGoal(goal)),
        onCancel: () => dispatch(pushRoute('/')),
        deleteGoal: (goal) => dispatch(deleteGoal(goal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalEdit);