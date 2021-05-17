import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from '../features/counter/CounterSlice'
import AuthReducer from '../features/auth/AuthSlice'

export default configureStore({
  reducer: {
    auth: AuthReducer,
    counter: CounterReducer
  }
});
