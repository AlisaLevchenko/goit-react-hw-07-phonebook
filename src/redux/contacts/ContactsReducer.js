import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  // addContact,
  // deleteContact,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
  filterContacts,
} from './ContactsAction';

const isLoadingReducer = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [removeContactsRequest]: () => true,
  [removeContactsSuccess]: () => false,
  [removeContactsError]: () => false,
});

const itemsReducer = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [removeContactsSuccess]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const errorReducer = createReducer(null, {
  [getContactsError]: (_, { payload }) => payload,
  [getContactsRequest]: () => null,
  [addContactsError]: (_, { payload }) => payload,
  [addContactsRequest]: () => null,
  [removeContactsError]: (_, { payload }) => payload,
  [removeContactsRequest]: () => null,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
