import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addContact} from "../actions/contactActions";
import {Redirect} from "react-router-dom";

const AddForm = ({addContact}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isSend, setIsSend] = useState(false);

    const addNewContact = (e) => {
        e.preventDefault();
        const newContact = {
            name: name,
            email: email,
            phone: phone
        };
        addContact(newContact);
        setName('');
        setEmail('');
        setPhone('');
        setIsSend(true);
    };

    return (
        <>
            {isSend ? <Redirect to={'/'} /> : <>
            <h4>Add new contact</h4>
            <Form onSubmit={addNewContact}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.currentTarget.value)}
                                  type="text" placeholder="Enter name..." required />
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
                                  placeholder="Enter phone..." required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add to contacts
                </Button>
            </Form>
                </>}
        </>
    )
};


export default connect(null, {addContact})(AddForm);