import React, { useEffect } from 'react';
import contactsOperations from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import contactsSelectors from 'redux/selectors';

import { Layout, SectionWrap, LoaderUI } from 'UI';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import toast from 'react-hot-toast';

export const Home = () => {
    const isPhonebook = useSelector(contactsSelectors.get_isPhonebook);
    const isLoading = useSelector(contactsSelectors.get_isLoading);
    const error = useSelector(contactsSelectors.getError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    useEffect(() => {
        if (!error) return;
        toast.error('Network Error');
    }, [error]);

    return (
        <Layout>
            <SectionWrap title="Phonebook">
                <ContactForm />
            </SectionWrap>

            <SectionWrap title="Contact List">
                {isLoading && <LoaderUI />}
                {isPhonebook ? (
                    <>
                        <Filter />
                        <ContactList />
                    </>
                ) : (
                    <p>Phonebook is empty</p>
                )}
            </SectionWrap>
        </Layout>
    );
};
