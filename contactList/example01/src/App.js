import React, { Fragment, useState, useEffect } from 'react';
import {Routes ,Route} from 'react-router-dom';
import { uuid } from "uuidv4";
import api from './api/Contacts';
import './App.css';
import Header from './component/header/Header';
import ContactList from './component/contact/ContactList';
import AddContact from './component/contact/AddContact';
import ContactDetail from './component/contact/ContactDetail';
import EditContact from './component/contact/EditContact';
// import PersonList from './component/PersonList';
// import PersonInput from './component/PersonInput';

function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const addContactHandler = async (contact) =>{
    const request ={
      id : uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) =>{
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const {id, name, email } = response.data;
    setContacts(contacts.map((contact) =>{
      return contact.id === id ? {...response.data} : contact;
    }));
  };

  return (
    <Fragment>
      {/* <PersonList />
      <PersonInput /> */}
      <Header />
      <Routes>
        <Route path='/' element={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )} />
        <Route path='/add' element={(props) =>{
          <AddContact {...props} addContactHandler={addContactHandler} />
        }} />
        <Route path='/edit' element={(props) =>{
          <EditContact {...props} updateContactHandler={updateContactHandler} />
        }} />
        <Route path='/Contact/:id' component={<ContactDetail />} />
      </Routes>
    </Fragment>
  );
}

export default App;
