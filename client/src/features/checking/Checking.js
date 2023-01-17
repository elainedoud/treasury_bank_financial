import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts, allCheckingData} from './checkingSlice'

function Checking (){

    const dispatch = useDispatch()

    const accounts = useSelector(allCheckingData)
             
    return (
        <div>
            {accounts.map(account =>{
                return (
                    <ul>
                    <p>{account.transaction.date}</p>
                    <p>{account.transaction.description}</p>
                    <p>{account.transaction.dollar_amount}</p>
                    </ul> )
            })}
        </div>
    )
}

export default Checking