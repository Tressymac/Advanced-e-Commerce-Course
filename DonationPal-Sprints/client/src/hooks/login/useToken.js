import { useState } from 'react';

export default function useToken() {
    // Function that will retrieve an accessToken in LocalStorage
    function getToken() {
        const tokenString = localStorage.getItem('accessToken');
        const userToken = JSON.parse(tokenString);
        if (userToken) {
            console.log(`Found userToken`);
            return userToken;
        } else {
            return null;
        }
    }

    const [token, setToken] = useState(getToken());

    // Function that will set accessToken in LocalStorage
    function saveToken(userToken) {
        localStorage.setItem('accessToken', JSON.stringify(userToken));
        setToken(userToken);
    }

    // Returns an object that allows to invoke the custom hook
    return {
        token,
        setToken: saveToken
    }

}