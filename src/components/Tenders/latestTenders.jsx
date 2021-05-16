import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";

const LatestTenders = () => {
  const [tenders, setTenders] = useState([]);
  const [timerdays, settimerdays] = useState("00");
  const [timerhours, settimerhours] = useState("00");
  const [timerminutes, settimerminutes] = useState("00");
  const [timerseconds, settimerseconds] = useState("00");
  let interval = useRef();
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
    <div className="container text-left" style={{ marginTop: "50px" }}>
      {tenders
        .sort((a, b) => b.id - a.id)
        .slice(0, 3)
        .map((post) => {
          return (
            <div className="card mb-5">
              <div className="card-body">
                <h5 className="card-title">{post.organization_name}</h5>

                <p className="card-text">Sector: {post.category}</p>
                <p className="card-text">Description: {post.description}</p>
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

export default LatestTenders;
