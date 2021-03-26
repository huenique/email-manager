import axios from 'axios'
import { createMessage, returnErrors } from './messages'
import { tokenConfig } from './auth'

import { GET_EMAILS, DELETE_EMAIL, ADD_EMAIL } from './types'

// GET EMAILS
export const getEmails = () => (dispatch, getState) => {
  axios.get('/api/emails/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_EMAILS,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}

// DELETE EMAIL
export const deleteEmail = id => (dispatch, getState) => {
  axios.delete(`/api/emails/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteEmail: 'Email deleted!' }))
      dispatch({
        type: DELETE_EMAIL,
        payload: id
      })
    }).catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    })
}

// ADD EMAIL
export const addEmail = email => (dispatch, getState) => {
  axios.post("/api/emails/", email, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addEmail: 'Email added!' }))
      dispatch({
        type: ADD_EMAIL,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    )
}