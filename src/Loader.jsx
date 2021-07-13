
import React from 'react'
import Loader from "react-loader-spinner";

const Loaders = () => {
    return (
        <div >
        <div className="loader text-center" style={{marginTop:"10%", marginBottom:"10%"}}>
             <Loader
                 
                 type="Puff"
                 color="red" height={80} width={80}
                 //timeout={6000} //3 secs
               />
        </div>
        </div>
    )
}

export default Loaders
