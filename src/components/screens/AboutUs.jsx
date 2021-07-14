import React from "react";
const AboutUs = () => {
  return (
    <>
      <h2 className="my-3 text-center">ABOUT US</h2>
      <div className='row' style={{ padding: "0px 80px 50px 80px", marginTop: "-20px" }}>
        <div className='col-md-6 .d-none .d-sm-block'>
          <img src='https://res.cloudinary.com/dkenaghia/image/upload/v1624778066/FYP/5237_g60pim_q3641l.jpg' style={{ height: "450px", width: "600px" }} />
        </div>
        <div className='col-md-6 mt-5 '>
          <p>
            E-Tender comprises of a young, dynamic & experienced team who is passionate
            about just one thing "Helping you in exploring business opportunities by providing right Tenders information & related services"
          </p>
          <p>
            Customer Support: You can contact our customer care team via email,
            phone call or live chat to get assistance on tender/project, existing membership or any other queries/error faced by you.
          </p>
          <p>
            E-Tender is your leading edge partner in finding the right tenders. We understand your needs; know the opportunities that
            exist to fulfil them, and help leverage these opportunities in the shortest possible time.
          </p>
          <p>
            We are serious about delivering great outcomes.
          </p>
        </div>

      </div>

    </>
  );
};

export default AboutUs;
