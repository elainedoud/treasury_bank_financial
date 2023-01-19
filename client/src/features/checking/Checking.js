import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts, allCheckingData} from './checkingSlice'

let setCheckurlaccount

function Checking ({nowuser}){

    const dispatch = useDispatch()
    const accounts = useSelector(state => state.accounts.accounts)
    const selector = useSelector(state => state)
    console.log(selector)

    const check_url_account = `/account/${nowuser.id}`

    useEffect(() =>{
        dispatch(fetchAccounts(allCheckingData));
    }, [dispatch])

    useEffect(() => {
        dispatch(setCheckurlaccount(check_url_account))
    }, [dispatch, check_url_account])

      setCheckurlaccount = (check_url_account) => {
        return {
            type: "SET_Check_URL_Account",
            payload: check_url_account
        }
    }  
                 
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

export {setCheckurlaccount}
export default Checking