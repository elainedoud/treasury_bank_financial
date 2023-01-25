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
            <div class="container pt-4">
                <div class="row pt-2 ">
                {signedup ? <p class="bg-warning">Welcome {newname}! Your starting balance is $0.</p> :null}
                </div>
            </div>
            {selectAccounts.map((account) => (
                    <div key={account.id}>
                        <table class="table table-light">
                            <thead>
                                <tr>
                                    <th class="text-start">Date</th>
                                    <th class="text-start">Transaction</th>
                                    <th class="text-end">Dollar Amount</th>
                                </tr>
                            </thead>
                        {account.transactions.map((transaction) => (
                            <tbody>
                            <tr key={transaction.id}>
                                <td class="text-start">{transaction.date}</td>
                                <td class="text-start">{transaction.description}</td>
                                <td class="text-end">{transaction.dollar_amount}</td>
                            </tr> 
                            </tbody>
                        ))}
                        </table>
                    </div>
            ))}
        </div>
    )
}

export default Checking