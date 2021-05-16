import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "14px",
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
}));

const Posts = (props) => {
  const { posts } = props;

  if (!posts || posts.length === 0) return <p>Cannot find any posts</p>;

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => {
            return (
              <div className="card" style={{ marginBottom: "15px" }}>
                <div class="card-body">
                  <h5 class="card-title">{post.organization_name}</h5>

                  <h5 class="card-text">Sector: {post.category}</h5>
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
      </Container>
    </React.Fragment>
  );
};

export default Posts;
