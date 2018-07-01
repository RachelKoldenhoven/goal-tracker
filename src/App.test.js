import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

describe('App', () => {
    it('renders without crashing', () => {
        const appWrapper = shallow(<App/>);
        const goalList = appWrapper.find(GoalList);
        expect(goalList).toHaveLength(1);
    });

    it('has expected initial state', () => {
        const appWrapper = shallow(<App/>);

        expect(appWrapper.state().goals).toHaveLength(0);
        expect(appWrapper.state().view).toEqual('GoalList');
    });

    it('passes props to GoalAdd', () => {
        const appWrapper = shallow(<App/>);
        appWrapper.setState({view: 'GoalAdd'});
        const goalAdd = appWrapper.find(GoalAdd);

        expect(typeof goalAdd.props().onSave).toEqual('function');
    });

    it('passes props to GoalList', () => {
        const appWrapper = shallow(<App/>);
        const goalList = appWrapper.find(GoalList);

        expect(goalList.props().goals).toHaveLength(0);
        expect(typeof goalList.props().onAdd).toEqual('function');
    });

    it('changes state when onAdd is invoked', () => {
        // Setup
        const appWrapper = shallow(<App/>);

        // Exercise
        appWrapper.instance().onAdd();

        // Assert
        expect(appWrapper.state().view).toEqual('GoalAdd');
    });

    it('saves a new goal and change view to GoalList', () => {
        const appWrapper = shallow(<App/>);
        const expected = ['I weigh 58 kilos'];

        appWrapper.instance().saveNewGoal(expected);
        appWrapper.update();

        expect(appWrapper.state().view).toEqual('GoalList');
        expect(appWrapper.state().goals).toContainEqual(expected);
    });

});
