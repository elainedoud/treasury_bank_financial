import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {useState} from 'react'
import axios from "axios";
import {CHECK_URL} from './Checking'

const initialState = {
    accounts: [],
}

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async() =>{
        const response = await axios.get(CHECK_URL)
        const account = await response.data();
        return response;
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