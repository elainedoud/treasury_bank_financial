import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts, allCheckingData} from './checkingSlice'

let check_url_account

function Checking ({user}){

    check_url_account = `/account/${user}`

    const dispatch = useDispatch()
    const accounts = useSelector(state => state.accounts.accounts)

    useEffect(() =>{
        dispatch(fetchAccounts());
    }, [dispatch])
                 
    return (
        <div>
            {accounts.map(account =>{
                return (
                    <ul key={user.id} user={user}>
                    <p>{account.transaction.date}</p>
                    <p>{account.transaction.description}</p>
                    <p>{account.transaction.dollar_amount}</p>
                    </ul> )
            })}
        </div>
    )
}

export const CHECK_URL = check_url_account

export default Checking