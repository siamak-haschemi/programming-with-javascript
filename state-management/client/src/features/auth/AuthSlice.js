import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {loginService, logoutService} from "./service/UserService";

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
    async (credentials, {rejectWithValue}) => loginService(credentials,
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
    async (_, {getState, rejectWithValue}) => logoutService(
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
      extraReducers: {

        [login.pending]: (state, action) => {
          state.currentStatus = AuthStatus.loginPending;
        },
        [login.fulfilled]: (state, action) => {
          state.currentStatus = AuthStatus.loginSucceeded;
          state.user = action.payload;
        },
        [login.rejected]: (state, action) => {
          state.currentStatus = AuthStatus.loginFailed;
          state.user = null;
        },

        [logout.pending]: (state, action) => {
          state.currentStatus = AuthStatus.logoutPending;
        },
        [logout.fulfilled]: (state, action) => {
          state.currentStatus = AuthStatus.logoutSucceeded;
          state.user = null;
        },
        [logout.rejected]: (state, action) => {
          state.currentStatus = AuthStatus.logoutFailed;
        },
      }
    })
;

export const selectAuth = state => state.auth;
export {AuthStatus};
export default authSlice.reducer;

