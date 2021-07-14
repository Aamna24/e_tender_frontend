import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';

export default class ContactUs extends Component {


  render() {
    return (
      <div className="container">
        <h2 className="my-3 text-center">GET IN TOUCH</h2>
        <div className="row" style={{ margin: "50px" }}>
          <div className="col-4">
            <div className="container1">

              <div classname="row">
                <div>
                  <RoomIcon style={{ color: "white", width: "80px", height: "70px", marginLeft: "58px", marginTop: "30px" }} />
                </div>


                <div className="text-center mt-2">
                  <p style={{ color: 'white', fontWeight: 'bold' }}  >OUR MAIN OFFICE</p>
                </div>


                <div className="text-center">
                  <p style={{ color: "white" }}>123 johar town</p>
                </div>



              </div>


            </div>
          </div>

          <div className="col-4">
            <div className="container1">

              <div classname="row">
                <div>
                  <PhoneIcon style={{ color: "white", width: "80px", height: "70px", marginLeft: "58px", marginTop: "30px" }} />
                </div>


                <div className="text-center mt-2">
                  <p style={{ color: 'white', fontWeight: 'bold' }}  >PHONE NUMBER</p>
                </div>


                <div className="text-center">
                  <p style={{ color: "white" }}>(+92)324-4566316</p>
                </div>



              </div>


            </div>
          </div>

          <div className="col-4">
            <div className="container1">

              <div classname="row">
                <div>
                  <EmailIcon style={{ color: "white", width: "80px", height: "70px", marginLeft: "58px", marginTop: "30px" }} />
                </div>


                <div className="text-center mt-2">
                  <p style={{ color: 'white', fontWeight: 'bold' }}  >EMAIL</p>
                </div>


                <div className="text-center">
                  <p style={{ color: "white" }}>maamna24@gmail.com</p>
                </div>



              </div>


            </div>
          </div>





        </div>





      </div>
    );

  }

}

