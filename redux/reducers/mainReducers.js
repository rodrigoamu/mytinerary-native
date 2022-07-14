import {combineReducers} from "redux";
import citiesReducers from "./citiesReducers";
import itinerariesReducers from "./itinerariesReducers";
import userReducer from "./userReducer";
import activityReducer from "./activityReducer"


const mainReducers = combineReducers ({
    citiesReducers, itinerariesReducers,userReducer,activityReducer,
    
})

export default mainReducers;