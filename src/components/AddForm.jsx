import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {connect} from "react-redux";
import {addContact} from "../actions/contactActions";
import {Redirect} from "react-router-dom";

const AddForm = ({addContact}) => {

    const initState = {
        name: '',
        email: '',
        phone: ''
    };

    const [state, setState] = useState(initState);
    const [isSend, setIsSend] = useState(false);

    const onChange = e => {
        setState({...state,
            [e.currentTarget.name]: e.currentTarget.value}
            )
    };

    const addNewContact = (e) => {
        e.preventDefault();

        const {name, email, phone} = state;

        const newContact = {
            name,
            email,
            phone
        };
        addContact(newContact);
        setState([]);
        setIsSend(true);
    };

    const {name, email, phone} = state;

    return (
        <>
            {isSend ? <Redirect to={'/'} /> : <>
            <h4>Add new contact</h4>
            <Form onSubmit={addNewContact}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} name='name' onChange={onChange}
                                  placeholder="Enter name..." required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' value={email} onChange={onChange}
                                  placeholder="Enter email..." />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name='phone' value={phone} onChange={onChange}
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