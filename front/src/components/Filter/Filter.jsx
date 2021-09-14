import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';
import contactsSelectors from 'redux/selectors';
import css from './Filter.module.scss';

export const Filter = () => {
    const filter = useSelector(contactsSelectors.getFilter);
    const dispatch = useDispatch();
    return (
        <label className={css.label}>
            <span className={css.labelText}>Find contacts by name</span>
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={({ target }) => dispatch(changeFilter(target.value))}
                placeholder="Enter name for Search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={css.input}
            />
        </label>
    );
};
