const initialState = {
    id: '1',
    name: 'Роман',
    surName: 'Адамович',
    patronymic: 'Николаевич',
    login: 'RNOre',
    token: undefined,
    phone: '89877807652',
    role: 'Спортсменd'//enum
};

export const userReducer = (state = initialState, action) => {
    console.log('state', state)
    console.log('action', action)
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
                ...action.payload.user,
                token: action.payload.token,
            };

            return newState;
        }
        default:
            return state;
    }
};
