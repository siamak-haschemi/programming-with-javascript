import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {

      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
      };

      return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
      .then(response => {
        if (!response.ok) {
          return null;
        }
        return response.json()
      });
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (user, thunkAPI) => {

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token
        }
      };

      return fetch(`http://localhost:4000/users/logout`, requestOptions)
      .then(response => {
        if (!response.ok) {
          return null;
        }
        return response.json()
      });
    }
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

