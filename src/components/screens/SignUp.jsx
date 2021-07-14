import React from 'react'
import { useFormik } from 'formik'
import '../styles.css'
import * as auth from '../../services/authServices'
import PersonIcon from '@material-ui/icons/Person';
const validate = values => {
  const errors = {};

  if (!values.organization_name) {
    errors.organization_name = '* Organization name is required';
  } else if (values.organization_name.length > 30) {
    errors.organization_name = 'Must be 30 characters or less';
  }

  if (!values.password) {
    errors.password = '* Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or greater';
  }

  if (!values.email) {
    errors.email = '* Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.ntn) {
    errors.ntn = '* NTN is required';
  } else if (!/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/i.test(values.ntn)) {
    errors.ntn = 'Invalid NTN format. It should be XXXXX-XXXXXXX-X';
  }
  if (!values.contact) {
    errors.contact = '* Contact number is required';
  } else if (!/^(\+92)[0-9]{10}$/i.test(values.contact)) {
    errors.contact = 'Invalid contact format. It should be +92XXXXXXXXXX';
  }
  if (!values.address) {
    errors.address = '* Address is required';
  }
  return errors
}


const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      organization_name: '',
      password: '',
      email: '',
      ntn: "",
      contact: '',
      address: ''

    },
    validate,
    onSubmit: async (values) => {
      try {
        const res = await auth.registerUser(values)
        if (res.status === 201) {
          window.location.href = "/msg"
        }

      } catch (error) {
        if (error.response.data.email) {
          formik.errors.email = error.response.data.email
        }
        if (error.response.data.ntn) {
          formik.errors.ntn = error.response.data.ntn
        }
        if (error.response.data.contact) {
          formik.errors.contact = error.response.data.contact
        }
        if (error.response.data.organization_name) {
          formik.errors.organization_name = error.response.data.organization_name
        }
      }
    },
  });

  return (
    <div >
      <h2 className='text-center mt-5'>SIGN UP</h2>

      <div className='row mb-5'>
        <div className="col-md-6">
          <img src='https://res.cloudinary.com/dkenaghia/image/upload/v1624778067/FYP/Portfolio-update_wdiw3i_lzbego.jpg' alt='signup'
            style={{ height: "500px", width: "700px" }} />
        </div>
        <div className="col-md-6 mt-4">

          <p style={{ fontWeight: "bold" }}>
            <PersonIcon />
            Create your account
          </p>
          <form onSubmit={formik.handleSubmit} >
            <div className='form-group'>
              <label htmlFor="organization_name">Organization Name</label>
              <input
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                onChange={formik.handleChange}
                value={formik.values.organization_name}
              />
              {formik.errors.organization_name ? <div style={{ color: 'red' }}>{formik.errors.organization_name}</div> : null}

            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className='form-control'
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}

            </div>

            <div className='form-group'>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}

            </div>

            <div className='form-group'>
              <label htmlFor="ntn">NTN</label>
              <input
                id="ntn"
                name="ntn"
                type="text"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.ntn}
              />
              {formik.errors.ntn ? <div style={{ color: 'red' }}>{formik.errors.ntn}</div> : null}

            </div>

            <div className='form-group'>
              <label htmlFor="contact"> Contact</label>
              <input
                id="contact"
                name="contact"
                type="tel"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.contact}
              />
              {formik.errors.contact ? <div style={{ color: 'red' }}>{formik.errors.contact}</div> : null}

            </div>

            <div className='form-group'>
              <label htmlFor="address"> Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.errors.address ? <div style={{ color: 'red' }}>{formik.errors.address}</div> : null}

            </div>

            <div style={{ textAlign: "end", marginRight: "140px", marginTop: '30px' }}>
              <button id="btns" type="submit">SIGN UP</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}

export default SignUp
