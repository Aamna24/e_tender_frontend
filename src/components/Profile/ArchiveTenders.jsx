import React, { useState } from "react";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";

const ArchiveTenders = () => {
  const email = localStorage.getItem("organization");

  const [bids, setBids] = useState([]);
  const [farray, setArray] = useState([]);

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

  const getTenderList = async () => {
    let array = filtered.map((e) => e.tenderId);
    console.log(array);
    fetch("http://127.0.0.1:8000/api/publish-tender/").then((response) => {
      response.json().then((listing) => {
        let array2 = listing.filter((e) => array.includes(e.id));
        setArray(array2);
      });
    });
  };

  React.useEffect(getTenderList, []);

  return (
    <div className="container">
      <h4 className="text-center mb-5 mt-3">Archive Tenders</h4>
      {farray.map((post) => {
        return (
          <div class="card mb-5">
            <div class="card-body">
              <h5 class="card-title">{post.title}</h5>
              <p class="card-text">Sector: {post.category}</p>
              <p class="card-text">Description: {post.description}</p>
              <p class="card-text">Action Deadline: {post.last_date}</p>
              <a href={post.file_uploaded} download="My_File.pdf">
                {" "}
                Soft Copy{" "}
              </a>
              <br />
              <br />
              <Button
                className="mr-3"
                id="btns"
                onClick={(e) => {
                  window.location.href = "/mytenders-details/" + post.id;
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArchiveTenders;
