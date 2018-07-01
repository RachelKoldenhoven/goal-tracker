import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import GoalAdd from './GoalAdd';

describe('GoalAdd', () => {
    it('should render inputs for new goal', () => {
        // Setup
        const goalAddWrapper = shallow(<GoalAdd/>);

        // Assert
        expect(goalAddWrapper.find({name: 'goal'})).toHaveLength(1);
        expect(goalAddWrapper.find('button').text()).toEqual('Save Goal');
    });

    it('should edit the new goal', () => {
        // Setup
        const goalAddWrapper = shallow(<GoalAdd/>);
        const event = {target: {name: 'goal', value: 'I weigh 58 kilos'}};

        // Exercise
        goalAddWrapper.find({name: 'goal'}).simulate('change', event);

        // Assert
        expect(goalAddWrapper.find({value: 'I weigh 58 kilos'})).toHaveLength(1);
    });

    it('should save the new goal', () => {
        // Setup
        const onSave = sinon.spy();
        const goalAddWrapper = shallow(<GoalAdd onSave={onSave}/>);
        const expected = 'I weigh 58 kilos';
        goalAddWrapper.setState({goal: 'I weigh 58 kilos'});

        // Exercise
        goalAddWrapper.find({name: 'save'}).simulate('click');

        // Assert
        expect(onSave.calledOnce).toBe(true);
        expect(onSave.calledWith(expected)).toBe(true);
    });

});