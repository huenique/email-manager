import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addEmail } from '../../actions/emails'

export class Form extends Component {
  state = {
    name: '',
    email: ''
  }

  static propTypes = {
    addEmail: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  onSubmit = e => {
    e.preventDefault()
    const { name, email } = this.state;
    const new_email = { name, email }
    this.props.addEmail(new_email)
    this.setState({
      name: '',
      email: ''
    })
  }

  render() {
    const { name, email } = this.state
    return (
      <div>
        <h2 className="mt-4">Add Email</h2>
        <div className="card card-body mb-4">
          <form onSubmit={this.onSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={this.onChange}
                value={email} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={this.onChange}
                value={name} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { addEmail })(Form)
