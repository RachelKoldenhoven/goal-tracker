const initialState = {
    goals: [],
    view: 'GoalList'
};

const goalReducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals};
        case 'NAV_ADD_GOAL':
            return {...state, view: 'GoalAdd'};
        case 'NAV_GOAL_LIST':
            return {...state, view: 'GoalList'};
        default:
            return state;
    }
};

export default goalReducer;