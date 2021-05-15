import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginService, logoutService} from "./service/UserService";

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => loginService(credentials, thunkAPI)
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (user, thunkAPI) => logoutService(user, thunkAPI)
);

let authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = null;
    },
  }
});

export const selectUser = state => state.auth.user;

export default authSlice.reducer;

