import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:'',
    age:0
}
const  formSlice=createSlice({
    name:'form',
    initialState,
    reducers:{
        submit:(state,action)=>{
            state.name=action.payload.name
            state.age=action.payload.age
        }
    }
})
export default formSlice.reducer;
export const {submit}=formSlice.actions