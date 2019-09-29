import {DELETE_CONTACT} from "../actions/types";

let initialState = [
    {id: 1, name: 'Max Makintosh', email: 'makintosh_kg@ukr.net', phone: '+38(098) 444 44 44'},
    {id: 2, name: 'Vlad Sherbyna', email: 'Sherbyna@ukr.net', phone: '+38(098) 444 44 22'},
    {id: 3, name: 'Ilya Rybachuk', email: 'Rybachuk@ukr.net', phone: '+38(098) 444 44 11'}
];

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_CONTACT:
            debugger
            return state.filter(i => i.id !== action.id);
        default:
            return state
    }
};

export default contactReducer;