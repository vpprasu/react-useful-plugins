import {LIST_USER_VAZHIPPAD} from '../actions/types.js';
const initialState = {
    listUserVazhippad : [] 
}

export default function userVazhippad(state = initialState, actions){
    switch(actions.type){
        case LIST_USER_VAZHIPPAD:
            return {
                ...state,
                listUserVazhippad : actions.payload
            }
        default:
            return state;
    }
}