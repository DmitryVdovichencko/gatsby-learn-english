import { CHANGE_TEXT_COMMENT } from './constants'

export const SetTextComment = (text) => ({
    type: CHANGE_TEXT_COMMENT,
    payload: text
})