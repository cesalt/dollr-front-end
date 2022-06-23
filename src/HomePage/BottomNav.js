import React from "react";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Paper} from "@mui/material";




export default function BottomNav(){
    
    const [value, setValue] = React.useState(0);

    
    return( 
            <Paper sx={{position: 'fixed', bottom: 0, left: 0, right:0}}>
                <BottomNavigation
                    
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home"  />
                    <BottomNavigationAction label="Crypto" />
                    <BottomNavigationAction label="Me" />
                    
                </BottomNavigation>
            </Paper>
        )
}