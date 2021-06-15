import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import Countdown from "react-countdown";
import moment from "moment";

const LatestTenders = () => {
  const [tenders, setTenders] = useState([]);

  const getData = () => {
    auth
      .getTenders()
      .then((res) => {
        setTenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  const filter = tenders.filter(
    (x) => x.last_date > moment().format().split("T")[0]
  );
  return (
    <div className="container text-left" style={{ marginTop: "50px" }}>
      {filter
        .sort((a, b) => b.id - a.id)
        .slice(0, 3)
        .map((post) => {
          return (
            <div className="card mb-5">
              <div className="card-body">
                <h3 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h3>
                <p className="card-text" style={{float:"right", color:"black"}}>Posted By: {post.organization_name}</p>
                <p className="card-text" style={{color:"black"}}>Sector: {post.category}</p>
                <p className="card-text" style={{color:"black"}}>Description: {post.description}</p>
                <p className="card-text" style={{color:"black"}}>Region: {post.region}</p>

                <div className="row" style={{marginTop:"100px"}}>
                  <div className="col-md-6">
                  <p style={{color:"red", fontWeight:"bold",fontSize:"20px"}} >
                  {" "}
                  Bidding ends in: <Countdown date={post.last_date} />
                </p>
                    </div>
                  <div className="col">
                  <Button
                  id="btns"
                  style={{float:"right"}}
                  onClick={(e) => {
                    window.location.href = "/details/" + post.id;
                  }}
                >
                  View Details
                </Button>
                    </div>
               
            
               
                </div>
              </div>
            </div>
          );
        })}
      <div className="text-center">
        <Button href="/tenders">View More</Button>
      </div>
    </div>
  );
};

export default LatestTenders;
