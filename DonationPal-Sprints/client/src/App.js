import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/images/1.png';
import './assets/styles/style.css'

import './App.css';
import Header from './components/header/header.js';


function App() {

  let apiURL = '';
  if (process.env.NODE_ENV === 'production'){
    apiURL = process.env.REACT_APP_PROD_API_URL;
  }
  else{
    apiURL = process.env.REACT_APP_DEV_API_URL;
  };
  console.log(apiURL);


  return (
    <div className='container'>
      <div className="App">
        <BrowserRouter>
          <Header Logo={logo} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;