import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from "../actions/types";

let initialState = {
    contacts:[],
    contact: {}
};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => contact.id === action.payload.id ?
                    contact = action.payload : contact)
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(i => i.id !== action.payload)
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        default:
            return state
    }
};

export default contactReducer;