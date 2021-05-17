import React, { useState } from "react";
import * as auth from "../../services/authServices";
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
                <h5 class="card-title">{post.title}</h5>

                <p class="card-text">Tender ID: {post.tenderId}</p>

                <p class="card-text">Bidding Amount: {post.bidding_amount}</p>
                {post.status === "Approved" && (
                  <p class="card-text">
                    <button class="btn btn-success">{post.status}</button>{" "}
                  </p>
                )}
                {post.status === "Rejected" && (
                  <p class="card-text">
                    <button class="btn btn-danger">{post.status}</button>{" "}
                  </p>
                )}
                {post.status === "Under Review" && (
                  <p class="card-text">
                    <button class="btn btn-primary ">{post.status}</button>{" "}
                  </p>
                )}

                <a href={post.file_uploaded} download="My_File.pdf">
                  {" "}
                  Soft Copy{" "}
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
                <Button
                  id="btns"
                  onClick={(e) => {
                    auth.deleteBid(post.id);
                    window.location.reload();
                  }}
                >
                  Delete Bid
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyBids;
