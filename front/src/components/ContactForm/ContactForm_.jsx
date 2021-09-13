import React, { useState } from 'react';
import { Button } from 'UI/Button';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

export function ContactForm({ onAdd, onCheckUnique }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    };

    function validateForm() {
        if (!name || !phone) {
            alert('Some field is empty');
            return false;
        }
        return onCheckUnique(name);
    }
    const onSubmit = data => {
        // const { name, phone } = data;
        const isValidateForm = validateForm();
        if (!isValidateForm) return;
        onAdd({ id: uuid(), name, phone });
        resetForm();
        console.log('Submit', data, errors);
    };

    const resetForm = () => {
        setName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                className={css.input}
                type="text"
                // name="name"
                placeholder="Enter name"
                {...register('name', {
                    required: true,
                    pattern:
                        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
                })}
                value={name}
                required
                onChange={handleChangeForm}
            />
            {errors.name && alert('Name is required.')}

            <input
                className={css.input}
                type="tel"
                // name="phone"
                placeholder="Enter phone number"
                {...register('phone', {
                    required: true,
                    pattern:
                        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
                })}
                value={phone}
                required
                onChange={handleChangeForm}
            />
            {errors.phone && alert('Please enter number for phone.')}

            <Button type="submit">Add Contact</Button>
        </form>
    );
}

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onCheckUnique: PropTypes.func.isRequired,
};
