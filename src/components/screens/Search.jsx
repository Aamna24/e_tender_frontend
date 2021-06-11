import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import { Container, Row } from "react-bootstrap";
import { scryRenderedDOMComponentsWithTag } from "react-dom/test-utils";
const Search = () => {
  const [search, setSearch] = React.useState();
  const [result, setRes] = React.useState();
  const [msg, setMessage]= React.useState(false)

  const handleChange = () => {
    auth
      .searchTender(search)
      .then((res) => {
        setRes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  // React.useEffect(getData, []);
  // if (!result || result.length == 0) { return <p>No Search</p>;
  console.log(result);
  
  return (
    <div className="container " style={{ marginTop: "50px" }}>
      <Container>
        <div className="form-group">
          <Row>
            <div
              className="col-md-6"
              style={{
                paddingTop: "100px",
                paddingBottom: "100px",
                paddingLeft: "80px",
              }}
            >
              <input
                className="form-control"
                placeholder="Search by keyword..."
                style={{ width: "700px" }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
            <div
              className="col"
              style={{ paddingTop: "100px", marginLeft: "240px" }}
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
          <h4>Showing Search Result</h4>
          <div className="container text-left" style={{ marginTop: "50px" }}>
            {result.map((post) => {
              return (
                <div class="card mb-5">
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">Posted By: {post.organization_name}</p>

                    <p class="card-text">Sector: {post.category}</p>
                    <p class="card-text">Description: {post.description}</p>
                    <p class="card-text">Action Deadline: {post.last_date}</p>

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
