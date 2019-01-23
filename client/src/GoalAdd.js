import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push as pushRoute} from "redux-first-routing";

import {saveGoal} from './mainActions';
import styles from './GoalAdd.module.css';

export class GoalAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({...this.state, [name]: value});
    };

    onSave = (goalName) => {
        const goal = {
            name: goalName
        };
        this.props.saveGoal(goal);
    };

    render() {
        return (
            <div className={styles["GoalAdd"]}>
                <h3>Add a goal</h3>
                <label>
                    Goal:
                    <input onChange={this.onChange}
                           name="name"
                           value={this.state.name}/>
                </label>
                <button name="save"
                        className={styles["onSave"]}
                        onClick={() => this.onSave(this.state.name)}>
                    Save Goal
                </button>
                <button name="cancel"
                        className={styles["onCancel"]}
                        onClick={() => this.props.onCancel()}>
                    Cancel
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveGoal: (goal) => dispatch(saveGoal(goal)),
        onCancel: () => dispatch(pushRoute('/'))
    }
};

export default connect(undefined, mapDispatchToProps)(GoalAdd);