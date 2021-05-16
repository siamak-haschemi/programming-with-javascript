import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {incrementByValueService, resetService} from "./service/CounterService";
import {AuthStatus} from "../auth/AuthSlice";

export const incrementByValue = createAsyncThunk(
    'counter/incrementByValue',
    async (value, {getState, rejectWithValue}) => incrementByValueService(
        getState().auth.user.token,
        {value},
        rejectWithValue),
    {
      condition: (value, {getState}) => {
        return getState().auth.currentStatus === AuthStatus.loginSucceeded;
      }
    }
);

export const reset = createAsyncThunk(
    'counter/reset',
    async (_, {getState, rejectWithValue}) => resetService(
        getState().auth.user.token,
        rejectWithValue),
    {
      condition: (value, {getState}) => {
        return getState().auth.currentStatus === AuthStatus.loginSucceeded;
      }
    }
);

let counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: null
  },
  extraReducers: {
    [incrementByValue.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
    [reset.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  }
});

export const selectCounter = state => state.counter;

export default counterSlice.reducer;
