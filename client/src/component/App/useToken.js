import { useState } from 'react';

// uses localStorage to store token
// change localStorage -> sessionStorage if necessary
export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
    };

    return {
        setToken: saveToken,
        token
    }
}