const initialState = {
    name: undefined,
    surName: undefined,
    patronymic: undefined,
    login: undefined,
    token: 'undefined',
};

export const userReducer = (state = initialState, action) => {
    switch (action?.type) {
        default:
            return state;
    }
};
