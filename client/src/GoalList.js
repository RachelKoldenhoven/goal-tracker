import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push as pushRoute} from 'redux-first-routing';

import {onSelectGoal} from "./mainActions";

export class GoalList extends Component {

    onSelect = (goal) => {
        this.props.selectGoal(goal);
    };

    get goals() {
        return this.props.goals.map(goal => {
            return <div key={goal.id} className="Goal">
                <li>{goal.name}</li>
                <button className="onEdit"
                        onClick={() => this.onSelect(goal)}>
                    Edit
                </button>
            </div>

        });
    }

    render() {
        return (
            <div>
                <p>Goal List</p>
                <div className="GoalList">
                    {this.goals}
                </div>
                <button className="onAdd" onClick={this.props.onAdd}>Add a Goal</button>
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