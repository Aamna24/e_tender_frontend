import React, { useState, useEffect } from "react";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CancelIcon from '@material-ui/icons/Cancel';
import HistoryIcon from '@material-ui/icons/History';
const MyBids = () => {
  const email = localStorage.getItem("organization");

  const [bids, setBids] = useState([]);



  useEffect(() => {
    async function getData() {
      auth
        .getBids()
        .then((res) => {
          setBids(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData()
  }, [])
  const filtered = bids.filter((x) => x.postedBy === email);
  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-3">MY BIDS</h2>

      {filtered
        .sort((a, b) => b.id - a.id)
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
                <h4 className="card-title text-center" style={{ backgroundColor: "#050F2F", color: "white", paddingTop: "4px", paddingBottom: "4px" }} >Title: {post.title}</h4>
                {post.status === "Approved" && (
                  <p class="card-text">
                    <p class="card-text" style={{ color: "green", float: 'right' }}><DoneAllIcon /> {post.status}</p>
                  </p>
                )}
                {post.status === "Rejected" && (
                  <p class="card-text" style={{ color: "red", float: 'right' }}><CancelIcon /> {post.status}</p>

                )}
                {post.status === "Under Review" && (
                  <p class="card-text" style={{ color: "blue", float: 'right' }}><HistoryIcon /> {post.status}</p>

                )}
                <p class="card-text" style={{ color: "black" }}>Tender ID: {post.tenderId}</p>

                <p class="card-text" style={{ color: "black" }}>Bidding Amount: Rs {post.bidding_amount}</p>



                <a href={post.file_uploaded} download="My_File.pdf" style={{ color: "#cc3c34", fontFamily: "bold" }}>
                  {" "}<GetAppIcon />
                  Click here to download Soft Copy{" "}
                </a>
                <br />
                <br />
                <Button
                  id="btns"
                  onClick={(e) => {
                    window.location.href = "/mybid-details/" + post.id;
                  }}
                  className="ml-auto"
                >
                  View Details
                </Button>
                <div style={{ textAlign: "end", marginTop: "-35px" }}>
                  <Button
                    id="btns"
                    style={{ backgroundColor: "red", marginLeft: "5px" }}
                    onClick={(e) => {
                      auth.deleteBid(post.id);
                      window.location.reload();
                    }}
                  >
                    <DeleteIcon />

                    Delete Bid
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyBids;
