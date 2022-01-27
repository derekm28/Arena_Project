import * as types from './constants/index';
import questions from 'data/questions';

const initialState = {
    questions: questions
}

export default function(state = initialState, action){
    switch(action.type){
        default:
            return state;
    }
}