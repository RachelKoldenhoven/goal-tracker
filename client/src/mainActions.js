import {push as pushRoute} from 'redux-first-routing';

export const getGoals = () => {
    return async (dispatch) => {
        const request = await fetch('/api/goals');
        const goals = await request.json();
        const action = gotGoals(goals);
        dispatch(action);
    }
};

export const gotGoals = (goals) => {
    return {
        type: 'GOT_GOALS',
        goals
    }
};

export const saveGoal = (goal) => {
    return async (dispatch) => {
        await fetch('api/goals', {
            method: 'POST',
            body: JSON.stringify(goal),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        dispatch(getGoals());
        dispatch(pushRoute('/'));
    }
};

// action creator, returns an action (object)
export const selectGoal = (goal) => {
    return {
        type: 'SELECT_GOAL',
        goal
    };
};

export const onSelectGoal = (goal) => {
    return (dispatch) => {
        dispatch(selectGoal(goal));
        dispatch(pushRoute(`/goals/${goal.id}`));
    }
};

export const updateGoal = (goal) => {
    console.log('goal to update: ', goal);
    return async (dispatch) => {
        await fetch(`api/goals/${goal.id}`, {
            method: 'PUT',
            body: JSON.stringify(goal),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        dispatch(getGoals());
        dispatch(pushRoute('/'));
    }};