import React, {Component} from 'react';

export default class GoalAdd extends Component {
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

    render() {
        return (
            <div>
                <p>Add a goal</p>
                <input onChange={this.onChange}
                       name="name"
                       value={this.state.name}/>
                <button name="save"
                        onClick={() => this.props.onSave(this.state.name)}>
                    Save Goal
                </button>
            </div>
        )
    }
}