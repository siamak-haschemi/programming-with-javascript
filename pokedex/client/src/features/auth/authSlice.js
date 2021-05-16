import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginService, logoutService} from "./service/UserService";

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, {rejectWithValue}) => loginService(credentials,
        rejectWithValue)
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (user, {rejectWithValue}) => logoutService(user, rejectWithValue)
);

const StatusValues = {
  initial: 'initial',
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
}

let authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentStatus: 'initial',
    user: null
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      if (state.currentStatus === StatusValues.initial
          || state.currentStatus === StatusValues.fulfilled
          || state.currentStatus === StatusValues.rejected) {
        state.currentStatus = 'pending';
      }
    },
    [login.fulfilled]: (state, action) => {
      if (state.currentStatus === StatusValues.pending) {
        state.currentStatus = 'fulfilled';
        state.user = action.payload;
      }
    },
    [login.rejected]: (state, action) => {
      if (state.currentStatus === StatusValues.pending) {
        state.currentStatus = StatusValues.rejected;
        state.user = null;
      }
    },

    [logout.fulfilled]: (state, action) => {
      state.currentStatus = StatusValues.initial;
      state.user = null;
    },
  }
});

export const selectAuth = state => state.auth;
export {StatusValues};
export default authSlice.reducer;

