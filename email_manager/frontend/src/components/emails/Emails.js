import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getEmails, deleteEmail } from '../../actions/emails'

export class Emails extends Component {
  static propTypes = {
    emails: PropTypes.array.isRequired,
    getEmails: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getEmails()
  }

  render() {
    return (
      <Fragment>
        <h2>Emails</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.emails.map(email => (
              <tr key={email.id}>
                <td>{email.id}</td>
                <td>{email.name}</td>
                <td>{email.email}</td>
                <td><button onClick={this.props.deleteEmail.bind(this, email.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

// Get state of email reducer (state.emails)
// Get initial state name (emails)
// hence state.emails.emails
const mapStateToProps = state => ({
  emails: state.emails.emails
})

export default connect(
  mapStateToProps, { getEmails, deleteEmail }
)(Emails)