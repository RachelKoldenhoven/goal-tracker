import React from 'react';
import {shallow} from 'enzyme';

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
});