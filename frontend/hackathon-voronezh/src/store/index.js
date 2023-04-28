import { combineReducers, createStore } from 'redux';

import { sportsmanReducer } from './reducers/sportsman';
import { administratorReducer } from './reducers/administrator';
import { representativeReducer } from './reducers/representative';
import { partnerReducer } from './reducers/partner';
import { userReducer } from './reducers/userReducer';
import { eventReducer } from './reducers/eventReducer';
import { FAQReducer } from './reducers/FAQReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  sportsman: sportsmanReducer,
  administrator: administratorReducer,
  representative: representativeReducer,
  partner: partnerReducer,
  event: eventReducer,
  FAQ: FAQReducer,
});

export const store = createStore(rootReducer);
