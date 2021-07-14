import React from "react";
import { Container } from "react-bootstrap";
const Terms = () => {
  return (
    <>
      <Container className='mb-5'>
        <h2 className="my-3 text-center mb-5">TERMS & CONDITIONS</h2>
        <p style={{ fontWeight: "500" }}>Copyright Notices:</p>
        <p>Unless otherwise specified,
          the copyright in the contents of all the pages in this Website are owned by or licensed to etenders.com.</p>

        <p style={{ fontWeight: "500" }}>Data Protection & Privacy :</p>
        <p>All contact details that you provide, is used for identification, and is held and
          processed in accordance with our Registration Data Protection policies.
          <br />
          Where you are required to register before accessing a service, the information gathered is used for invoicing, issuing passwords, and for the occasional dispatch of information which may help you to make better use of our services. We will
          respect your email privacy, and no customer or visitor information will be passed on to third parties without your prior consent

        </p>

        <p style={{ fontWeight: "500" }}>Limitation of Liability:</p>
        <p>For each and every tender/RFP information initial tender notice (issued by the tendering authority) has been made available on website.
          Bidders are requested to read the tender notices very carefully
          <br />
          etenders.com and its affiliates, agents, and licensors provide the service on as is basis, and cannot and do not warrant
          the accuracy, completeness, correctness, non- infringement, merchantability, or fitness for a particular
          purpose of the information available through this service, or the service itself. Neither Etenders.com nor any of its employee, affiliates, agents, or licensors shall be liable to users or anyone else for any loss or injury caused in whole or part by its negligence or contingencies beyond its
          control in procuring, compiling, interpreting, reporting, or delivering the service and any information through the service.

        </p>

      </Container>
    </>
  );
};

export default Terms;
