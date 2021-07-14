import React, { useState } from "react";

import * as auth from "../../services/authServices";
import GetAppIcon from '@material-ui/icons/GetApp';

const MybidDetails = ({ match }) => {
  const id1 = Number(match.params.id);

  const [details, setDetails] = useState([]);
  const getData = () => {
    auth
      .getBids()
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return details;
  };
  React.useEffect(getData, [details]);

  if (!details || details.length === 0) return <p>Cannot find any Bids</p>;

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {details
        .filter((x) => x.id === id1)
        .map((product, index) => (
          <div className='mb-5'>
            <h4 className="text-center mb-3" id="bg-title">
              BIDDING DETAILS
            </h4>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Organization name</h5>
              </div>
              <div className="col-md-6">
                <p>{product.postedBy}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6 ">
                <h5 id="d-title">No of Days</h5>
              </div>
              <div className="col-md-6">
                <p>{product.no_of_days}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Contact</h5>
              </div>
              <div className="col-md-6">
                <p>{product.contact}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Status</h5>
              </div>
              <div className="col-md-6">
                <p>{product.status}</p>
              </div>
            </div>

            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">File</h5>
              </div>
              <div className="col-md-6">
                <a href={product.file_uploaded} download="My_File.pdf" style={{ color: "#cc3c34", fontFamily: "bold" }}>
                  {" "}<GetAppIcon />
                  Click here to download Soft Copy{" "}
                </a>

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MybidDetails;
