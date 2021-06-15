import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import { useEffect } from "react";

const TenderDetails = ({ match }) => {
  const id = Number(match.params.id);

  const [details, setDetails] = useState([]);
 
  useEffect(() => {
    async function getTenders(){
      auth
      .getTenders()
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getTenders()
  }, [])

  const [bids, setBids] = useState([]);
  

  useEffect(() => {
    async function getBidsData(){
      auth
      .getBids()
      .then((res) => {
        setBids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getBidsData();
  }, [])

  if (!details || details.length === 0) return <p>Cannot find any tenders</p>;
  if(!bids || bids.length===0) console.log('no bids')
  const totalbids = bids.filter(x=>x.tenderId===id && x.postedBy===localStorage.getItem('organization') )
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {details
        .filter((x) => x.id === id)
        .map((product, index) => (
          <div>
            <h4 className="text-center mb-3" id="bg-title">
              ORGANIZATION DETAILS
            </h4>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Organization name</h5>
              </div>
              <div className="col-md-6">
                <p>{product.organization_name}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6 ">
                <h5 id="d-title">Region</h5>
              </div>
              <div className="col-md-6">
                <p>{product.region}</p>
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
            <h4 className="text-center mb-3" id="bg-title">
              Tender Details
            </h4>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Title</h5>
              </div>
              <div className="col-md-6">
                <p>{product.title}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Category</h5>
              </div>
              <div className="col-md-6">
                <p>{product.category}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Availibility</h5>
              </div>
              <div className="col-md-6">
                <p>{product.availibility}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Opening date</h5>
              </div>
              <div className="col-md-6">
                <p>{product.opening_date}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Last date</h5>
              </div>
              <div className="col-md-6">
                <p>{product.last_date}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Description</h5>
              </div>
              <div className="col-md-6">
                <p>{product.description}</p>
              </div>
              <a href={product.file_uploaded} download="My_File.pdf">
                  {" "}
                  Soft Copy{" "}
                </a>
            </div>
            {!(auth.getCurrentUser() === product.organization_name) && totalbids.length===0 && (
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  window.location.href =
                    "/place-bid/" + product.id + "/" + product.title;
                }}
              >
                Place Bid
              </Button>
            )}
          { totalbids.length!==0 && (
            <p> Bid Already placed</p>
          )
          }
           
          </div>
        ))}
    </div>
  );
};

export default TenderDetails;
