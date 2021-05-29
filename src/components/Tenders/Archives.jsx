import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import Countdown from "react-countdown";
import moment from "moment";

const ArchivesTenders = () => {
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
    (x) => x.last_date < moment().format().split("T")[0]
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
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Posted By: {post.organization_name}</p>
                <p className="card-text">Sector: {post.category}</p>
                <p className="card-text">Description: {post.description}</p>

                <p className="card-text ">
                  {" "}
                  Tender Assigned To: {post.assigned_to}
                </p>
                <a href={post.file_uploaded} download="My_File.pdf">
                  {" "}
                  Soft Copy{" "}
                </a>
                <br />
                <br />
                <Button
                  id="btns"
                  onClick={(e) => {
                    window.location.href = "/details/" + post.id;
                  }}
                >
                  View Details
                </Button>
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

export default ArchivesTenders;
