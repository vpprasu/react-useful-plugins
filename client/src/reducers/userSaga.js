import * as Types from '../actions/types.js'

const initialState = {
    user : []
}

export default function (state = initialState, actions){
    switch (actions.type) {
        case Types.SET_USER:
            return {
                ...state,
                user : [...actions.payload]
            }
        default:
            return state;
    }
}