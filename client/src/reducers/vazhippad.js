import { LIST_VAZHIPPAD } from '../actions/types.js';
const initialState = {
    listVazhippad : [] 
}

export default function vazhippad(state = initialState, actions){
    switch(actions.type){
        case LIST_VAZHIPPAD:
            return {
                ...state,
                listVazhippad : actions.payload
            }
        default:
            return state;
    }
}