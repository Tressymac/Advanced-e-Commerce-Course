import { Link as RouterLink } from 'react-router-dom'
import '../login/login.css'

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [inputs, setInputs] = useState({});

    // Handler function for field changes
    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setInputs(values => ({...values, [fieldName]: fieldValue}));
    }

    // Handler function for the login form 
    const handleSubmit = (event) => {
        event.preventDefault();
        alert( `You entered ${inputs.email} and ${inputs.password}` )
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

export default MyForm;
