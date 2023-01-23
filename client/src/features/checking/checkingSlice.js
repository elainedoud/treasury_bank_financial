import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    accounts: [],
    check_url_account : ""
} 

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () =>{
    let response = await axios.get("/account")
    return [...response.data]
})

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