import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
}
const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.items.push(action.payload);
        },
        remove: (state, action) => {
            const indexToRemove = action.payload;
            state.items = state.items.filter((_, index) => index !== indexToRemove);
          },
    }
})
export default todoslice.reducer;
export const {add,remove}=todoslice.actions;