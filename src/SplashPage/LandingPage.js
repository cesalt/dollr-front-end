import React from 'react'


import NavBar from '../GlobalComponents/NavBar'
import SignUp from './SignUp'



export default function LandingPage({onUserStateChange}) {


    return(
        <>
            <NavBar />
            <div style={{padding: 10}}></div>
            <SignUp onUserStateChange={onUserStateChange}/>
            <div style={{padding: 16}}></div>
            
            
        </>
    )
}