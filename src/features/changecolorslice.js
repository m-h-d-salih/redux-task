// changecolorslice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: ''
};

const changecolorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    change: (state, action) => {
      state.color = action.payload.color;
    }
  }
});

export const { change } = changecolorSlice.actions;
export default changecolorSlice.reducer;
