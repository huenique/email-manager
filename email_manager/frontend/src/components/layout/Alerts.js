import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props
    if (error !== prevProps.error) {
      if (error.msg.name)
        alert.error(`Name: ${error.msg.name.join()}`)
      if (error.msg.email)
        alert.error(`Email Address: ${error.msg.email.join()}`)
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`)
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join())
      if (error.msg.username)
        alert.error(error.msg.username.join())
    }
    if (message !== prevProps.message) {
      if (message.deleteEmail)
        alert.success(message.deleteEmail)
      if (message.addEmail)
        alert.success(message.addEmail)
      if (message.passwordsNotMatch)
        alert.error(message.passwordsNotMatch)
    }
  }

  render() {
    return <Fragment />
  }
}

const mapSateToProps = state => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapSateToProps)(withAlert()(Alerts))
