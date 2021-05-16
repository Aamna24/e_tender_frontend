import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CategoriesCard from "../CategoriesCards";
import LatestTenders from "../Tenders/latestTenders";

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron"></div>
      <div className="row container">
        <div className="col-md-6 text-center">
          <Button
            id="mbtns"
            className="btn btn-lg"
            style={{
              backgroundColor: "#16c79a",
              color: "white",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginLeft: "80px",
            }}
            component={Link}
            to="/search"
          >
            Search For Tenders
          </Button>
        </div>
        <div className="col-md-6 text-center">
          <Button
            id="mbtns"
            className="btn btn-lg"
            component={Link}
            to="/tenders"
            style={{
              backgroundColor: "#16c79a",
              color: "white",
              paddingLeft: "100px",
              paddingRight: "100px",
              marginLeft: "180px",
            }}
          >
            View All Tenders
          </Button>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <h3 style={{ marginTop: "55px" }}>Categories</h3>
        <br />
        <CategoriesCard />
      </div>
      <br />
      <br />
      <div className="container text-center solid ">
        <h3 style={{ marginTop: "18px" }}>Latest Tenders</h3>
        <LatestTenders />
        <br />
      </div>
      <div className="container text-center">
        <h3 style={{ marginTop: "45px" }}>Our Clients</h3>
        <br />
      </div>
    </div>
  );
};
export default HomePage;
