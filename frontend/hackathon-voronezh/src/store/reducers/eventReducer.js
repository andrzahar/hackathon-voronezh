const initialState = {
  id: '',
  creator: {
    id: '',
    name: '',
    surname: '',
    patronymic: '',
    mail: '',
    phone: '',
    role: '',
  },
  members: [
    {
      eventMember: {
        user: {
          id: '',
          name: '',
          surname: '',
          patronymic: '',
          mail: '',
          phone: '',
          role: '',
        },
        position: '',
        score: '',
      },
    },
  ],
  start: '',
  end: '',
  status: '',
  criteria: [],
  rating: {
    ratingPosition: [
      {
        name: '',
        points: '',
        whatLiked: '',
        whatUnliked: '',
      },
    ],
  },
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
