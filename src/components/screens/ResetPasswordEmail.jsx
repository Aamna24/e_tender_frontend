import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

import * as auth from '../../services/authServices'

const ResetPasswordEmail = () => {

  const [email, setEmail] = useState('')
  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await auth.RequestResetEmail(email)
    if (res.status === 200) {
      setShow(true)
    }

  }
  return (
    <div className="container " style={{ marginBottom: "115px", marginTop: "110px" }}>
      <h2 >Forgot Your Password?</h2>
      <p>Dont worry! Just fill in Your email and we will send you a link to reset your password.</p>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

        </Form.Group>
        <button id="btns" type="submit" className='mt-3 '>Reset Password</button>

      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>Password Reset email has been sent!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default ResetPasswordEmail
