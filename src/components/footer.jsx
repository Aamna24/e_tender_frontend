import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { NavLink } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CategoryIcon from "@material-ui/icons/Category";
const Footer = () => {
  return (
      <>
      {localStorage.getItem('organization')!=='admin' && (
        <MDBFooter
        className="font-small pt-4"
        style={{ backgroundColor: "#00164c" }}
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="3">
              <h5 className="title">E-Tender</h5>
              <p>E-tender is a Tender Portal which provides Tender and Tender Result Information. 
                The portal provides a platform for finding Tenders and also provides bid placing and 
                other relevant services to help contractors in winning tenders.</p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">
                <PublicIcon />
                Regions
              </h5>
              <ul>
                <li className="list-unstyled">
                  Punjab
                </li>
                <li className="list-unstyled">
                  Sindh
                </li>
                <li className="list-unstyled">
                  KPK
                </li>
                <li className="list-unstyled">
                  Balochistan
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
                  <a href="/category/Construction">Construction Tenders</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category/Medical">Medical Tenders</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category/Electrical">Electrical Tenders</a>
                </li>
                <li className="list-unstyled">
                  <a href="/category/IT">IT Tenders</a>
                </li>
                <li className="list-unstyled">
                <a href="/category/Telecom">Telecommunication Tenders</a>

                </li>
                <li className="list-unstyled">
                <a href="/category/Oil and Gas">Oil and Gas</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">
                <ExitToAppIcon />
                Useful Links
              </h5>
              <ul>
                <li className="list-unstyled">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="list-unstyled">
                  <a href="/faq">FAQ</a>
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
            <a href="https://etenders.herokuapp.com"> etender.com </a> All Rights Reserved
          </MDBContainer>
        </div>
      </MDBFooter>
      )}
      </>
  );
};

export default Footer;
