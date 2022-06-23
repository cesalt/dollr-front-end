import { TextField, Stack, Divider } from '@mui/material'
import React from 'react'



export default function SearchBar() {


    
    return(
        <>
        <Stack>
            <TextField id='standard-size-small' size='small' placeholder='SEARCH'></TextField>
            <div style={{padding: 10}}></div>
            <Divider/>
        </Stack>
        </>
    )

}