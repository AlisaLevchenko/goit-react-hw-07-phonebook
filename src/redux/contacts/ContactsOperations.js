import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../api/Mockapi';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
} from './ContactsAction';

export const getContacts = () => dispatch => {
  dispatch(getContactsRequest());

  getContactsApi()
    .then(contact => dispatch(getContactsSuccess(contact)))
    .catch(err => dispatch(getContactsError(err.message)));
};

export const addContacts = item => dispatch => {
  dispatch(addContactsRequest());

  addContactsApi(item)
    .then(newContact => dispatch(addContactsSuccess(newContact)))
    .catch(err => dispatch(addContactsError(err.message)));
};

export const removeContacts = id => dispatch => {
  dispatch(removeContactsRequest());

  removeContactsApi(id)
    .then(id => dispatch(removeContactsSuccess(id)))
    .catch(err => dispatch(removeContactsError(err.message)));
};
