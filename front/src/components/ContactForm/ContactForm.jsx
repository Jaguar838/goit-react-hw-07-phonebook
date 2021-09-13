import React, { useState } from 'react';
import { Button, Input } from 'UI';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';
// import { addContact, checkUnique } from 'redux/actions';

export function ContactForm() {
    // const dispatch = useDispatch();
    const [contact, setContact] = useState({ name: '', phone: '' });

    const onCheckUnique = name => {
        // const isExistContact = !!dispatch(checkUnique(name));
        // const isExistContact = !!dispatch(checkUnique(name));
        // isExistContact && toast('Contact is already exist');
        // return !isExistContact;
    };
    function validateForm() {
        if (!contact.name || !contact.phone) {
            toast('Some field is empty');
            return false;
        }
        // return onCheckUnique(contact.name);
    }
    const onSubmit = data => {
        const newContact = {
            ...contact,
            id: Date.now(),
        };
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        // dispatch(addContact(newContact));
        resetForm();
        console.log('Submit', newContact);
    };

    const resetForm = () => {
        setContact({ name: '', phone: '' });
    };
    return (
        <form onSubmit={onSubmit}>
            <Input
                value={contact.name}
                type="text"
                onChange={({ target }) =>
                    setContact({ ...contact, name: target.value })
                }
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов."
                // required
            />

            <Input
                name="name"
                value={contact.phone}
                type="tel"
                onChange={({ target }) =>
                    setContact({ ...contact, phone: target.value })
                }
                placeholder="Enter phone number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона может содержать пробелы, тире, круглые скобки и может начинаться с +"
                // required
            />

            <Button type="submit">Add Contact</Button>
        </form>
        // {errors.name && toast('Name is required.')}
        // {errors.phone && toast('Please enter number for phone.')}
    );
}
