import React, { Component } from "react";
import * as auth from "../../services/authServices";
import ReactPaginate from "react-paginate";
import "../styles.css";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Countdown from "react-countdown";

export default class AllTenders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 1,
      postData:[]
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    auth.getTenders().then((res) => {
      const data = res.data;
      const filter = data.filter(
        (x) => x.last_date > moment().format().split("T")[0]
      );
      const slice = filter.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

       this.state.postData = slice
        .sort((a, b) => b.id - a.id)
        .map((post) => (
          <React.Fragment>
            <Container
              maxWidth="md"
              component="main"
              style={{ marginTop: "15px" }}
            >
              <div className="card" style={{ marginBottom: "15px" }}>
              <div className="card mb-5">
              <div className="card-body">
                <h4 className="card-title text-center" style={{backgroundColor:"#050F2F",color:"white",paddingTop:"4px",paddingBottom:"4px"}} >Title: {post.title}</h4>
                <p className="card-text " style={{float:"right", color:"black"}}>Posted By: {post.organization_name}</p>
                <p className="card-text " style={{color:"black"}}>Sector: {post.category}</p>
                <p className="card-text" style={{color:"black"}}>Description: {post.description}</p>
                <p className="card-text" style={{color:"black"}}>Region: {post.region}</p>

                <div className="row" >
                  <div className="col-md-6">
                  <p style={{color:"red", fontWeight:"bold",fontSize:"20px"}} >
                  {" "}
                  Bidding ends in: <Countdown date={post.last_date} />
                </p>
                    </div>
                  <div className="col">
                  <Button
                  id="btns"
                  style={{float:"right"}}
                  onClick={(e) => {
                    window.location.href = "/details/" + post.id;
                  }}
                >
                  View Details
                </Button>
                    </div>
               
            
               
                </div>
              </div>
            </div>
              </div>
            </Container>
          </React.Fragment>
        ));

      this.setState({
        //pageCount: Math.ceil(data.length / this.state.perPage),
        pageCount: Math.ceil(filter.length / this.state.perPage),
        postData: this.state.postData,
      });
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      
      <>
      {this.state.postData.length===0 && (
        <React.Fragment>
        <h2 style={{display: 'flex', justifyContent: 'center',alignItems:'center', marginTop:"200px",marginBottom:"200px"}}>No Tenders available</h2>
      </React.Fragment>
      )}
      {this.state.postData.length!==0 && (
         <div>
         <h2 className="mb-5 text-center mt-5">Showing All tenders</h2>;
         {this.state.postData}
         <ReactPaginate
           previousLabel={"prev"}
           nextLabel={"next"}
           breakLabel={"..."}
           breakClassName={"break-me"}
           pageCount={this.state.pageCount}
           marginPagesDisplayed={2}
           pageRangeDisplayed={5}
           onPageChange={this.handlePageClick}
           containerClassName={"pagination"}
           subContainerClassName={"pages pagination"}
           activeClassName={"active"}
         />
       </div>
       
      )}
      </>
       
    );
  }
}
