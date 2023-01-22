import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts} from './checkingSlice'

function Checking ({nowuser, setnowuser}) {

    useEffect(() =>{
        setnowuser(nowuser)
    })

    console.log(nowuser)
    const ouruser = nowuser
    console.log(ouruser)
    
    
    const dispatch = useDispatch()
    const [selectAccounts, setSelectAccounts] = useState([])

    useEffect(() =>{
        dispatch(fetchAccounts())
    }, [dispatch])

    const accounts = useSelector(state => state.accounts.accounts)

    const users = accounts.map(account => account.clients)
    console.log(users)
  
    /*const filteredAccount = the_users.find(user => user.name === ouruser.name)*/

    /*useEffect(()=>{
        setSelectAccounts(
            accounts.filter(account => account.includes(filteredAccount))
        )
    }, [filteredAccount, accounts])*/

    const clients = accounts.map((account) => (account.clients))
    console.log(clients)
    const more_clients = clients.map((client) => client.id)
    console.log(more_clients)


    useEffect(() => {
        setSelectAccounts(
            accounts.filter(account => account.id === ouruser.id)
        )
    }, [ouruser, accounts])

    /*accounts.filter(account => account.id === ouruser.id)*/

    console.log(accounts)
    console.log(selectAccounts)
    
    
 
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