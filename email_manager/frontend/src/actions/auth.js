import axios from 'axios'
import { returnErrors } from './messages'
import { USER_LOADING, AUTH_ERROR, USER_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types'

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User loading
  // Change isLoading value to true before making a request
  dispatch({ type: USER_LOADING })

  // Get token from state
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Add token to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  axios.get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: AUTH_ERROR })
    })
}

// lOGIN USER
export const login = (username, password) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Request Body
  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: LOGIN_FAIL })
    })
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Add token to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  axios
    .post('/api/auth/logout/', null, config)
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
    })
}


// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Request Body
  const body = JSON.stringify({ username, password, email })

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({ type: REGISTER_FAIL })
    })
}

// Setup conf with token
export const tokenConfig = getState => {
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
}