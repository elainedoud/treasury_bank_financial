import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts, allCheckingData} from './checkingSlice'

function Checking (){

    const dispatch = useDispatch()
    const accounts = useSelector(state => state.accounts.accounts)

    useEffect(() =>{
        dispatch(fetchAccounts());
    }, [dispatch])
    
    
    /*const accounts = Object.keys(check_accounts).map(key => {
        return check_accounts[key]
    })*/

             
    return (
        <div>
            {accounts.map(account =>{
                return (
                    <ul>
                    <p>key={account.id} {account.transaction.date}</p>
                    <p>{account.transaction.description}</p>
                    <p>{account.transaction.dollar_amount}</p>
                    </ul> )
            })}
        </div>
    )
}

export default Checking