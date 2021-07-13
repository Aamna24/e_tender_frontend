import React, { useState, useEffect } from "react";
import * as auth from "../services/authServices";
import Button from "@material-ui/core/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
import moment from 'moment'
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
  const filter = tenders.filter((x) => x.category === match.params.category)
  const result = filter.filter(
    (x) => x.last_date > moment().format().split("T")[0]
  )
  if(result.length===0 || !result.length) return (
    <React.Fragment>
      <h2 style={{display: 'flex', justifyContent: 'center',alignItems:'center', marginTop:"200px",marginBottom:"200px"}}>No Tenders Available</h2>
    </React.Fragment>
  )
  return (
    <div className="container text-left" style={{ marginTop: "50px" }}>
      <h2 className='mb-5'>CATEGORY: {match.params.category}</h2>
      {tenders
        .filter((x) => x.category === match.params.category && x.last_date> moment().format().split("T")[0])
        .map((post) => {
          return (
            <div class="card mb-5">
              <div class="card-body">
              <h4 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h4>
              <p className="card-text " style={{float:"right", color:"black"}}>Posted By: {post.organization_name}</p>
                <p className="card-text " style={{color:"black"}}>Sector: {post.category}</p>
                <p class="card-text" style={{color:"black"}}>Description: {post.description}</p>
                <p class="card-text" style={{color:"black"}}>Action Deadline: {post.last_date}</p>
                <a href={post.file_uploaded} download="My_File.pdf" style={{color:"#cc3c34", fontFamily:"bold"}}>
                  {" "}<GetAppIcon/>
                  Click here to download Soft Copy{" "}
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

    
    </div>
  );
};

export default FilteredCategory;
