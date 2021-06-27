import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CategoriesCard from "../CategoriesCards";
import LatestTenders from "../Tenders/latestTenders";
import LaunchIcon from '@material-ui/icons/Launch';

const HomePage = () => {
  return (
    <div>
      <div className="jumbotron">
        <button onClick={()=>{
          window.location.href="/register"
        }} style={{backgroundColor:"white", display:"inline-block",color:"black",
      textAlign:"center",marginBottom:0,verticalAlign:"middle",touchAction:"manipulation",
      cursor:"pointer",border:"1px solid",whiteSpace:"nowrap",lineHeight:"1.42",borderRadius:"3px",padding:"10px 33px",
      float:"right",fontSize:"22px",marginTop:"15%",marginRight:"5%"}}><LaunchIcon style={{marginRight:"7px",marginBottom:"2px"}}/>Create Account</button>
      </div>
      <div className="row ">
        <div className="col-md-6 col-xs-12 text-center">
          <Button
            id="mbtns"
            className="btn btn-lg"
            style={{
              backgroundColor: "#050F2F",
              color: "white",
              paddingLeft: "30%",
              paddingRight: "30%",
              marginLeft:"10%",
              wordSpacing:'7px',
              letterSpacing:"2px"
            }}
            component={Link}
            to="/search"
          >
            Search For Tenders
          </Button>
        </div>
        <div className="col-md-6 text-center col-xs-12">
          <Button
            id="mbtns"
            className="btn btn-lg"
            component={Link}
            to="/tenders"
            style={{
              backgroundColor: "#050F2F",
              color: "white",
              paddingLeft: "30%",
              paddingRight: "30%",
              marginRight:"10%",
              wordSpacing:'7px',
              letterSpacing:"2px"
            }}
          >
            View All Tenders
          </Button>
        </div>
      </div>
      <br />
      <div className="container text-center">
        <h2 style={{ marginTop: "55px" }}>CATEGORIES</h2>
        <br />
        <CategoriesCard />
      </div>
      <br />
      <br />
      <div className="container text-center solid ">
        <h2 style={{ marginTop: "18px" }}>LATEST TENDERS</h2>
        <LatestTenders />
        <br />
      </div>
      
    </div>
  );
};
export default HomePage;
