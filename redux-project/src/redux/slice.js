import { createSlice } from "@reduxjs/toolkit";

// Get initial state from localStorage
const getInitialState = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : { items: [] };
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return { items: [] };
    }
};

const initialState = getInitialState();

const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            // Save to localStorage whenever cart changes
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            // Save to localStorage whenever cart changes
            localStorage.setItem('cart', JSON.stringify(state));
        },
        clearCart: (state) => {
            state.items = [];
            // Save to localStorage whenever cart changes
            localStorage.setItem('cart', JSON.stringify(state));
        },
        // New action to load cart from localStorage on app start
        loadCart: (state, action) => {
            return action.payload;
        }
    },
});

export const { addItem, removeItem, clearCart, loadCart } = addToCart.actions; // export action
export default addToCart.reducer; // export reducer