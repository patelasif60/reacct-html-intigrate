import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
    name:'Login',
    initialState : [],
    reducers :{
        login(state,action){
            state.push(action.payload)
        },
        logout(state,action){}
    },
});

export default Login.reducer
export const { login } = Login.actions;