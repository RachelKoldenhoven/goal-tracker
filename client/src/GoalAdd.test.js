import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import GoalAdd from './GoalAdd';

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
        const event = {target: {name: 'name', value: 'I weigh 58 kilos'}};

        // Exercise
        goalAddWrapper.find({name: 'name'}).simulate('change', event);

        // Assert
        expect(goalAddWrapper.find({value: 'I weigh 58 kilos'})).toHaveLength(1);
    });

    it('should save the new goal', () => {
        // Setup
        const onSave = sinon.spy();
        const goalAddWrapper = shallow(<GoalAdd onSave={onSave}/>);
        const expected = 'I weigh 58 kilos';
        goalAddWrapper.setState({name: 'I weigh 58 kilos'});

        // Exercise
        goalAddWrapper.find({name: 'save'}).simulate('click');

        // Assert
        expect(onSave.calledOnce).toBe(true);
        expect(onSave.calledWith(expected)).toBe(true);
    });

});