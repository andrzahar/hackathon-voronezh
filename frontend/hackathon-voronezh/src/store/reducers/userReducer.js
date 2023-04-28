const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN': {
      const newState = {
        ...state,
        token: action.payload.token,
      };

      return newState;
    }
    case 'SET_USER_INFO': {
      const newState = {
        ...action.payload.info,
        token: action.payload.token,
      };

      return newState;
    }
    default:
      return state;
  }
};
