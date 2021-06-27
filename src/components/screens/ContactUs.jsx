import React from "react";
import Form from "../../common/form";
import { Row, Container, Col } from "react-bootstrap";
import { Map, GoogleApiWrapper } from "google-maps-react";

class ContactUs extends Form {
  render() {
    return (
      <Container>
        <h2 className="text-center mb-5 mt-5">CONTACT US </h2>
        <Row className='mb-5'>
        <Col md={6}>
        <form  >
                <div className='form-group'>
              <label htmlFor="organization_name">Name</label>
              <input
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                
              />
              </div>

              <div className='form-group'>
              <label htmlFor="organization_name">Email</label>
              <input
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                
              />
              </div>
              <div className='form-group'>
              <label htmlFor="organization_name">Subject</label>
              <input
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                
              />
              </div>
              <div className='form-group'>
              <label htmlFor="organization_name">Message</label>
              <textarea
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                rows={10}
                
              />
              </div>
              <button id="btns">SEND MESSAGE</button>
              </form>
        </Col>
         
          <Col md={6}>
            <Map google={this.props.google} />
          </Col>
        </Row>
      </Container>
    );
  }
}

/*export default GoogleApiWrapper({
  apiKey: "AIzaSyB__-V7e-byQzDIhT-Zbl0iSg2St6hP8ZA",
})(ContactUs);*/

export default GoogleApiWrapper({
  apiKey: process.env.apiKey,
})(ContactUs);
