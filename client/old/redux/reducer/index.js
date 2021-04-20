import {combineReducers} from "redux";
import loggedReducer from "./isLogged";
import {CHANGE_PAGE} from "../constants/action-types";
import {changePage} from "../actions/actions"
const initState = {
    activePage: 'HomePage',
}
function allReducers(state = initState, action){
    switch(action.type){
        case CHANGE_PAGE:
            return{
                ...state,
                activePage :action.payload.activePage,
            };
        default:
            return state;
    }
}

//const store = createStore(rootReducer);

export default allReducers;