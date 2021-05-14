import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const incrementByAmountAsync = createAsyncThunk(
    'counter/incrementByAmountAsync',
    async (amount, thunkAPI) => {
      await new Promise(r => setTimeout(r, 2000));
      return amount;
    }
);

let counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [incrementByAmountAsync.fulfilled]: (state, action) => {
      state.value += action.payload;
    },
  }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const selectCount = state => state.counter.value;

export default counterSlice.reducer;

