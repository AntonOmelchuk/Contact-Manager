import {ADD_CONTACT, DELETE_CONTACT, GET_ITEMS} from "./types";

export const deleteContact = id => ({type: DELETE_CONTACT, payload: id});
export const addContact = contact => ({type: ADD_CONTACT, payload: contact});
export const getContacts = () => ({type: GET_ITEMS});


