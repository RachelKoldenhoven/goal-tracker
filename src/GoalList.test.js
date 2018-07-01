import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import GoalList from './GoalList';


describe('GoalList', () => {
    it('should render a list of goals', () => {
        const expected = [
                'I weigh 58 kilos',
                'I run 10k in less than one hour'
            ];
        const goalListWrapper = shallow(<GoalList goals={expected}/>);

        expect(goalListWrapper.find('li')).toHaveLength(2);
        expect(goalListWrapper.find('li').at(0).text()).toEqual('I weigh 58 kilos');
    });

    it('should calls onAdd when add btn is clicked', () => {
        const expected = [
            'I weigh 58 kilos',
            'I run 10k in less than one hour'
        ];
        const onAdd = sinon.spy();
        const goalListWrapper = shallow(<GoalList onAdd={onAdd} goals={expected}/>);

        goalListWrapper.find('button').simulate('click');

        expect(onAdd.calledOnce).toEqual(true);
    })
});