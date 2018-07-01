import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

describe('App', () => {
    it('renders without crashing', () => {
        const appWrapper = shallow(<App/>);
        const goalAdd = appWrapper.find(GoalAdd);
        expect(goalAdd).toHaveLength(1);
    });

    it('has expected initial state', () => {
        const appWrapper = shallow(<App/>);

    });

    it('passes props to GoalAdd', () => {
        const appWrapper = shallow(<App/>);
        const goalAdd = appWrapper.find(GoalAdd);

        expect(typeof goalAdd.props().onSave).toEqual('function');
    });

    it('saves a new goal and change view to GoalAdd', () => {
        const appWrapper = shallow(<App/>);
        const expected = {goal: 'I weigh 58 kilos'};
        appWrapper.setState({view: 'GoalAdd'});

        appWrapper.instance().saveNewGoal(expected);
        appWrapper.update();
        const goalList = appWrapper.find(GoalList);

        expect(appWrapper.state().view).toEqual('GoalList');
        expect(goalList.props().goals).toContainEqual(expected);


    });

});
