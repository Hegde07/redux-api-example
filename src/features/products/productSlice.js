import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productAPI';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProducts();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;
export default productSlice.reducer;
