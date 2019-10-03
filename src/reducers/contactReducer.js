import {ADD_CONTACT, DELETE_CONTACT, GET_ITEMS} from "../actions/types";
import * as uuid from "uuid";

let initialState = {
    contacts:[
        {id: uuid(), name: 'Max Makintosh', email: 'makintosh_kg@ukr.net', phone: '+3(098)111 11 11'}
    ]
};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
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