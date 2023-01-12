import { configureStore } from '@reduxjs/toolkit'
import mereducer from '/features/meSlice/'

export default configureStore({
    reducer: {
        me: mereducer
    }
})