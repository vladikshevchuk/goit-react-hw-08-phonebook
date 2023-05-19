import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);