import React from "react";
import { Stack, Avatar, Typography, Button, Divider, Card} from "@mui/material";

export default function ProfileDetails({profile}){

    const {name, profile_pic, email, user_name, created_at, id} = profile

    const sendClickHandler = () => {
        console.log('fart')
    }

    const stealClickHandler = () => {
        console.log('fart')
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch('http://localhost:9000/users', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formInputs)
    // })
    //     .then(r => r.json())
    //     .then(respObj => onUserStateChange(respObj))
    //     .then(navigate("./home"))
        
    // }



    return (

        <>
        <div style={{padding: 10}}></div>
        <Card>
        <Stack alignItems={'center'} spacing={2}>
        <Avatar alt='stuff' src={profile_pic} sx={{width: 256, height: 256}} />
        <Typography variant="h5" >{name.toUpperCase()}</Typography>
        <Typography variant="h6" >@{user_name.toUpperCase()}</Typography>
        <Typography variant="h8" >{email}</Typography>
        
        <div style={{padding: 10}}></div>

        <Stack direction="row"divider={<Divider orientation="vertical" flexItem />}
        spacing={2}>
            
        <Button onClick={stealClickHandler} color="error" size="large" variant="contained">STEAL</Button>
        <Button onClick={sendClickHandler} color='success' size='large' variant='contained'>SEND</Button>

        </Stack>
        </Stack>
        <div style={{padding: 10}}></div>
        <div style={{padding: 10}}></div>
        </Card>
        </>

    )



}