const initialState = {
    name: undefined,
    surName: undefined,
    patronymic: undefined,
    login: undefined,
    token: undefined,
};

export const userReducer = (action, state = initialState) => {
    switch (action?.type) {
        default:
            return state;
    }
};
