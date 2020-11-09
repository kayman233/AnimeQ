const initialState = {
  error: false,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_FAIL':
      return {
        ...state,
        error: action.payload
      };
    case 'USER_SUCCESS':
      console.log(state);
      return {
        ...state,
        error: null,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer
