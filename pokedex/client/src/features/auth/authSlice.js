import {loginSlice} from "@reduxjs/toolkit";

let authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0
  },
  reducers: {
    login: state => {
      //
    },
    logout: state => {
      //
    },
    getUserInfo: state => {
      //
    }
  }
});

export const {increment, decrement, incrementByAmount} = authSlice.actions;

export const selectCount = state => state.counter.value;

export default authSlice.reducer;

