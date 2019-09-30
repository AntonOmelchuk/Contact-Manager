import {ADD_CONTACT, DELETE_CONTACT} from "../actions/types";
import uuid from 'uuid';

let initialState = [
    {id: uuid(), name: 'Max Makintosh', email: 'makintosh_kg@ukr.net', phone: '+38(098) 444 44 44'},
    {id: uuid(), name: 'Vlad Sherbyna', email: 'Sherbyna@ukr.net', phone: '+38(098) 444 44 22'},
    {id: uuid(), name: 'Ilya Rybachuk', email: 'Rybachuk@ukr.net', phone: '+38(098) 444 44 11'}
];

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_CONTACT:
            return state.filter(i => i.id !== action.id);
        case ADD_CONTACT:
            return [...state, action.contact];
        default:
            return state
    }
};

export default contactReducer;