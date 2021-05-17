import React from "react";

const Categoriescards = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <a className="stretched-link" href="/category/medical">
            <div className="card img-fluid" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="./medical.jfif"
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
                src="./construction.jfif"
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
                src="./it.jfif"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                IT
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
                src="./oil.jfif"
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
                src="./electrical.jfif"
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
                src="./telecom.jfif"
                alt="Card "
                style={{ width: "100%" }}
              />
              <div
                className="card-img-overlay mask"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                }}
              >
                Telecom
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categoriescards;
