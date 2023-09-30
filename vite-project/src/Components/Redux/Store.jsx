
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import { redexReducers } from './State'

const persistConfig = {
    key: 'root',
    storage: storage,
  }

  const persistedReducer = persistReducer(persistConfig, redexReducers.reducer);

  const store = configureStore({
    reducer: {redexstore: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  setupListeners(store.dispatch)
  
  export default store