import React, {useEffect} from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import {deleteContact, getContacts} from '../actions/contactActions';

const Contacts = ({deleteContact, getContacts, contacts}) => {
    useEffect(() => {
        getContacts();
    }, [getContacts]);

    return (
        <>
            <h1>Contact List</h1>
            {contacts.length
                ? contacts.map(c => (
                    <Contact
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        email={c.email}
                        phone={c.phone}
                        deleteItem={deleteContact}
                    />
                ))
                : 'No contacts, add one'}
        </>
    );
};

const mapStateToProps = state => ({
    contacts: state.contacts.contacts
});

export default connect(mapStateToProps, {deleteContact, getContacts})(
    Contacts
);
