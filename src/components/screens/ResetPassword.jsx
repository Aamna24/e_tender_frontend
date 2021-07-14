import React, { useState } from 'react'
import * as auth from '../../services/authServices'
import { Form, Modal, Button } from 'react-bootstrap'

const ResetPassword = ({ match }) => {
  const uidb64 = match.params.uidb64
  const token = match.params.token
  const [fields, showFields] = useState()
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)


  const handleClose = () => setShow(false);

  const check = async () => {
    const res = await auth.PasswordTokenCheckAPI(uidb64, token)
    if (res.status === 200) {
      showFields(true)
    }
  }
  check()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await auth.ResetPassword(uidb64, token, password)
    if (res.status === 200) {
      setShow(true)
    }
  }
  return (

    <div className="container">
      {fields && (
        <>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <button type="submit">Reset Password</button>

          </Form>
        </>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Password Reset Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click to Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            window.location.href = "/login"
          }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ResetPassword
