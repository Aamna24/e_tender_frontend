import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "@material-ui/core/Button";

import * as auth from "../../services/authServices";
import { toast } from "react-toastify";
toast.configure();

const PlaceBid = ({ match }) => {
  const user = auth.getCurrentUser();

  const [name, setName] = useState();
  const [contact, setContact] = useState();
  const [no_of_days, setDays] = useState();
  const [bidding_amount, setBidding] = useState();
  const [file, setFile] = useState();

  const id = match.params.id;
  const title = match.params.title;
  const handleSubmit = async () => {
    var data = new FormData();
    data.append("name", name);
    data.append("no_of_days", no_of_days);
    data.append("bidding_amount", bidding_amount);
    data.append("contact", contact);
    data.append("tenderId", id);
    data.append("title", title);
    data.append("file_uploaded", file);
    data.append("postedBy", user);
    data.append("status", "Under Review");

    const response = await auth.postBid(data);
    if (response.status === 201) {
      toast.success("Bids placed");
      window.location.href = "/my-bids";
    }
  };

  return (
    <div className="col-md-6 mx-auto text-center form p-4">
      <h5 className="mb-5 mt-3">Place Bid</h5>

      <Form>
        <div className="form-group">
          <div className="row">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control"
              placeholder="Enter your Organization Name"
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
        <div className="form-group">
          <div className="row">
            <input
              type="number"
              placeholder="Enter no of days"
              onChange={(e) => {
                setDays(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="number"
              placeholder="Enter your bidding amount"
              onChange={(e) => {
                setBidding(e.target.value);
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <input
              type="file"
              placeholder="choose file"
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
            color="primary"
            disabled
            onClick={handleSubmit}
            id="btns"
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default PlaceBid;
