const initialState = {
    animes: [],
    userAnimes: [],
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
            return {
                ...state,
                animes: action.payload.data
            };
        case 'USER_PAGE_SUCCESS':
            return {
                ...state,
                userAnimes: action.payload.data
            };
        default:
            return state;
    }
};

export default pageReducer;
