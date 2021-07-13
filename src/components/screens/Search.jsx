import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import { Container, Row } from "react-bootstrap";
import moment from 'moment'
import { SearchTwoTone } from "@material-ui/icons";
const Search = () => {
  const [search, setSearch] = React.useState();
  const [result, setRes] = React.useState();
  const [searchedTenders, setSearchRes] = React.useState([]);

 

  const handleChange = async() => {
    auth
      .searchTender(search)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

     SearchT()
      
  };

  const SearchT=()=>{
    if(result){
      const b = result.filter(
        (x) => x.last_date > moment().format().split("T")[0]
      )
      setSearchRes(b)
     }
  }
  //getData();
  // React.useEffect(getData, []);
  // if (!result || result.length == 0) { return <p>No Search</p>;
 
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <Container>
        <div className="form-group">
        <div className='text-center'>
          <h2>How can we help?</h2>
              Explore Tenders - Exactly matching your requirements
            </div>
          <Row>
           
            <div
              className="col-md-6 col-xs-12"
              style={{
                paddingTop: "100px",
                paddingBottom: "100px",
                paddingLeft: "80px",
              }}
            >
              <input
                className="form-control"
                placeholder="SEARCH BY KEYWORD..."
                style={{ width: "700px" , marginLeft:"60px" }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div
              className="col"
              style={{ paddingTop: "100px", marginLeft: "300px" }}
            >
              <Button
                variant="contained"
                color="primary"
                id="btns"
                onClick={handleChange}
              >
                Search
              </Button>
            </div>
          </Row>
        </div>
      </Container>

      {result && (
        <>
          <h4>Search Results Found: {searchedTenders.length}</h4>
          <div className="container text-left" style={{ marginTop: "50px" }}>
            {searchedTenders.map((post) => {
              return (
                <div class="card mb-5">
                  <div class="card-body">
                  <h4 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h4>
                  <p className="card-text " style={{float:"right", color:"black"}}>Posted By: {post.organization_name}</p>
                <p className="card-text " style={{color:"black"}}>Sector: {post.category}</p>
                    <p class="card-text" style={{color:"black"}}>Description: {post.description}</p>
                    <p class="card-text" style={{color:"black"}}>Action Deadline: {post.last_date}</p>

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
          </div>
        </>
      )}
      
      
    </div>
  );
};

export default Search;
