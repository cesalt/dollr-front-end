import React from 'react'
import { Grid, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



export default function NavBarWithoutLogin(){

    return(
        <Grid 
            container spacing={2}
            alignItems='center'  
        >   
            <Grid item xs={3}>
                <Link to='/' style={{textDecoration: 'none', color:'black'}}>
                <Typography ml={1} variant='h5'>DOLLR</Typography>
                </Link>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={3}>
            </Grid>
          
            <Grid item xs={2}>
                <MenuIcon fontSize='large'/>
            </Grid>

        </Grid>
    )

}