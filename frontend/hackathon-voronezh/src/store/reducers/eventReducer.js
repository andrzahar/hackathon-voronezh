const initialState = {
    id: '',
    creator: {
        id: '1',
        name: 'Роман',
        surname: 'Адамович',
        patronymic: 'Николаевич',
        mail: 'lkjsaf@mail.ru',
        phone: '98239472397',
        role: 'Спортсмен'
    },
    members: [
        {
            eventMember: {
                user: {
                    id: '1',
                    name: 'Александр',
                    surname: 'Цвень',
                    patronymic: 'Вкторович',
                    mail: 'sdlf@jlasd',
                    phone: '843274293',
                    role: 'Спортсмен'
                },
                position: '1',
                score: '4.2'
            }
        },
        {
            eventMember: {
                user: {
                    id: '2',
                    name: 'Денис',
                    surname: 'Исхаков',
                    patronymic: 'Андреевич',
                    mail: 'sdkh@lsdjf',
                    phone: '7329742342',
                    role: 'Спортсмен'
                },
                position: '2',
                score: '2'
            }
        }

    ],
    start: '27.04',
    end: '29.04',
    status: 'Активен',
    criteria: [],
    rating: {
        ratingPosition: [
            {
                name: '',
                points: '',
                whatLiked: '',
                whatUnliked: ''
            }
        ]
    }
}

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}