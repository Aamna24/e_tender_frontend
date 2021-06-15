import React from 'react'
import { Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button
 } from '@material-ui/core'
const AdminHome = () => {
    return (
        <Container>
            <h2 className='text-center' style={{marginTop:"30px", marginBottom:"30px"}}>Welcome, ADMIN !</h2>
            <div className="col-md-6 text-center">
          <Button
            id="mbtns"
            className="btn btn-lg"
            component={Link}
            to="/tenders"
            style={{
              backgroundColor: "#050F2F",
              color: "white",
              paddingLeft: "30%",
              paddingRight: "30%",
              marginRight:"10%",
              wordSpacing:'7px',
              letterSpacing:"2px"
            }}
          >
            View All Tenders
          </Button>
        </div>
        </Container>
    )
}

export default AdminHome
