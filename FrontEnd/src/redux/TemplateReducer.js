import * as types from './constants/index';

const initialState = {
    showText: false
}

export default function(state = initialState, action){
    switch(action.type){
        case types.SHOW_TEXT_BUTTON_CLICKED:
            return {
                ...state,
                showText: !state.showText
            }
        default:
            return state;
    }
}