import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/operations';
import contactsSelectors from 'redux/selectors';

import { Button, Input } from 'UI';
import toast, { Toaster } from 'react-hot-toast';

export function ContactForm() {
    const [contact, setContact] = useState({ name: '', phone: '' });

    const contacts = useSelector(contactsSelectors.getAllContacts);
    const dispatch = useDispatch();

    const pattern = {
        name: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        phone: '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$',
    };
    const title = {
        name: 'Имя может состоять только из букв, апострофа, тире и пробелов.',
        phone: 'Номер телефона может содержать пробелы, тире, круглые скобки и может начинаться с +',
    };

    const onCheckUnique = (allContacts, newName) => {
        const isExistContact = allContacts.some(
            contact => contact.name.toLowerCase() === newName.toLowerCase(),
        );
        isExistContact && toast.error(`"${newName}" is already exist`);
        return !isExistContact;
    };

    function validateForm() {
        if (!contact.name || !contact.phone) {
            toast.error('Some field is empty');
            return false;
        }
        return onCheckUnique(contacts, contact.name);
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const newContact = {
            id: Date.now(),
            ...contact,
        };
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        dispatch(contactsOperations.addContact(newContact));
        resetForm();
    };

    const resetForm = () => {
        setContact({ name: '', phone: '' });
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handleSubmit}>
                <Input
                    value={contact.name}
                    name="name"
                    type="text"
                    onChange={({ target }) =>
                        setContact({ ...contact, name: target.value })
                    }
                    placeholder="Enter name"
                    pattern={pattern.name}
                    title={title.name}
                    required
                />

                <Input
                    value={contact.phone}
                    name="phone"
                    type="tel"
                    onChange={({ target }) =>
                        setContact({ ...contact, phone: target.value })
                    }
                    placeholder="Enter phone number"
                    pattern={pattern.phone}
                    title={title.phone}
                    required
                />

                <Button type="submit">Add Contact</Button>
            </form>
        </>
    );
}
