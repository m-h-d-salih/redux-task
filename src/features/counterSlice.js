import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0,
    count2:0
}
const counterSlice=createSlice(
    {
        name:'counter',
        initialState,
        reducers:{
            increment:(state)=>{
                state.count=state.count+1
            },
            decrement:(state)=>{
                state.count=state.count-1
            },
            incrementby5:(state)=>{
                state.count2=state.count2+5
            },
            decrementby5:(state)=>{
                state.count2=state.count2-5
            }
        }
    }
);
export default counterSlice.reducer;
export const {increment,decrement,incrementby5,decrementby5}=counterSlice.actions