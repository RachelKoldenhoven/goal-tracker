import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {GoalAdd} from './GoalAdd';

describe('GoalAdd', () => {
    it('should render inputs for new goal', () => {
        // Setup
        const goalAddWrapper = shallow(<GoalAdd/>);

        // Assert
        expect(goalAddWrapper.find({name: 'name'})).toHaveLength(1);
        expect(goalAddWrapper.find('button').text()).toEqual('Save Goal');
    });

    it('should edit the new goal', () => {
        // Setup
        const goalAddWrapper = shallow(<GoalAdd/>);
        const event = {target: {name: 'name', value: 'Read one million books'}};

        // Exercise
        goalAddWrapper.find({name: 'name'}).simulate('change', event);

        // Assert
        expect(goalAddWrapper.find({value: 'Read one million books'})).toHaveLength(1);
    });

    it('should save the new goal', () => {
        // Setup
        const saveGoal = sinon.spy();
        const goalAddWrapper = shallow(<GoalAdd saveGoal={saveGoal}/>);
        const expected = {name: 'Read one million books'};

        // Exercise
        goalAddWrapper.instance().onSave('Read one million books');

        // Assert
        expect(saveGoal.calledWith(expected)).toBe(true);
        expect(saveGoal.calledOnce).toBe(true);
    });

});