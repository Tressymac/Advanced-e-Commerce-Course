import { Link as RouterLink } from 'react-router-dom'
import '../login/login.css'

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

  return (
    <form method="post">
      <label>Username
      <input 
        type="text" 
        name="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
      />
      </label>
      <label>Password
        <input 
          type="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        </label>
        <input className="button-8" type="submit" />
        
    </form>
  )
}

export default MyForm;
