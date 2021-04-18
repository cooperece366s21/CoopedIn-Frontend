import {changePage} from "../actions";
const {createStore} = Redux;


const initialState = {
    activePage: "index",
    domainName: "http://localhost:8080", 
    loggedIn: "false", 
    username: ""
};

function rootReducer(state = initialState, action) {
     switch(action.type) {
         if(action.type ==='CHANGE_PAGE')
             return{
             ...state,
                 activePage: [...state.activePage, action.todo]
             }
         if(action.type==='CHANGE_LOGIN')

     }
}
const store = createStore(rootReducer);

store.dispatch(changePage)