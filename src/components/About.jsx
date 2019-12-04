import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const About = () => (
    <>
        <h2>Contact Manager App</h2>
        <p>Version 1.0.0</p>
        <h3>Used technologies</h3>
        <ListGroup>
            <ListGroupItem>React</ListGroupItem>
            <ListGroupItem>Redux</ListGroupItem>
            <ListGroupItem>React-Bootstrap</ListGroupItem>
        </ListGroup>
    </>
);

export default About;
