import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import formslice from "../features/formslice";
import todoslice from "../features/todoslice";
import changecolorslice from "../features/changecolorslice";

export const store=configureStore({
    reducer:{
        salih:counterSlice,
        form:formslice,
        todo:todoslice,
        colors:changecolorslice
    }
})
