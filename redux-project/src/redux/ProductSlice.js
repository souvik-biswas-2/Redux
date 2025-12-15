import { createAsyncThunk} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => { // create async thunk is a middleware to create async actions
    const response = await fetch('http://localhost:5000/api/products');
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      return data.data; // API returns { success, count, data: [...] }
});

const initialState = {
    data: [],
    status: undefined,
    error: null,
}

const productsSlice = createSlice ({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => { // for async actions
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "success";
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export default productsSlice.reducer;
export { fetchProducts };