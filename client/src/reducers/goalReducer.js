const initialState = {
    goals: [],
    loading: true
};

const goalReducer = (state = initialState, action) => {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'GOT_GOALS':
            return {...state, goals: action.goals, loading: false};
        default:
            return state;
    }
};

export default goalReducer;