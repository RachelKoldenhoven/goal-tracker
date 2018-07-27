import React, {Component} from 'react';
import {connect} from 'react-redux';

class GoalList extends Component {

    get goals() {
        return this.props.goals.map(goal => {
            return <li key={goal.name}>{goal.name}</li>
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

const mapStateToProps = (state) => {
    return {
        'goals': state.goals
    }
};

export default connect(mapStateToProps)(GoalList);