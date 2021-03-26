import { GET_EMAILS, DELETE_EMAIL, ADD_EMAIL, LOGIN_SUCCESS } from '../actions/types.js'

const initialState = {
  emails: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EMAILS:
      return {
        ...state,
        emails: action.payload
      }
    case DELETE_EMAIL:
      return {
        ...state,
        emails: state.emails.filter(lead => lead.id !== action.payload)
      }
    case ADD_EMAIL:
      return {
        ...state,
        emails: [...state.emails, action.payload]
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        emails: []
      }
    default:
      return state
  }
}