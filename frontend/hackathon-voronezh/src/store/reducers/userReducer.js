const initialState = {};

export const userReducer = (state = initialState, action) => {
    console.log('action.payload', action.payload)
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

            console.log('newState', newState)

            return newState;
        }
        default:
            return state;
    }
};
