import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setCheckurlaccount} from './Checking'

const initialState = {
    accounts: [],
}

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async ({getState}) =>{
        const state = getState()
        let check_url_account = state.checking.check_url_account
        let response = await axios.get(check_url_account)
        return [...response.data];
});
/*async function not triggering*/

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


export const allCheckingData = (state) => state.accounts

export default checkingSlice.reducer;