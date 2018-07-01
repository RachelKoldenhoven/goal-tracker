import React, {Component} from 'react';

export default class GoalAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goal: ''
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({...this.state, [name]: value});
    };

    render() {
        return (
            <div>
                <p>Add a goal</p>
                <input onChange={this.onChange}
                       name="goal"
                       value={this.state.goal}/>
                <button name="save"
                        onClick={() => this.props.onSave(this.state.goal)}>
                    Save Goal
                </button>
            </div>
        )
    }
}