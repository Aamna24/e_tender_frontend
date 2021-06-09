import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const Msg = () => {
    return (
        
         <div className="text-center" style={{marginTop:'10%', marginBottom:'8%'}}>
             <h1 className="mb-3">Thank You for registering</h1>
             <h5><CheckCircleIcon/>A verification link has been sent to your email account</h5>
             <p>Please click the link that has just been sent to your email account to verify your email</p>
             
         </div>
        
    )
}

export default Msg
