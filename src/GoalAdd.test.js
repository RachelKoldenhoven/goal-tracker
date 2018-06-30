import React from 'react';
import { shallow } from 'enzyme';

import GoalAdd from './GoalAdd';

describe('GoalAdd', () => {
    it('should render inputs for new goal', () => {
        // Setup
        const personAddWrapper = shallow(<GoalAdd/>);

        // Assert
        expect(personAddWrapper.find({name: 'goal'})).toHaveLength(1);
    });
});