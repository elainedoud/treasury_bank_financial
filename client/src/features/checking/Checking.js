import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchAccounts} from './checkingSlice'

function Checking ({nowuser, setnowuser, newname, signedup}) {

    useEffect(() =>{
        setnowuser(nowuser)
    }) 

    const ouruser = nowuser.id
    const dispatch = useDispatch()
    const [selectAccounts, setSelectAccounts] = useState([])

    useEffect(() =>{
        dispatch(fetchAccounts())
    }, [dispatch])

    const accounts = useSelector(state => state.accounts.accounts)

    useEffect(() => {
        setSelectAccounts (
            accounts.filter(account => {
                return account.clients.some(client => client.id === ouruser)
            }))
         }, [ouruser, accounts])

 
    return (
        <div>
            <div>{signedup ? <p>Welcome {newname}! Your starting balance is $0.</p> :null}</div>
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

export default Checking