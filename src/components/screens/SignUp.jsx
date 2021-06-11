import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import userServices from "../../services/UserService";
import { toast } from "react-toastify";
toast.configure();

export default function Register() {
  const [email, setEmail] = React.useState();
  const [organization_name, setOrganizationName] = useState();
  const [password, setPassword] = useState();
  const [ntn, setNTN] = useState(0);
  const [contact, setContact] = useState();
  const [address, setAddress] = useState("");
  const [emailErr, setEmailError] = useState("");
  const [contactErr, setContErr] = useState();
  const [cnicError, setError] = useState();
  const [sub, setSub] = useState(false);
  const [ntnErr, setntnError] = useState("");
  const [AddErr, setAddErr] = useState("");
  const [orgErr, setOrgError] = useState();

  const validateCNIC = (value) => {
    var cnic_no = value;
    var cnic_no_regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;

    if (cnic_no_regex.test(cnic_no)) {
      setError("");
    } else if (ntn === 0) {
      setError("This field is required");
    } else {
      setError("Please enter ntn in correct format");
      setSub(true);
    }
    if (address === "") {
      setAddErr("This field is required");
    } else {
      setAddErr("");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 mt-4">
          <h4>Sign Up</h4>
          <p>
            <i className="fas fa-user">Create your account</i>
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="organization_name">Organization Name</label>
              <input
                id="organization_name"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setOrganizationName(e.target.value);
                }}
              />
            </div>
            {orgErr && <p style={{ color: "red" }}>{orgErr}</p>}

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <span>
              {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
            </span>
            <div className="form-group">
              <label htmlFor="ntn">NTN</label>
              <input
                id="ntn"
                type="text"
                placeholder="ex xxxxx-xxxxxxx-x"
                className="form-control"
                onChange={(e) => {
                  setNTN(e.target.value);
                }}
              />
            </div>
            <span>
              {cnicError && <p style={{ color: "red" }}>{cnicError}</p>}

              {ntnErr && <p style={{ color: "red" }}>{ntnErr}</p>}
            </span>
            <div className="form-group">
              <label htmlFor="contact">Contact No</label>
              <input
                id="contact"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            {contactErr && <p style={{ color: "red" }}>{contactErr}</p>}

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                className="form-control"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <span>{AddErr && <p style={{ color: "red" }}>{AddErr}</p>}</span>

            <Button
              id="btns"
              onClick={(e) => {
                validateCNIC(ntn);
                {
                  sub &&
                    userServices
                      .register(
                        organization_name,
                        password,
                        email,
                        ntn,
                        contact,
                        address
                      )
                      .then()

                      .catch((err) => {
                        if (!err.response.data.email) {
                          setEmailError("");
                        }
                        if (!err.response.data.organization_name) {
                          setOrgError("");
                        }
                        if (!err.response.data.contact) {
                          setContErr("");
                        }
                        if (!err.response.data.ntn) {
                          setntnError("");
                        }
                      });
                }
                {
                  !sub &&
                    userServices
                      .register(
                        organization_name,
                        password,
                        email,
                        ntn,
                        contact,
                        address
                      )
                      .then((data) => {
                        //console.log("data", data);
                        window.location.href = "/msg";
                      })

                      .catch((err) => {
                        if (err.response.data.email) {
                          setEmailError(err.response.data.email);
                        } else {
                          setEmailError("");
                        }
                        if (err.response.data.organization_name) {
                          setOrgError(err.response.data.organization_name);
                        } else {
                          setOrgError("");
                        }
                        if (err.response.data.ntn) {
                          setntnError(err.response.data.ntn);
                        } else {
                          setntnError("");
                        }
                        if (err.response.data.contact) {
                          setContErr(err.response.data.contact);
                        } else {
                          setContErr("");
                        }
                      });
                }
              }}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
