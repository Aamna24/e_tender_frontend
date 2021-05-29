import React, { useState } from "react";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";

const MyTenders = () => {
  const email = localStorage.getItem("organization");

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
    return tenders;
  };
  //getData();
  React.useEffect(getData, []);
  const filtered = tenders.filter((x) => x.organization_name === email);
  return (
    <div className="container">
      <h4 className="text-center mb-5 mt-3">My Tenders</h4>
      {filtered
        .sort((a, b) => b.id - a.id)
        .map((post) => {
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

                <Button
                  className="mr-3"
                  id="btns"
                  onClick={() => {
                    window.location.href =
                      "/viewbids/?id=" + post.id + "&tender=" + post.title;
                  }}
                >
                  View Bids
                </Button>
                <Button
                  className="mr-3"
                  id="btn-danger"
                  onClick={() => {
                    auth.deleteTender(post.id);
                    window.location.reload();
                  }}
                >
                  Delete Tender
                </Button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MyTenders;
