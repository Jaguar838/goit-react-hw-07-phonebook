/* eslint-disable import/no-anonymous-default-export */
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
        const response = await API.getContacts();
        dispatch(fetchContactsSuccess(response));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
};

const addContact = contact => async dispatch => {
    console.log(contact);

    dispatch(addContactRequest());
    try {
        const response = await API.addContact(contact);
        dispatch(addContactSuccess(response));
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
