import React from 'react';
import css from './Input.module.css';

const Input = props => {
    return <input className={css.input} {...props} type="text" />;
};

export default Input;
