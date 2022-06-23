import React from "react";
import TransactionCard from './TransactionCard'


import { Stack } from "@mui/material";

export default function TransactionList({transArray}){


    
const renderTransCards = transArray.map((obj) => <TransactionCard key={obj.id} obj={obj} />)
    

    return(
        <Stack sx={{width:'100%'}}>
            {renderTransCards}
        </Stack>
    )

}