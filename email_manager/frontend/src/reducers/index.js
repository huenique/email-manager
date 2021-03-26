import { combineReducers } from 'redux'
import emails from './emails'
import errors from './errors'
import messages from './messages'
import auth from './auth'

export default combineReducers({
  emails,
  errors,
  messages,
  auth
})