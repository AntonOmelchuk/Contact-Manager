import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import down from '../assets/arrow-down.png';
import up from '../assets/arrow-up.png';
import del from '../assets/cross.png';

const Contact = ({id, name, email, phone, deleteItem}) => {

    const [isOpen, setIsOpen] = useState('false');

    const deleteContact = (id) => {
        deleteItem(id);
    };

    return (
        <ListGroup key={id} className='mt-4'>
            <ListGroupItem>
                    <div className='name'>
                        {name}<img className='arrow-icon' alt='arrow-icon' src={isOpen? down : up} onClick={() => setIsOpen(!isOpen)} />
                        <img src={del} alt='delete-icon' className='delete-icon' onClick={() => deleteContact(id)} />
                </div>
            </ListGroupItem>
            {isOpen ? null :
                <>
                    <ListGroupItem><i className="fas fa-envelope" /><span className='contact-item'>{email}</span></ListGroupItem>
                    <ListGroupItem><i className="fas fa-mobile-alt" /><span className='contact-item'>{phone}</span></ListGroupItem>
                </>}
        </ListGroup>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default Contact;
