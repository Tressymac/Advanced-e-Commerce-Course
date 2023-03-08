import { Link as RouterLink } from 'react-router-dom'
import '../login/login.css'

import { useState, useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import { APIURLContext } from '../../contexts/APIURLContext';
import axios from 'axios';
import useToken from '../../hooks/login/useToken';

function MyForm() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [inputs, setInputs] = useState({});
    const apiURL = useContext(APIURLContext);
    console.log(` my api url is: ${apiURL}`);
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    if (token) {
        return <Navigate replace to ='/profile' />
    }

    // Function that posts form data to the API
    async function loginUser(credentials) {
        try {
            let res = await axios.post(apiURL + '/users/login', credentials);
            console.log(res.data);
            return res.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    // Handler function for field changes
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputs(values => ({...values, [fieldName]: fieldValue}));
    }

    // Handler function for the login form
    const handleSubmit = async (event) => {
        event.preventDefault();
        let loginCredentials = {};
        loginCredentials.email = inputs.email;
        loginCredentials.password = inputs.password;
        console.log(`Login credentials: `);
        console.log(loginCredentials);
        const loginResponse = await loginUser(loginCredentials);
        console.log(`Login response:`);
        console.log(loginResponse);
        if (loginResponse == null) {
            alert(`That username and password is not valid!`);
        } else {
            console.log(`This is the user ID: ${loginResponse._id}`)
            setToken(loginResponse.accessToken);
            navigate(`/profile/${loginResponse._id}`);
        }
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
        <label>Username
        <input 
            type="text" 
            name="email" 
            value={inputs.email || ""} 
            onChange={handleChange}
        />
        </label>
        <label>Password
            <input 
            type="password" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
            />
            </label>
            <input className="button-8" type="submit" />
            
        </form>
    )
}

// export const data=[{userData}];

export default MyForm;
