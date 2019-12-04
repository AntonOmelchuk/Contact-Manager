import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Form} from 'react-bootstrap';
import {getContact, updateContact} from '../actions/contactActions';
import {withRouter} from 'react-router-dom';

class EditContact extends Component {
  state = {
      name: '',
      email: '',
      phone: ''
  };

  componentWillReceiveProps(nextProps, nextState) {
      const {name, email, phone} = nextProps.contact;
      this.setState({
          name,
          email,
          phone
      });
  }

  componentDidMount() {
      const {id} = this.props.match.params;
      this.props.getContact(id);
  }

  onSubmit = e => {
      e.preventDefault();

      const {name, email, phone} = this.state;

      const {id} = this.props.match.params;

      const updatedContact = {
          id,
          name,
          email,
          phone
      };
      this.props.updateContact(updatedContact);

      this.setState({
          name: '',
          email: '',
          phone: ''
      });

      this.props.history.push('/');
  };

  onChange = e =>
      this.setState({[e.currentTarget.name]: e.currentTarget.value});

  render() {
      const {name, email, phone} = this.state;

      return (
        <>
          <h4>Edit contact</h4>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.onChange}
                    placeholder='Enter name...'
                    required
                />
                <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type='email'
                    name='email'
                    value={email}
                    onChange={this.onChange}
                    placeholder='Enter email...'
                />
                <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={this.onChange}
                    placeholder='Enter phone...'
                    required
                />
                <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
            <Button variant='primary' type='submit'>
            Update contact
            </Button>
        </Form>
      </>
      );
  }
}

EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contact: state.contacts.contact
});

const EditContactWithRouter = withRouter(EditContact);

export default connect(mapStateToProps, {getContact, updateContact})(
    EditContactWithRouter
);
