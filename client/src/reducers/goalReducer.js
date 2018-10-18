const initialState = {
    goals: [],
    view: 'GoalList', // TODO: delete and derive from url
    loading: true
};

const goalReducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals, loading: false};
        case 'SELECT_GOAL':
            return{...state, selectedGoal: action.goal};
        default:
            return state;
    }
};

export default goalReducer;