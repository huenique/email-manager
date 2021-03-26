import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'
import { createMessage } from '../../actions/messages'

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfrm: ''
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  onSubmit = e => {
    e.preventDefault()
    const { username, email, password, passwordConfrm } = this.state
    if (password !== passwordConfrm) {
      this.props.createMessage({ passwordsNotMatch: 'Passwords do not match!' })
    } else {
      const newUser = {
        username,
        password,
        email
      }
      console.log(newUser)
      this.props.register(newUser)
    }
  }


  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    const { username, email, password, passwordConfrm } = this.state

    return (
      <div>
        <div className="card mt-4">
          <div className="card-header">
            <h2>Register</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="username"
                  name="username"
                  className="form-control"
                  id="username"
                  onChange={this.onChange}
                  value={username} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  onChange={this.onChange}
                  value={email} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onChange={this.onChange}
                  value={password} />
                <div id="passwordHelpBlock" className="form-text">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="passwordConfrm" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="passwordConfrm"
                  className="form-control"
                  id="passwordConfrm"
                  onChange={this.onChange}
                  value={passwordConfrm} />
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
              <p className="mt-2">Already have an account?<Link className="ml-2" to="/login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, createMessage })(Register)
