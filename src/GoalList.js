import React, {Component} from 'react';

export default class GoalList extends Component {

    get goals() {
        return this.props.goals.map(goal => {
            return <li key={goal}>{goal}</li>
        });
    }

    render() {
        return (
            <div>
                <p>Goal List</p>
                {this.goals}
                <button onClick={this.props.onAdd}>Add a Goal</button>
            </div>
        )
    }

}