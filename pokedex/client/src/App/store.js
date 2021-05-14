import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage
} from "./localStorage";

import counterMiddleware from '../features/counter/counterMiddleware';

const loadedStateFromLocalStorage = loadStateFromLocalStorage();

let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(counterMiddleware),
  preloadedState: loadedStateFromLocalStorage
});

// subscribe to changes and persist them.
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;