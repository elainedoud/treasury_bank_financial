import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/loginSlice';
import checkingReducer from '../features/checking/checkingSlice'

    export  const store = configureStore({
        reducer: {
            login: loginReducer,
            accounts: checkingReducer,
        }
    })