import { CHANGE_TEXT_COMMENT } from './constants'

const initialState = {
    commentText: ''
}
export const createComment = (state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_TEXT_COMMENT:
            return {...state, commentText: action.payload}
        default:
            return state;
        }
}