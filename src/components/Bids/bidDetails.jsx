import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../../services/authServices";
import { toast } from "react-toastify";
import GetAppIcon from '@material-ui/icons/GetApp';

toast.configure();
const BidDetails = ({ match }) => {
  const id1 = Number(match.params.id);

  const [details, setDetails] = useState([]);

  const getData = () => {
    auth
      .getBids()
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  if (!details || details.length === 0) return <p>Cannot find any Bids</p>;
  const organization = details.filter((x) => x.id === id1)[0].name;

  const RejectBid = async (tenderId) => {
    const remainingBids = await auth.getBids();
    const filterBids = remainingBids.data.filter(
      (bid) => bid.status === "Under Review" && bid.tenderId === tenderId
    );
    for (let i = 0; i < filterBids.length; i++) {
      const id = filterBids[i].id;
      await auth.rejectBids(id, "Rejected");
    }
    await auth.updateTender(match.params.tenderId, organization, "Inactive");
  };

  const approveBid = async (id, tenderId) => {
    const status = "Approved";
    const res = await auth.approveBids(id, status);

    if (res.status === 200) {
      toast.success("This bid has been approved");
      setTimeout(() => {
        RejectBid(tenderId);
      }, 3000);
      //RejectBid(tenderId);
    }
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {details
        .filter((x) => x.id === id1)
        .map((product, index) => (
          <div>
            <h4 className="text-center mb-3" id="bg-title">
              BIDDING DETAILS
            </h4>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Organization name</h5>
              </div>
              <div className="col-md-6">
                <p>{product.postedBy}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6 ">
                <h5 id="d-title">No of Days</h5>
              </div>
              <div className="col-md-6">
                <p>{product.no_of_days}</p>
              </div>
            </div>
            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">Contact</h5>
              </div>
              <div className="col-md-6">
                <p>{product.contact}</p>
              </div>
            </div>

            <div className="row" id="d-content">
              <div className="col-md-6">
                <h5 id="d-title">File</h5>
              </div>
              <div className="col-md-6">
                <a href={product.file_uploaded} download="My_File.pdf" style={{ color: "#cc3c34", fontFamily: "bold" }}>
                  {" "}<GetAppIcon />
                  Click here to download Soft Copy{" "}
                </a>
              </div>
            </div>

            <div style={{ textAlign: 'end' }} className='mb-5 mt-4'>
              <Button
                variant="contained"
                color="primary"
                onClick={() => approveBid(product.id, product.tenderId)}
                style={{ backgroundColor: '#cc3c34' }}

              >
                Approve Bid
              </Button>
            </div>


          </div>
        ))}
    </div>
  );
};

export default BidDetails;
