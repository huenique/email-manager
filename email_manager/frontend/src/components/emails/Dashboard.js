import React, { Fragment } from 'react'
import Emails from './Emails'
import Form from './Form'

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Emails />
      </Fragment>
    </div>
  )
}
