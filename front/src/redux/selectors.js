import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) =>
        contacts.filter(({ name }) => name.toLowerCase().includes(filter)),
);

const get_isPhonebook = state => state.contacts.items.length > 0;
const get_isLoading = state => state.contacts.loading;
const getError = state => state.contacts.error;

const contactsSelectors = {
    get_isPhonebook,
    get_isLoading,
    getAllContacts,
    getFilter,
    getError,
    getVisibleContacts,
};
export default contactsSelectors;
