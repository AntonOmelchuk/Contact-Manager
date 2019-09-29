import React from 'react';
import Contact from "./Contact";
import {connect} from "react-redux";
import {deleteContact} from "../actions/contactActions";

const Contacts = ({contacts, deleteContact}) => {

    return (
        <>
        {contacts.map(c => {
            return <Contact key={c.id} id={c.id} name={c.name} email={c.email} phone={c.phone} deleteItem={deleteContact} />
        })}
        </>
    )
};

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
};

export default connect(mapStateToProps, {deleteContact})(Contacts);