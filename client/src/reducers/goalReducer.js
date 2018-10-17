const initialState = {
    goals: [],
    view: 'GoalList',
    selectedGoal: undefined
};

const goalReducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals};
        case 'SELECT_GOAL':
            return{...state, selectedGoal: action.goal};
        default:
            return state;
    }
};

export default goalReducer;