import React from 'react'
import {Stack, Typography, Button} from '@mui/material'
import {TextField} from '@mui/material'
import {Divider} from '@mui/material'
import {Grid} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp({onUserStateChange}) {

const [formInputs, setFormInputs] = useState({

})

const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setFormInputs(values => ({...values, [name]: value}))
}
let navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:9000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formInputs)
})
    .then(r => r.json())
    .then(respObj => onUserStateChange(respObj))
    .then(navigate("./home"))
    
}



    return(
        <>
        <Grid container spacing={3}>
         
            <Grid item xs={12}>
                <Typography fontFamily={"sans-serif"} className='signup_banner' variant='h6' align='center' color={'black'} >SIGN UP</Typography>
                <div style={{padding: 10}}></div>
                <Divider />
            </Grid>

        </Grid>
        <div style={{padding: 6}}></div>
        <form onSubmit={handleSubmit} onChange={handleFormChange}>
        <Stack spacing={3}>
            
            <TextField required name='name' id="standard-basic" label="Full Name" variant="standard" />
            <TextField required name='user_name' id="standard-basic" label="User Name" variant="standard" />
            <TextField required name='email' id="standard-basic" label="Email" variant="standard" />
            <TextField required name='phone_number' id="standard-basic" label="Phone Number" variant="standard" />
            <TextField required name='password' id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
            <Button color='grey' variant='contained' type='submit'>SIGN UP</Button>
            <Divider />

        </Stack>
        </form>
        </>
        

    )


}