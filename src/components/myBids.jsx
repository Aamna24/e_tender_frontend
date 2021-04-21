import React, { useState } from "react";
import * as auth from "../services/authServices";
import Button from "@material-ui/core/Button";
const MyBids = () => {
  const email = localStorage.getItem("organization");

  const [bids, setBids] = useState([]);

  const getData = () => {
    auth
      .getBids()
      .then((res) => {
        setBids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return bids;
  };
  //getData();
  React.useEffect(getData, []);
  const filtered = bids.filter((x) => x.postedBy === email);
  return (
    <div className="container">
      <h4 className="text-center mb-5 mt-3">My Bids</h4>

      {filtered
        .sort((a, b) => b.id - a.id)
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">{post.name}</h5>

                <p class="card-text">Tender ID: {post.tenderId}</p>
                <p class="card-text">Bidding Amount: {post.bidding_amount}</p>
                <a href={post.file_uploaded} download="My_File.pdf">
                  {" "}
                  Soft Copy{" "}
                </a>
                <br />
                <br />
                <Button
                  id="btns"
                  onClick={(e) => {
                    window.location.href = "/bid-details/?id=" + post.id;
                  }}
                >
                  View Details
                </Button>
                <Button id="btns"
                onClick={(e) => {
                  auth.deleteBid(post.id);
                  window.location.reload();
                }}
                
                >Delete Bid</Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyBids;
