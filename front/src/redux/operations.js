import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    // changeFilter,
    // clearError,
} from './actions';

import * as API from '../API/API';
// import { createAction } from '@reduxjs/toolkit';

const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await API.getContacts();
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
};

const addContact = contact => async dispatch => {
    console.log(contact);

    dispatch(addContactRequest());
    try {
        const { data } = await API.addContact(contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        await API.deleteContact(id);
        dispatch(deleteContactSuccess(id));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};

// const changeFilter = createAction('contacts/changeFilter');

export default {
    fetchContacts,
    addContact,
    deleteContact,
};
