import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setCheckurlaccount} from './Checking'
import {useDispatch, useSelector} from 'react-redux'

const initialState = {
    accounts: [],
    check_url_account : ""
} 

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () =>{
    let response = await axios.get("/account")
    return [...response.data]
})

/* let response = await axios.get(`/account/${nowuser}`) */

/*export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async ({getState}) =>{
        const state = getState()
        let check_url_account = state.check_url_account
        return fetch(check_url_account)
        .then((response) => response.json())
        .then((data) => data.accounts)
});*/

/*async function not triggering*/

/*let response = await axios.get(check_url_account)*/
/*return [...response.data];*/

const checkingSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        setCheckurlaccount: (state, action) => {
            state.check_url_account = action.payload 
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAccounts.fulfilled,(state, action) => {
                state.accounts = action.payload
            })
    }

})


export default checkingSlice.reducer;