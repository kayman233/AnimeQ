const initialState = {
    animes: [],
    error: null
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PAGE_FAIL':
            return {
                ...state,
                error: action.payload
            };
        case 'PAGE_SUCCESS':
            console.log("payload");
            console.log(action.payload);
            console.log("concat");
            console.log(action.payload.concat(...state.animes));
            console.log("state");
            console.log(state);
            return {
                ...state,
                animes: action.payload.concat(...state.animes)
            };
        default:
            return state;
    }
};

export default pageReducer;
