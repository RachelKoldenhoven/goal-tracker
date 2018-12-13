import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {GoalEdit} from './GoalEdit';

describe('GoalEdit', () => {
    it('should render a goal to edit', () => {
        // Setup
        const goals = [{id: 1, name: 'read books'}];
        const url = 'localhost:3000/goals/1';
        const goalEditWrapper = shallow(<GoalEdit url={url} goals={goals}/>);

        // Assert
        expect(goalEditWrapper.find('input')).toHaveLength(1);
        expect(goalEditWrapper.find('input').props().value).toEqual('read books');
    });

    it('should allow you to edit the text', () => {
        // Setup
        const goals = [{id: 1, name: 'read books'}];
        const url = 'localhost:3000/goals/1';
        const goalEditWrapper = shallow(<GoalEdit url={url} goals={goals}/>);

        // Exercise
        const event = {target: {name: 'name', value: 'read more books'}};
        goalEditWrapper.find({name: 'name'}).simulate('change', event);

        // Assert
        expect(goalEditWrapper.find({value: 'read more books'})).toHaveLength(1);
    });

    it('should save your changes', () => {
        // Setup
        const updateGoal = sinon.spy();
        const expected = {name: 'read more books', id: 1};
        const goals = [{id: 1, name: 'read books'}];
        const url = 'localhost:3000/goals/1';
        const goalEditWrapper = shallow(<GoalEdit
            url={url}
            goals={goals}
            updateGoal={updateGoal}/>);

        // Exercise
        goalEditWrapper.instance().onSave('read more books');

        // Assert
        expect(updateGoal.calledWith(expected)).toBe(true);
        expect(updateGoal.calledOnce).toBe(true);
    });

    it('should call onCancel when Cancel btn is clicked', () => {
        // Setup
        const goals = [{id: 1, name: 'read books'}];
        const url = 'localhost:3000/goals/1';
        const onCancel = sinon.spy();
        const goalEditWrapper = shallow(<GoalEdit
            url={url}
            goals={goals}
            onCancel={onCancel}/>);

        // Exercise
        goalEditWrapper.find('.onCancel').simulate('click');

        // Assert
        expect(onCancel.calledOnce).toBe(true);
    });

    it('should call onDelete when Delete btn is clicked', () => {
        // Setup
        const goals = [{id: 1, name: 'read books'}];
        const url = 'localhost:3000/goals/1';
        const deleteGoal = sinon.spy();
        const expected = {id: 1, name: 'read books'};
        const goalEditWrapper = shallow(<GoalEdit
            url={url}
            goals={goals}
            deleteGoal={deleteGoal}/>);

        // Exercise
        goalEditWrapper.find('.onDelete').simulate('click');

        // Assert
        expect(deleteGoal.calledOnce).toBe(true);
        expect(deleteGoal.calledWith(expected)).toBe(true)
    });
});