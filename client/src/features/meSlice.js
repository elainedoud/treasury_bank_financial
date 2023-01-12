import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

const meSlice = createSlice({
    name: 'me',
    initialState,
    reducer: {
        fetchDataSuccess: (state, action) => {
            state.data = action.payload 
            state.loading = false
        },
    }
})

export const {fetchDataSuccess} = meSlice.actions

export default meSlice.reducer