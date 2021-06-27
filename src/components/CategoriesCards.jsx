import React from "react";
import Button from '@material-ui/core/Button'
import VisibilityIcon from '@material-ui/icons/Visibility';

const Categoriescards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <a className="stretched-link" href="/category/medical">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624625045/FYP/doctor-with-stethoscope-hands-hospital-background_cdexs9.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />

              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Medical
              </div>



              
            </div>
          </a>
        </div>

        <div className="col-md-4">
          <a className="stretched-link" href="/category/Construction">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624625252/FYP/construction-silhouette_eui0mi.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Construction
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-4">
          <a className="stretched-link" href="/category/IT">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624625802/FYP/93472_uj4gzx.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Information Technology
              </div>
            </div>
          </a>
        </div>
      </div>
      <br /> <br />
      <div className="row">
        <div className="col-md-4">
          <a className="stretched-link" href="/category/Oil">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624625867/FYP/12012_ftcbda.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Oil and Gas
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="strectched-link" href="/category/Electrical">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624625954/FYP/high-voltage-post-high-voltage-tower_uxzt2s.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Electrical
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="strectched-link" href="/category/Telecom">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/dkenaghia/image/upload/v1624626060/FYP/23175_bnnk5e.jpg"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Telecommunication
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="text-center mt-5">
        <Button href="/all-categories"><VisibilityIcon className='mr-1'/>View More</Button>
      </div>
    </div>
  );
};

export default Categoriescards;
