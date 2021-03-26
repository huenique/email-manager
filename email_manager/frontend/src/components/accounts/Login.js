import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

export class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.login(this.state.username, this.state.password)
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

    const { username, password } = this.state

    return (
      <div>
        <div className="card mt-4">
          <div className="card-header">
            <h2>Login</h2>
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
                  defaultValue={username} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="inputPassword5"
                  className="form-control"
                  onChange={this.onChange}
                  defaultValue={password} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
              <p className="mt-2">Don't have an account?<Link className="ml-2" to="/register">Register</Link></p>
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

export default connect(mapStateToProps, { login })(Login)
