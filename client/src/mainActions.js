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

export const onAdd = () => {
    return {
        type: 'NAV_ADD_GOAL'
    }
};