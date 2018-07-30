import React, {Component} from 'react';
import {connect} from 'react-redux';

import {saveGoal} from './mainActions';

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
            <div>
                <p>Add a goal</p>
                <input onChange={this.onChange}
                       name="name"
                       value={this.state.name}/>
                <button name="save"
                        onClick={() => this.onSave(this.state.name)}>
                    Save Goal
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {
        saveGoal: (goal) => dispatch(saveGoal(goal))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalAdd);