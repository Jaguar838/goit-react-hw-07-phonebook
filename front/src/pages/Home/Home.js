import React from 'react';

import { useSelector } from 'react-redux';
import contactsSelectors from 'redux/selectors';

import { Layout } from 'UI/Layout';
import { SectionWrap } from 'UI/SectionWrap';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const Home = () => {
    const isPhonebook = useSelector(contactsSelectors.get_isPhonebook);

    return (
        <Layout>
            <SectionWrap title="Phonebook">
                <ContactForm />
            </SectionWrap>

            <SectionWrap title="Contact List">
                {!isPhonebook ? (
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
