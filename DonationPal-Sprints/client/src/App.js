import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logo from './assets/images/1.png';
import './assets/styles/style.css'

import './App.css';
// import Task from './pages/Board/Board';
import Header from './components/header/header';

// import Board from './pages/Board/Board';
// import AllTasks from './pages/AllTasks/AllTasks';

function App() {

  // check Node enviroment 
  console.log(process.env.NODE_ENV);

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
          <Header buddingPopWine={logo} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;