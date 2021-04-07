import {
    ADD_DOMAIN_NAME, 
    CHANGE_PAGE, 
    CHANGE_LOGIN, 
    CHANGE_USERNAME,
    LOGOUT,
} from "./constants/action-types";

export const addDomainName = (domainName) => ({
    type: ADD_DOMAIN_NAME, 
    payload: {
        domainName, 
    },
});

export const changePage = (activePage) => ({
    type: CHANGE_PAGE, 
    payload: {
        activePage,
    },
});

export const changeLogin = (loggedIn) => ({
    type: CHANGE_LOGIN,
    payload: {
        loggedIn,
    },
});

export const changeUsername = (username) => ({
    type: CHANGE_USERNAME, 
    payload: {
        username,
    },
});
