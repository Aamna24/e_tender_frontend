import React, { useState, useEffect } from "react";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';

const MyTenders = () => {
  const email = localStorage.getItem("organization");

  const [tenders, setTenders] = useState([]);

 

  useEffect(() => {
    async function getData() {
      auth
      .getTenders()
      .then((res) => {
        setTenders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getData()
  }, [])
  const filtered = tenders.filter((x) => x.organization_name === email);
  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-3">My Tenders</h2>
      {filtered
        .sort((a, b) => b.id - a.id)
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
                
                  <h4 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h4>
                <p class="card-text" style={{color:"black"}}>Sector: {post.category}</p>
                <p class="card-text"style={{color:"black"}}>Description: {post.description}</p>
                <p class="card-text" style={{color:"black"}}>Action Deadline: {post.last_date}</p>
              

                <a href={post.file_uploaded} download="My_File.pdf" style={{color:"#cc3c34", fontFamily:"bold"}}>
                  {" "}<GetAppIcon/>
                  Click here to download Soft Copy{" "}
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
               
                <div style={{textAlign:"end"}}>
                <Button
                  className="mr-3"
                  style={{marginTop:'-55px'}}
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
            </div>
          );
        })}
    </div>
  );
};

export default MyTenders;
