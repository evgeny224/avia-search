import { combineReducers, createStore } from "redux";
import searchPageReducer from "./search-reducer";


    let reducers = combineReducers({
        searchPage: searchPageReducer,
    })

    let store = createStore(reducers);


    export default store;