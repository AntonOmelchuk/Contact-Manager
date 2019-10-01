import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='header mb-3'>
            <Navbar.Brand>Contact Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link><NavLink to="/"><i className="fas fa-home" /><span className='header-link'>Home</span></NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/contacts/add"><i className="fas fa-user-plus" /><span className='header-link'>Add</span></NavLink></Nav.Link>
                    <Nav.Link><NavLink to="/about"><i className="fas fa-question" /><span className='header-link'>About</span></NavLink></Nav.Link>
                    <NavDropdown title="Contacts" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">+38(098) 920 18 55</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
};

export default Header;