import {ADD_CONTACT, DELETE_CONTACT} from "./types";

export const deleteContact = id => ({type: DELETE_CONTACT, id});
export const addContact = contact => ({type: ADD_CONTACT, contact});
