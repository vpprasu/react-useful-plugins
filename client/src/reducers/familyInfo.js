import {LIST_FAMILYINFO} from '../actions/types.js';
const initialState = {
    listFamilyInfo : [] 
}

export default function vazhippad(state = initialState, actions){
    switch(actions.type){
        case LIST_FAMILYINFO:
            return {
                ...state,
                listFamilyInfo : actions.payload
            }
        default:
            return state;
    }
}