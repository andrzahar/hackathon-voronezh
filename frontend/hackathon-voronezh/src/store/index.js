import {combineReducers, createStore} from "redux";
import {sportsmanReducer} from "./reducers/sportsman.js";
import {administratorReducer} from "./reducers/administrator.js";
import {representativeReducer} from "./reducers/representative.js";
import {partnerReducer} from "./reducers/partner.js";

export const rootReducer=combineReducers({
    sportsman: sportsmanReducer,
    administrator: administratorReducer,
    representative: representativeReducer,
    partner: partnerReducer
})

export const store=createStore(rootReducer);