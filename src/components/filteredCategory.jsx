import React, { useState, useEffect } from "react";
import * as auth from "../services/authServices";
import Button from "@material-ui/core/Button";

const FilteredCategory = ({ match }) => {
  const [tenders, setTenders] = useState([]);

  

  useEffect(() => {
    async function getData(){
      auth.getTenders()
      .then((res) => {
        setTenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getData()
  }, [])
  
  return (
    <div className="container text-left" style={{ marginTop: "50px" }}>
      {tenders
        .filter((x) => x.category === match.params.category)
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
                <h5 class="card-title">{post.organization_name}</h5>

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
                  id="btns"
                  onClick={(e) => {
                    window.location.href = "/details/?id=" + post.id;
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          );
        })}

      <Button id="btns" href="/tenders">
        View More
      </Button>
    </div>
  );
};

export default FilteredCategory;
