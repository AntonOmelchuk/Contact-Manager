import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addContact} from "../actions/contactActions";
import uuid from 'uuid';

const AddForm = ({addContact}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const addNewContact = (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            phone,
            id: uuid()
        };
        console.log(newContact);
        addContact(newContact);
    };

    return (
        <>
            <h4>Add new contact</h4>
            <Form onSubmit={addNewContact}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.currentTarget.value)}
                                  type="text" placeholder="Enter name..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}
                                  placeholder="Enter email..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.currentTarget.value)}
                                  placeholder="Enter phone..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add to contacts
                </Button>
            </Form>
        </>
    )
};

export default connect(null, {addContact})(AddForm);