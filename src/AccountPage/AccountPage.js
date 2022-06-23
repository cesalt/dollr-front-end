import React from 'react'
import NavBarAccount from './NavBarAccount'
import AccountDetails from './AccountDetails'

export default function AccountPage({userName, userWallet}){




    return(
        <>
            <NavBarAccount userName={userName} />
            <AccountDetails userWallet={userWallet} />
        </>
    )





}