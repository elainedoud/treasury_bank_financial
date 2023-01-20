import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts} from './checkingSlice'

function Checking ({nowuser}) {

    const ouruser = nowuser
    
    
    const dispatch = useDispatch()
    const [selectAccounts, setSelectAccounts] = useState([])

    useEffect(() =>{
        dispatch(fetchAccounts())
    }, [dispatch])

    const accounts = useSelector(state => state.accounts.accounts)
    console.log(accounts)

    useEffect(() => {
        setSelectAccounts(
            accounts.filter(account => account.id === ouruser.id)
        )
    }, [ouruser])


     
    console.log(selectAccounts)
    console.log(ouruser)
    console.log(ouruser.id)
 
    return (
        <div>
            {selectAccounts.map((account) => (
                    <div key={account.id}>
                        {account.transactions.map((transaction) => (
                            <ul key={transaction.id}>
                                <p>{transaction.date}</p>
                                <p>{transaction.description}</p>
                                <p>{transaction.dollar_amount}</p>
                            </ul> 
                        ))}
                    </div>
            ))}
        </div>
    )
}


/* Misc code I may need

/*let check_url_account*/ 
/*let setCheckurlaccount*/

    /*useEffect(() => {
        dispatch(setCheckurlaccount())
    }, [dispatch])

    let check_url_account = `/account/${nowuser.id}`
    console.log(check_url_account)

        const selector = useSelector(state => state)
    console.log(selector)

         /*setCheckurlaccount = (check_url_account) => {
        return {
            type: "SET_Check_URL_Account",
            payload: check_url_account
        }
    }

    export {setCheckurlaccount}*/

  

export default Checking