import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:7777';
axios.defaults.baseURL = 'http://localhost:7777';

export async function getContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function addContact(contact) {
    const { data } = await axios.post('/contacts', contact);

    console.log(contact);
    return data;
}

export async function deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
    return id;
}
console.log(getContacts());
