import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginService, logoutService} from "./service/UserService";

const StatusValues = {
  initial: 'initial',
  loginPending: 'loginPending',
  loginSucceeded: 'loginSucceeded',
  loginFailed: 'loginFailed',
}

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, {rejectWithValue}) => loginService(credentials,
        rejectWithValue)
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (user, {rejectWithValue}) => logoutService(user, rejectWithValue)
);

let authSlice = createSlice({
      name: 'auth',
      initialState: {
        currentStatus: StatusValues.initial,
        user: null
      },
      extraReducers: {

        [login.pending]: (state, action) => {
          if ([
            StatusValues.initial,
            StatusValues.loginSucceeded,
            StatusValues.loginFailed].includes(state.currentStatus)
          ) {
            state.currentStatus = StatusValues.loginPending;
          }
        },

        [login.fulfilled]: (state, action) => {
          if ([StatusValues.loginPending].includes(state.currentStatus)) {
            state.currentStatus = StatusValues.loginSucceeded;
          }
          state.user = action.payload;
        },

        [login.rejected]: (state, action) => {
          if ([StatusValues.loginPending].includes(state.currentStatus)) {
            state.currentStatus = StatusValues.loginFailed;
            state.user = null;
          }
        },

        [logout.fulfilled]: (state, action) => {
          state.currentStatus = StatusValues.initial;
          state.user = null;
        },
      }
    })
;

export const selectAuth = state => state.auth;
export {StatusValues};
export default authSlice.reducer;

