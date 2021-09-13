import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import contactsReducer from './reducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ serializableCheck: false }).concat(logger),

    devTools: process.env.NODE_ENV === 'development',
});

export default store;
