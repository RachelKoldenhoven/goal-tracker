import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import GoalAdd from './GoalAdd';

describe('App', () => {
    it('renders without crashing', () => {
        const appWrapper = shallow(<App/>);
        const goalAdd = appWrapper.find(GoalAdd);
        expect(goalAdd).toHaveLength(1);
    });

    it('has expected initial state', () => {
        const appWrapper = shallow(<App/>);

    });
});
