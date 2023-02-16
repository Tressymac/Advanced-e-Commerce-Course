import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logoImage from './assets/images/1.png';
import homeImage from './assets/images/handHeart.jpeg';
import './assets/styles/style.css'

import './App.css';
import Header from './components/header/header.js';
import Homepage from './components/home/home';

import Campaigns from './pages/campaigns/campaigns';


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
          <Header Logo={logoImage} />
          {/* <Homepage image={homeImage} /> */}
          <Routes>
            {/* Whoops the homepage is in the component */}
            <Route path="/" element={<Homepage image={homeImage}/>}/>
            <Route path="/Campaigns" element={<Campaigns apiURL={apiURL} />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;