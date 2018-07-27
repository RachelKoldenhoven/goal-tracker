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

export const navGoalList = () => {
  return {
      type: 'NAV_GOAL_LIST'
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
        dispatch(navGoalList());
    }
};