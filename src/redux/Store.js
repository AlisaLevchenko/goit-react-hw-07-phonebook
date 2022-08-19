import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/ContactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
