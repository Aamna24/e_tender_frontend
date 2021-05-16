import React from "react";
import Form from "../../common/form";
import { Row, Container, Col } from "react-bootstrap";
import { Map, GoogleApiWrapper } from "google-maps-react";

class ContactUs extends Form {
  render() {
    return (
      <Container>
        <h3 className="text-center mb-5 mt-5">Contact </h3>
        <Row>
          <Col md={6}>
            <Col className="row mr-2">
              <div className="col-md-6">{this.renderInput("name", "Name")}</div>
              <div className="col-md-6 ">
                {this.renderInput("email", "Email")}
              </div>
            </Col>
            <Row>
              <Col md={12}>{this.renderInput("subject", "Subject")}</Col>
            </Row>
            <Row>
              <Col>{this.renderTextField("message", "Message")}</Col>
            </Row>
            <Row>
              <div className="col text-center">
                {this.renderButton("Submit")}
              </div>
            </Row>
          </Col>
          <Col md={6}>
            <Map google={this.props.google} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB__-V7e-byQzDIhT-Zbl0iSg2St6hP8ZA",
})(ContactUs);
