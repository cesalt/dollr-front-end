import React, {useState, useEffect} from 'react'
import NavBarHome from './NavBarHome'
import SearchBar from './SearchBar'
import TransactionList from './TransactionList'
import BottomNav from './BottomNav'


export default function HomePage({userName, userId, onSetWallet}){

    const [transArray, setTransArray] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('http://localhost:9000/transactions')
        .then(r => r.json())
        .then(setTransArray)
    },[])

        
    

        return(
            <>
                <NavBarHome userName={userName} userId={userId} onSetWallet={onSetWallet} />
                <SearchBar />
                <TransactionList transArray={transArray}/>
                <BottomNav />    
            </>
        )


}