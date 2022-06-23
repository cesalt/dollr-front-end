import React from 'react'
import { Grid, Card } from '@mui/material'


export default function AccountDetails({userWallet}) {

    const {user_id, balance_usd, balance_gold, balance_silver} = userWallet
    
    
    
    
    return(
        
        <Grid container spacing={12}>
            <Grid item xs={6}>{parseFloat(balance_usd/100)}</Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>

        </Grid>
        
    )


}