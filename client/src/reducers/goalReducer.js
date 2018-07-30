const initialState = {
    goals: [],
    view: 'GoalList'
};

const goalReducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals};
        default:
            return state;
    }
};

export default goalReducer;