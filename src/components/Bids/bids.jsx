import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CancelIcon from '@material-ui/icons/Cancel';
import HistoryIcon from '@material-ui/icons/History';

const SearchBids = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");
  const title = URLParams.get("tender");

  const [result, setRes] = useState();

  useEffect(() => {
    async function getData() {
      await auth
        .searchBids(id)
        .then((res) => {
          setRes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, [id])

  if (!result || result.length === 0)
    return (
      <React.Fragment>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "200px", marginBottom: "200px" }}>No Bids available</h2>
      </React.Fragment>
    );
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <h3>Showing bids placed on Tender Title: {title}</h3>
      {result && (
        <div className="container text-left" style={{ marginTop: "50px" }}>
          {result.map((post) => {
            return (
              <div class="card mb-5">
                <div class="card-body">
                  <h4 className="card-title text-center" style={{ backgroundColor: "#050F2F", color: "white", paddingTop: "4px", paddingBottom: "4px" }} >Organization: {post.postedBy}</h4>
                  <p class="card-text" style={{ color: "black" }}>Bid ID: {post.id}</p>

                  <p class="card-text" style={{ color: "black" }}>Amount: Rs {post.bidding_amount}</p>

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

                  <Button
                    id="btns"
                    onClick={(e) => {
                      window.location.href =
                        "/bid-details/" + post.id + "/" + post.tenderId;
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBids;
