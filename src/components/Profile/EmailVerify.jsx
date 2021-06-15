import React, {  useState } from 'react'
import Button from '@material-ui/core/Button'
import * as auth from '../../services/authServices'
import {Link} from 'react-router-dom'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const EmailVerify = () => {
    const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("token");

  const [res, setRes] = useState()
  const [msg, setMsg]= useState()

    const verify=async()=>{
        
        try {
            
            const res = await auth.verifyEmail(id)
            if(res.status===200){
                setRes(true)
            }
          } catch (ex) {
            if (ex.response !== 200) {
              console.log(ex.response.data.error)
              setMsg(ex.response.data.error)
            }
          }
    }

      verify()

    return (
        <div className="container">
          {res && (
                <div className='container text-center' style={{marginTop:'10%',marginBottom:'20%'}}>
                    <CheckCircleOutlineIcon />
                    <h1 className='mb-3'>Email Verified!</h1>
                    <Button
            color="primary"
            variant="contained"
            component={Link}
            to="/login"
          >
            Click here to Login
          </Button>
                    </div>
         )}
         {msg && (
             <>
             <h1>{msg}</h1>
             </>
         )}
          
        </div>
    )
}

export default EmailVerify
