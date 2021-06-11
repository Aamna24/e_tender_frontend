import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";
import moment from 'moment'

const PublishTender = () => {
  const user = auth.getCurrentUser();

  const [category, setCategory] = React.useState();
  const [title, setTitle] = React.useState();
  const [availibility, setAvailibility] = React.useState();
  const [region, setRegion] = React.useState();
  const [description, setDesc] = React.useState();
  const [contact, setContact] = React.useState();
  const [opening_date, setOpeningDate] = React.useState();
  const [last_date, setLastDate] = React.useState();
  const [file_uploaded, setFile] = React.useState();
  const [err, setErr] = useState("");
  const [dateErr, setDateErr] = useState('')

  const handleSubmit = async () => {
    var data = new FormData();
    data.append("organization_name", user);
    data.append("title", title);
    data.append("category", category);
    data.append("availibility", 'Active');
    data.append("region", region);
    data.append("description", description);
    data.append("contact", contact);
    data.append("opening_date", moment().format('LL'));
    data.append("last_date", last_date);
    data.append("file_uploaded", file_uploaded);
    data.append("email", localStorage.getItem("email"));
    data.append("assigned_to", "null");

    try {
      const response = await auth.publishTender(data);

      if (response.status === 201) {
        window.location.href = "/my-tenders";
      } else {
        setErr(response.data);
      }
    } catch (error) {
      if (error.response.data.contact) {
        setErr(error.response.data.contact);
      }
    }
  };
  const validateDate=(e)=>{
      const selected = new Date(e.target.value)
      const today = new Date(moment().format('LL'))
       if(selected < today  ){
         console.log("true")
         setDateErr(true)
       }
       else{
         setDateErr(false)
       }
      
    
  }
  return (
    <div className="col-md-6 mx-auto text-center form p-4">
      <h5 className="mb-5 mt-3">Publish tender</h5>
      <Form>
        <div className="form-group">
          <div className="row">
            <input
              type="text"
              placeholder="Enter Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="choose your category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="form-control"
            >
              <option value=""> [Please select category]</option>
              <option value="IT"> IT</option>
              <option value="Construction"> Construction</option>
              <option value="Electrical"> Electrical</option>
              <option value="Medical"> Medical</option>
              <option value="Oil and Gas"> Oil and Gas</option>
              <option value="Telecom"> Telecom</option>
            </select>
          </div>
        </div>
       {/* <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="choose availibility status"
              onChange={(e) => {
                setAvailibility(e.target.value);
              }}
              className="form-control"
            >
              <option value=""> [Please select one]</option>
              <option value="Active"> Active</option>
              <option value="Inactive"> Inactive</option>
            </select>
          </div>
        </div>*/}
        <div className="form-group">
          <div className="row">
            <select
              type="text"
              placeholder="region"
              onChange={(e) => {
                setRegion(e.target.value);
              }}
              className="form-control"
            >
              <option value="">[Please select Region]</option>
              <option value="Punjab"> Punjab</option>
              <option value="Sindh"> Sindh</option>
              <option value="Khyber Pukhtunkhwa"> Khyber Pukhtunkhwa</option>
              <option value="Balochistan"> Balochistan</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <div className="row">
            <textarea
              type="text"
              placeholder="Enter your description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="text"
              placeholder="ex. +92xxxxxxxxxx"
              onChange={(e) => {
                setContact(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        {err && <p style={{ color: "red" }}>{err}</p>}
       {/* <div className="form-group">
          <div className="row">
            <input
              type="date"
              placeholder="choose date"
              onChange={(e) => {
                setOpeningDate(e.target.value);
              }}
              className="form-control"
            />
          </div>
            </div>*/}
        <div className="form-group">
          <div className="row">
            <input
              type="date"
              
              placeholder="choose date"
              onChange={validateDate}
              className="form-control"
            />
          </div>
        </div>
        {dateErr && <p style={{ color: "red" }}>You must select correct date</p>}
        <div className="form-group">
          <div className="row">
            <input
              type="file"
              placeholder="select file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              className="form-control"
            />
          </div>
        </div>
        {user && (
          <Button
            variant="contained"
            color="primary"
            id="btns"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
        {!user && (
          <Button
            variant="contained"
            color="secondary"
            disabled
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default PublishTender;
