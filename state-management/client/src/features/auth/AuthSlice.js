import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginService, logoutService} from "./service/AuthService";

const AuthStatus = {
  initial: 'initial',

  loginPending: 'loginPending',
  loginSucceeded: 'loginSucceeded',
  loginFailed: 'loginFailed',

  logoutPending: 'logoutPending',
  logoutSucceeded: 'logoutSucceeded',
  logoutFailed: 'logoutFailed',
}

export const login = createAsyncThunk(
    'auth/login',
    (credentials, {rejectWithValue}) => loginService(credentials,
        rejectWithValue),
    {
      condition: (_, {getState}) => {
        return [
          AuthStatus.initial,
          AuthStatus.loginSucceeded,
          AuthStatus.loginFailed,
          AuthStatus.logoutSucceeded
        ].includes(getState().auth.currentStatus);
      }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    (_, {getState, rejectWithValue}) => logoutService(
        getState().auth.user.token,
        rejectWithValue),
    {
      condition: (_, {getState}) => {
        return [
          AuthStatus.loginSucceeded,
          AuthStatus.logoutFailed,
        ].includes(getState().auth.currentStatus);
      }
    }
);

let authSlice = createSlice({
      name: 'auth',
      initialState: {
        currentStatus: AuthStatus.initial,
        user: null
      },
      extraReducers: (builder) => {
        builder

        // login cases
        .addCase(login.pending, (state, action) => {
          state.currentStatus = AuthStatus.loginPending;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.currentStatus = AuthStatus.loginSucceeded;
          state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
          state.currentStatus = AuthStatus.loginFailed;
          state.user = null;
        })

        // logout cases
        .addCase(logout.pending, (state, action) => {
          state.currentStatus = AuthStatus.logoutPending;
        })
        .addCase(logout.fulfilled, (state, action) => {
          state.currentStatus = AuthStatus.logoutSucceeded;
          state.user = null;
        })
        .addCase(logout.rejected, (state, action) => {
          state.currentStatus = AuthStatus.logoutFailed;
        })
      }
    })
;

export const selectAuth = state => state.auth;
export {AuthStatus};
export default authSlice.reducer;

