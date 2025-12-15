import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state) => { //action
            
        }
    }
});

export const { addItem } = addToCart.actions; // export action
export default addToCart.reducer; // export reducer