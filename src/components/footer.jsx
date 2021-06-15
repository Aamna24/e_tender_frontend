import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CategoryIcon from "@material-ui/icons/Category";
const Footer = () => {
  return (
    <MDBFooter
      className="font-small pt-4 mt-4 "
      style={{ backgroundColor: "#00164c" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">E-Tender</h5>
            <p>About e-tender.</p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">
              <PublicIcon />
              Regions
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Punjab</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Sindh</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">KPK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Balochistan</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">
              <CategoryIcon />
              Popular Sectors
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Construction Tenders</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Medical Tenders</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Electrical Tenders</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">IT Tenders</a>
              </li>
              <li className="list-unstyled">Telecom tenders</li>
              <li className="list-unstyled">Oil and Gas Tenders</li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">
              <ExitToAppIcon />
              Useful Links
            </h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FAQ</a>
              </li>
              <li className="list-unstyled">
                <NavLink to="/terms">Terms and Conditions</NavLink>
              </li>
              <li className="list-unstyled">
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://etenders.herokuapp.com"> etender.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
