import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    accounts: [],
}

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async() =>{
    const response = await axios.get("/account")
    const account = await response.json();
    return account;
})

const checkingSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAccounts.fulfilled,(state, action) => {
                state.accounts = action.payload
            })
    }

})

export const allCheckingData = (state) => state.accounts

export default checkingSlice.reducer;