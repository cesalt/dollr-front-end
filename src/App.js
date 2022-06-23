import React from 'react'
import './App.css';
import { useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './SplashPage/LandingPage';
import LogInPage from './LogInPage/LogInPage'
import HomePage from './HomePage/HomePage'
import AccountPage from './AccountPage/AccountPage';

function App() {
  const [userState, setUserState] = useState({
    name: '',
    user_name: '',
    email: '',
    password: ''
  })

  const userName = userState.name
  const userId = userState.id

  const onUserStateChange = (userObj) => {
    setUserState(userObj)
  }

  const [wallet, setWallet] = useState()

  const onSetWallet = (userInfo) => setWallet(userInfo)

  const userWallet = wallet

  console.log(userWallet)

  return (


    <Routes>
      <Route path="/" element={<LandingPage onUserStateChange={onUserStateChange} />} />
      <Route path="/login" element={<LogInPage onUserStateChange={onUserStateChange}/>}/>
      <Route path="/home" element={<HomePage onUserStateChange={onUserStateChange} userName={userName} userId={userId} onSetWallet={onSetWallet} />} />
      <Route path="/account" element={<AccountPage userName={userName} userWallet={userWallet}/>} />
    </Routes>


  )
}


export default App;
