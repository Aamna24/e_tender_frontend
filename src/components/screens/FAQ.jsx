import React from "react";
import { Container } from "react-bootstrap";
const FAQ = () => {
  return (
    <>
      <Container className='mb-5'>
        <h2 className="my-3 text-center mb-5">FREQUENTLY ASKED QUESTIONS (FAQ)</h2>
        <div>
        <p style={{fontWeight:"500"}}>Question: How can I create an account?</p>
        <p>You can create account by signing up through the following link - <a style={{color:"#050F2F", textDecoration:"underline"}}>https://etenders.herokuapp.com/register</a></p>

        </div>
        <div>
        <p style={{fontWeight:"500"}}>Question: In what language is the information available?</p>
        <p>All the notices available are in English language.</p>

          </div>
          <div>
          <p style={{fontWeight:"500"}}>Question: How often the tenders are uploaded on the website?</p>
          <p>Tenders are uploaded on all working days.</p>

       
          </div>
      </Container>
    </>
  );
};

export default FAQ;
