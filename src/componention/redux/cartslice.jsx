import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name:"addcart",
    initialState:{
        value:[],
    },

    reducers:{
        addcarts:(state, action)=>{
               state.value=  state.value.push(action.payload)
        }
    }
})

export const {addcart} = cartslice.actions

export const selectcart =(state) => state.addcart


export default cartslice.reducer