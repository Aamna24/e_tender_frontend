import React ,{useState}from 'react'
import {Form, Modal, Button} from 'react-bootstrap'

import * as auth from '../../services/authServices'
import Alert from 'react-popup-alert'

const ResetPasswordEmail = () => {

    const [email,setEmail] = useState('')
    const [show, setShow] = useState(false)
    

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res = await auth.RequestResetEmail(email)
        if(res.status===200){
            setShow(true)
        }

    }
    return (
        <div className="container">
            <h3>Forgot Your password?</h3>
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
        <button type="submit">Reset Password</button>

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
