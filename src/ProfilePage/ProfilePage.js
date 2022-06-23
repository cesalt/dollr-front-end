import React from "react";
import ProfileDetails from './ProfileDetails'
import NavBarProfile from "./NavBarProfile";

export default function ProfilePage({profile}) {


    return(
        <>
        <NavBarProfile />
        <ProfileDetails profile={profile} />
        
        
        </>
    )

}