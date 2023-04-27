import { combineReducers, createStore } from "redux";

import { sportsmanReducer } from "./reducers/sportsman";
import { administratorReducer } from "./reducers/administrator";
import { representativeReducer } from "./reducers/representative";
import { partnerReducer } from "./reducers/partner";

export const rootReducer = combineReducers({
  sportsman: sportsmanReducer,
  administrator: administratorReducer,
  representative: representativeReducer,
  partner: partnerReducer,
});

export const store = createStore(rootReducer);
