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
} from './actions';

import * as API from '../API/API';

export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const { data } = await API.getContacts();
        dispatch(fetchContactsSuccess(data));
    } catch (error) {
        dispatch(fetchContactsError(error.message));
    }
};

export const addContact = (name, number) => async dispatch => {
    const contact = { name, number };

    console.log(contact);

    dispatch(addContactRequest());
    try {
        const { data } = await API.addContact(contact);
        dispatch(addContactSuccess(data));
    } catch (error) {
        dispatch(addContactError(error));
    }
};

export const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        await API.deleteContact(id);
        dispatch(deleteContactSuccess(id));
    } catch (error) {
        dispatch(deleteContactError(error));
    }
};
