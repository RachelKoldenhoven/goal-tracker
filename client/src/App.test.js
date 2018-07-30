import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {App} from './App';
import GoalAdd from './GoalAdd';
import GoalList from './GoalList';

describe('App', () => {
    it('renders GoalList by default', () => {
        const getGoals = sinon.spy();
        const appWrapper = shallow(<App getGoals={getGoals}/>);
        appWrapper.setProps({url: '/'});
        const goalList = appWrapper.find(GoalList);
        expect(goalList).toHaveLength(1);
    });

    it('renders GoalAdd according to view prop', () => {
        const getGoals = sinon.spy();
        const appWrapper = shallow(<App getGoals={getGoals}/>);
        appWrapper.setProps({url: 'GoalAdd'});
        const goalAdd = appWrapper.find(GoalAdd);
        expect(goalAdd).toHaveLength(1);
    });

});
