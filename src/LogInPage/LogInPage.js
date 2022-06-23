import React from 'react'
import NavBarWithoutLogin from '../GlobalComponents/NavBarWithoutLogin'
import { useState } from 'react'
import {TextField, Button, Stack, Divider} from '@mui/material'
import { useNavigate } from 'react-router-dom'



export default function LogInPage({onUserStateChange, onTransactionArrayStateChange}) {
    const [formInputs, setFormInputs] = useState({

    })

    let navigate = useNavigate()
    
    const handleFormChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setFormInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9000/users/")
        .then(r => r.json())
        .then(r => onUserStateChange(r))
        .then(navigate('../home'))  
    }

    return(
        <>
            <NavBarWithoutLogin />
            <div style={{padding: 15}}></div>
            <Divider />
            <form onSubmit={handleSubmit} onChange={handleFormChange}>
                <Stack spacing={3}>
                    <TextField required name='email' id="standard-basic" label="Email" variant="standard" />
                    <TextField required name='password' id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
                    <Button color='grey' variant='contained' type='submit'>LOG IN</Button>
                </Stack>
        </form>
        </>
    )


}