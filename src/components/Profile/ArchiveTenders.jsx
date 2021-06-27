import React, { useState, useEffect } from "react";
import * as auth from "../../services/authServices";
import Button from "@material-ui/core/Button";
import moment from 'moment'
const ArchiveTenders = () => {
  const organization_name = localStorage.getItem("organization");

  const [bids, setBids] = useState([]);
  const [farray, setArray] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      
      await  auth
      .getBids()
      .then((res) => {
        setBids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });;
      
    }
    fetchData();
  }, []);
  const filtered = bids.filter((x) => x.postedBy === organization_name);
  
  /*const getTenderList = async () => {

   let array = filtered.map((e) => e.tenderId);
    await fetch("http://127.0.0.1:8000/api/publish-tender/").then((response) => {
      response.json().then((listing) => {
        let array2 = listing.filter((e) => array.includes(e.id));
        setArray(array2);
      });
    });
  };

  React.useEffect(getTenderList, []);  */

  useEffect(() => {
    async function getTenderList(){
      let array = filtered.map((e) => e.tenderId);
      await fetch("https://etender-backend.herokuapp.com/api/publish-tender/").then((response) => {
        response.json().then((listing) => {
          let array2 = listing.filter((e) => array.includes(e.id));
          setArray(array2);
        });
      });
    }
    getTenderList()
  }, [filtered])
  const archive = farray.filter(
    (x) => x.last_date < moment().format().split("T")[0]
  );
  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-3">Archive Tenders</h2>
      {archive.map((post) => {
        return (
          <div class="card mb-5">
            <div class="card-body">
            <h4 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h4>
            <p className="card-text " style={{float:"right", color:"black"}}>Posted By: {post.organization_name}</p>
                <p className="card-text " style={{color:"black"}}>Sector: {post.category}</p>
                <p className="card-text" style={{color:"black"}}>Description: {post.description}</p>
                <p className="card-text" style={{color:"black"}}>Action Deadline: {post.last_date}</p>
              
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
