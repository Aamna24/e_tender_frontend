import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";

const SearchBids = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");
  const title = URLParams.get("tender");

  const [result, setRes] = React.useState();

  const getData = () => {
    auth
      .searchBids(id)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return result;
  };
  //getData();
  React.useEffect(getData, []);
  if (!result || result.length === 0)
    return (
      <h4
        className="text-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        No Bids to show
      </h4>
    );
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <h5>Showing bids placed on Tender Title: {title}</h5>
      {result && (
        <div className="container text-left" style={{ marginTop: "50px" }}>
          {result.map((post) => {
            return (
              <div class="card mb-5">
                <div class="card-body">
                  <h5 class="card-title">{post.postedBy}</h5>

                  <p class="card-text">Amount: {post.bidding_amount}</p>

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
