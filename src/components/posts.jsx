import React, { useRef, useState, useEffect } from "react";
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
  const [tenders, setTenders] = useState([]);
  const [timerdays, settimerdays] = useState("00");
  const [timerhours, settimerhours] = useState("00");
  const [timerminutes, settimerminutes] = useState("00");
  const [timerseconds, settimerseconds] = useState("00");
  let interval = useRef();

  if (!posts || posts.length === 0) return <p>Cannot find any posts</p>;
  const Starttimer = (last_date) => {
    const endtime = new Date(last_date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endtime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);

        console.log("bid closed");
      } else {
        settimerdays(days);
        settimerhours(hours);
        settimerminutes(minutes);
        settimerseconds(seconds);
      }
    });
  };
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
                  {Starttimer(post.last_date)}
                  <p className="card-text ">
                    {" "}
                    Bidding ends in: {timerdays} days: {timerhours} hours:{" "}
                    {timerminutes} minutes {timerseconds} seconds
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
