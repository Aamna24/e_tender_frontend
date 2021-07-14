import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as auth from '../../services/authServices'
import Loaders from '../../Loader'

const validate = values => {
  const errors = {};

  if (!values.contact) {
    errors.contact = '* Contact is required';
  } else if (!/^(\+923)[0-9]{9}$/i.test(values.contact)) {
    errors.contact = '* Invalid contact format. It should be +923XXXXXXXXX';
  }

  if (!values.no_of_days) {
    errors.no_of_days = '* Number of days is required';
  }

  if (!values.bidding_amount) {
    errors.bidding_amount = '* Bidding amount is required';
  }




  return errors
}


const PlaceBid = ({ match }) => {
  const id = match.params.id;
  const title = match.params.title;

  const [file_uploaded, setFile] = useState()
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      contact: '',
      no_of_days: '',
      bidding_amount: "",
      file_uploaded: '',
      last_date: '',
      file_uploaded: ''

    },
    validate,
    onSubmit: async (values) => {
      setLoading(true)
      const data = new FormData()
      data.append("name", localStorage.getItem('organization'));
      data.append("no_of_days", formik.values.no_of_days);
      data.append("bidding_amount", formik.values.bidding_amount);
      data.append("contact", formik.values.contact);
      data.append("tenderId", id);
      data.append("title", title);
      data.append("file_uploaded", file_uploaded);
      data.append("postedBy", user);
      data.append("email", localStorage.getItem('email'))
      data.append("status", "Under Review");
      try {
        const res = await auth.postBid(data)
        setLoading(true)
        if (res.status === 201) {
          // toast.success("Bids placed");
          setLoading(false)
          window.location.href = "/my-bids";
        }
      } catch (error) {
        if (error.response.data.region) {
          formik.errors.region = error.response.data.region
        }
        if (error.response.data.description) {
          formik.errors.description = error.response.data.description
        }
        if (error.response.data.contact) {
          formik.errors.contact = error.response.data.contact
        }
        if (error.response.data.category) {
          formik.errors.category = error.response.data.category
        }
      }
    },
  });
  const user = auth.getCurrentUser()
  return (
    <div className='container mb-5'>
      {loading && (


        <Loaders />

      )}

      {!loading && (
        <>
          <h2 className='text-center mt-5'>PLACE BID</h2>

          <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-6 mt-4">

              <form onSubmit={formik.handleSubmit} >
                <div className='form-group'>
                  <label htmlFor="name">Organization Name</label>
                  <input
                    id="name"
                    name="name"
                    className='form-control'
                    type="text"
                    onChange={formik.handleChange}
                    //value={formik.values.name}
                    defaultValue={localStorage.getItem('organization')}
                    disabled
                  />
                  {formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null}

                </div>

                <div className='form-group'>
                  <label htmlFor="contact"> Contact</label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    className='form-control'
                    placeholder="ex. +92xxxxxxxxxx"
                    onChange={formik.handleChange}
                    value={formik.values.contact}
                  />
                  {formik.errors.contact ? <div style={{ color: 'red' }}>{formik.errors.contact}</div> : null}

                </div>






                <div className='form-group'>
                  <label htmlFor="no_of_days">No of Days: </label>
                  <input
                    id="no_of_days"
                    className='form-control'
                    name="no_of_days"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.no_of_days}
                  />
                  {formik.errors.no_of_days ? <div style={{ color: 'red' }}>{formik.errors.no_of_days}</div> : null}

                </div>

                <div className='form-group'>
                  <label htmlFor="bidding_amount">Bidding Amount</label>
                  <input
                    id="bidding_amount"
                    name="bidding_amount"
                    type="number"
                    className='form-control'
                    onChange={formik.handleChange}
                    value={formik.values.bidding_amount}
                  />
                  {formik.errors.bidding_amount ? <div style={{ color: 'red' }}>{formik.errors.bidding_amount}</div> : null}

                </div>





                <div className='form-group '>
                  <label htmlFor="file_uploaded"> Upload File</label>
                  <input
                    id="file_uploaded"
                    name="file_uploaded"
                    type="file"
                    className='form-control'
                    required
                    onChange={(e) => {
                      setFile(e.currentTarget.files[0])
                    }}

                  />
                  {formik.errors.file_uploaded ? <div style={{ color: 'red' }}>{formik.errors.file_uploaded}</div> : null}

                </div>

                {user && (
                  <div style={{ textAlign: "center", marginRight: '70px' }}>
                    <button id="btns" type="submit" >Submit</button>
                  </div>
                )}
                {!user && (
                  <button id="btns" disabled type="submit" style={{ backgroundColor: 'grey' }}>Submit</button>
                )}
              </form>
            </div>

          </div>
        </>
      )}

    </div>
  );

}

export default PlaceBid
