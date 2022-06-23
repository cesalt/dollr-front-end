import React from 'react'
import { Grid, Typography, Button, Menu, MenuItem, Divider} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link, Routes} from 'react-router-dom';



export default function NavBarProfile({userName, userId, onSetWallet}){

    // const navigate = useNavigate()

    // const onClickHandler = () => {
    //     fetch(`http://localhost:9000/users/${userId}`)
    //     .then(r => r.json())
    //     .then(r => onSetWallet(r))
    //     .then(navigate('/account'))

    // }


    return(
        <>
        <Grid 
            container spacing={2}
            alignItems='center'  
        >   
            <Grid item  xs={3}>
            <Link to='/home' style={{textDecoration: 'none', color:'black'}}  >
                <Typography  ml={1} variant='h5'>DOLLR</Typography>
            </Link>
            </Grid>
            <Grid item xs={2}></Grid>
  
            <Grid item xs={5}>
             
                    {/* <Button onClick={onClickHandler} color='success' variant='text'>{userName}</Button> */}
           
            </Grid>
          
            <Grid item xs={2}>
                <MenuIcon fontSize='large'/>
            </Grid>
            <Grid item={12} />
            <Divider/>
        </Grid>
        <Divider />
        </>

    )

}