import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Countdown from "react-countdown";
import moment from "moment";



const Posts = (props) => {
  const { posts } = props;
 

  if (!posts || posts.length === 0) return <p>Cannot find any Tenders</p>;
  const filter = posts.filter(
    (x) => x.last_date > moment().format().split("T")[0]
  );
  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        {filter
          .sort((a, b) => b.id - a.id)
          .map((post) => {
            return (
              <div className="card" style={{ marginBottom: "15px" }}>
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>

                  <h5 class="card-text">Sector: {post.category}</h5>
                  <p class="card-text">Posted By: {post.organization_name}</p>
                  <p class="card-text">Description: {post.description}</p>

                  <p className="card-text ">
                    {" "}
                    Bidding ends in: <Countdown date={post.last_date} />
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
      </Container>
    </React.Fragment>
  );
};

export default Posts;
