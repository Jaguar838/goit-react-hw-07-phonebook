import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import contactsOperations from 'redux/operations';
import contactsSelectors from 'redux/selectors';
import { Button } from 'UI/Button';

import css from './ContactList.module.css';

const ContactListItem = ({ name, phone, onRemove }) => {
    return (
        <li className={css.item}>
            <span className={css.span}>
                {name}:{phone}
            </span>
            <Button className="btn" onClick={onRemove}>
                Delete
            </Button>
        </li>
    );
};

export const ContactList = () => {
    const VisibleContacts = useSelector(contactsSelectors.getVisibleContacts);
    const isLoading = useSelector(contactsSelectors.get_isLoading);
    const dispatch = useDispatch();

    const onRemove = id => {
        if (isLoading) return;

        dispatch(contactsOperations.deleteContact(id));
    };
    return (
        <ul className={css.contacts}>
            {VisibleContacts?.map(({ id, name, phone }) => (
                <ContactListItem
                    key={id}
                    name={name}
                    phone={phone}
                    onRemove={() => onRemove(id)}
                />
            ))}
        </ul>
    );
};

export default ContactList;
