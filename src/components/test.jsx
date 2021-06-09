import React, { Component } from "react";
import * as auth from "../services/authServices";
import ReactPaginate from "react-paginate";
import "./styles.css";
import moment from "moment";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Countdown from "react-countdown";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 1,
      currentPage: 0,
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

      const postData = slice
        .sort((a, b) => b.id - a.id)
        .map((post) => (
          <React.Fragment>
            <Container
              maxWidth="md"
              component="main"
              style={{ marginTop: "15px" }}
            >
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
            </Container>
          </React.Fragment>
        ));

      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),

        postData,
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
      <div>
        <h4 className="mb-5 text-center mt-5">Showing All tenders</h4>;
        {this.state.postData}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount-1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}
