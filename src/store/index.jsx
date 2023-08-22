import { configureStore } from '@reduxjs/toolkit';
import  Login  from  './slices/LoginSlice';

export const store = configureStore({
    reducer: {
        login : Login
    },
})

export default store
