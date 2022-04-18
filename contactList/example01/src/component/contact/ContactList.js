import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deleteContactHeader = (id) =>{
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHeader={deleteContactHeader} key={contact.id} />
        );
    });

    return (
        <Fragment>
            <div className='main'>
                <h2>
                    Contant List
                </h2>
                <Link to="/add">
                    <button className='ui button blue right'>Add Contact</button>
                </Link>
                <div className='ui celled list'>
                    {renderContactList}
                </div>
            </div>
        </Fragment>
    );
}

export default ContactList;