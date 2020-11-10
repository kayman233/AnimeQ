const initialState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState')).animes
    : { animes: [],
        error: null }

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
                animes: action.payload
            };
        default:
            return state;
    }
};

export default pageReducer;
