import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateGoal} from "./mainActions";

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
        const id =  goalId.substring(goalId.lastIndexOf('/') + 1);

        const selGl = this.props.goals.find((goal) => {
            return goal.id === parseInt(id, 10);
        });
        return selGl;
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({...this.state, [name]: value});
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
            <div className="GoalEdit">
                <p>Goal Edit Component</p>
                <input onChange={this.onChange}
                       name="name"
                       value={this.state.name}/>
                <button name="save"
                        onClick={() => this.onSave(this.state.name)}>
                    Save Changes
                </button>
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
        updateGoal: (goal) => dispatch(updateGoal(goal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalEdit);