// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import {
// getContactsRequest,
// getContactsSuccess,
// getContactsError,
// addContactsRequest,
// addContactsSuccess,
// addContactsError,
// removeContactsRequest,
// removeContactsSuccess,
// removeContactsError,
//   filterContacts,
// } from './ContactsAction';
// import { getContacts, addContacts, removeContacts } from './ContactsOperations';

// const isLoadingReducer = createReducer(false, {
// [getContacts.pending]: () => true,
// [getContacts.fulfilled]: () => false,
// [getContacts.rejected]: () => false,
// [addContacts.pending]: () => true,
// [addContacts.fulfilled]: () => false,
// [addContacts.rejected]: () => false,
// [removeContacts.pending]: () => true,
// [removeContacts.fulfilled]: () => false,
// [removeContacts.rejected]: () => false,
// });

// const itemsReducer = createReducer([], {
//   [getContacts.fulfilled]: (_, { payload }) => payload,
//   [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
//   [removeContacts.fulfilled]: (state, { payload }) =>
//     state.filter(el => el.id !== payload),
// });

// const errorReducer = createReducer(null, {
// [getContacts.rejected]: (_, { payload }) => payload,
// [getContacts.pending]: () => null,
// [addContacts.rejected]: (_, { payload }) => payload,
// [addContacts.pending]: () => null,
// [removeContacts.rejected]: (_, { payload }) => payload,
// [removeContacts.pending]: () => null,
// });

// const filterReducer = createReducer('', {
//   [filterContacts]: (_, { payload }) => payload,
// });

// export const contactsReducer = combineReducers({
// items: itemsReducer,
// filter: filterReducer,
// isLoading: isLoadingReducer,
// error: errorReducer,
// });
