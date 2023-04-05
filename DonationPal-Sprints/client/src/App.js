import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import logoImage from './assets/images/1.png';
import homeImage from './assets/images/handHeart.jpeg';
import './assets/styles/style.css'

import './App.css';
import Header from './components/header/header.js';
import Homepage from './components/home/home';

import Campaigns from './pages/campaigns/campaigns';
import CampaignDetails from './pages/campaigns/campaignDetails';

import Login from './components/login/login'

import ProfilePage from "./pages/profile/profile";


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
        <BrowserRouter basename="/deployed-DonationPal">
          <Header Logo={logoImage} />
          <Routes>
            {/* Whoops the homepage is in the component */}
            <Route path="/" element={<Homepage image={homeImage}/>}/>;
            <Route path="/Campaigns" element={<Campaigns apiURL={apiURL} />}/>;
            <Route path="/Campaigns/:_id" element={<CampaignDetails apiURL={apiURL} />}/>;
            <Route path="/login" element={<Login />}/>;
            {/* <Route path='/profile' element={ <ProfilePage /> } /> */}
            <Route path='/profile/:_id' element={ <ProfilePage/> } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;