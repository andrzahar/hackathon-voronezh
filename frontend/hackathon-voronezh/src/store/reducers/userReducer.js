const initialState = {
    id: '1',
    name: 'Роман',
    surName: 'Адамович',
    patronymic: 'Николаевич',
    login: 'RNOre',
    token: 'undefined',
    phone: '89877807652',
    role: 'Спортсмен'//enum
};

export const userReducer = (state = initialState, action) => {
    switch (action?.type) {
        default:
            return state;
    }
};
