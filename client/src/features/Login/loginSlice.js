import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOG_URL = "/login"

const initialState = {
    logins: [],
}

export const fetchLogins = createAsyncThunk('logins/fetchLogins', async() =>{
    let response = await axios.get(LOG_URL)
    return [...response.data]
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: builder => {
            builder
                .addCase(fetchLogins.fulfilled,(state, action) =>{
                    state.status = 'succeeded'
    })}
})
    

export const allLoginData = (state) => state.logins
 
export default loginSlice.reducer;