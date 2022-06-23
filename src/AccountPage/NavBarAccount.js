import React from 'react'
import { Grid, Typography, Button, Menu, MenuItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



export default function NavBarHome({userNameName}){

    

    return(
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
                <Link to='/home' >
                    <Button color='success' variant='text'>HOME</Button>
                </Link>
            </Grid>
          
            <Grid item xs={2}>
                <MenuIcon fontSize='large'/>
            </Grid>
            <Grid item={12} />

        </Grid>
    )

}