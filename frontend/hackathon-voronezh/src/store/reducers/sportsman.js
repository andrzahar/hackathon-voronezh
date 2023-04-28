// const initialState = {
//     properties: {
//         birthday: '24.03.2001'
//     },
//     sex: 'м',
//     passport: {
//         number: '5402 093076',
//         nameOwner: 'УМВД России по Оренбургской области',
//         companyName: 'УМВД России по Оренбургской области',
//         issueDate: '09.04.2021',
//         companyCode: '560-004',
//         birthdayplace: 'г. Оренбург ул. Коммунистическая д.90'
//     },
//     oms: '2138762174102873'
// };

const initialState = {
    properties: {
        birthday: ''
    },
    sex: '',
    passport: {
        number: '',
        nameOwner: '',
        companyName: '',
        issueDate: '',
        companyCode: '',
        birthdayplace: ''
    },
    oms: ''
};
export const sportsmanReducer = (state = initialState, action) => {
    switch (action?.type) {
        default:
            return state;
    }
};
