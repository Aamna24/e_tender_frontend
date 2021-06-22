import React ,{useState} from 'react'
import {useFormik} from 'formik'
import '../styles.css'
import * as auth from '../../services/authServices'
import moment from 'moment'
const validate = values => {
  const errors = {};

    if (!values.category) {
      errors.category = 'Required';
    } 
  
    if (!values.title) {
      errors.title = 'Required';
    } 
  
    if (!values.region) {
      errors.region = 'Required';
    } 
    if (!values.description) {
        errors.description = 'Required';
      } 
      if (!values.contact) {
        errors.contact = 'Required';
      } else if (!/^(\+92)[0-9]{10}$/i.test(values.contact)) {
        errors.contact = 'Invalid contact format. It should be +92XXXXXXXXXX';
      }
      if (!values.last_date) {
        errors.last_date = 'Required';
      } 
      else {
        const selected = new Date(values.last_date)
        const today = new Date(moment().format('LL'))
         if(selected < today  ){
         errors.last_date = 'You should select a valid date'
       }
       
      }
      
  return errors
}


const PublishTender = () => {

   const [file_uploaded, setFile] = useState()
  const formik = useFormik({
    initialValues: {
      category: '',
      title: '',
      region: '',
      description:"",
      contact:'',
      last_date:'',
      file_uploaded:''

    },
    validate,
    onSubmit: async(values) => {
        const data = new FormData()
        data.append("organization_name",localStorage.getItem('organization'))
        data.append("title", formik.values.title);
    data.append("category", formik.values.category);
    data.append("availibility", 'Active');
    data.append("region", formik.values.region);
    data.append("description", formik.values.description);
    data.append("contact", formik.values.contact);
    data.append("opening_date", moment().format('YYYY-MM-DD'));
    data.append("last_date", formik.values.last_date);
    data.append("file_uploaded", file_uploaded);
    data.append("email", localStorage.getItem("email"));
    data.append("assigned_to", "null");
      try {
         const res = await auth.publishTender(data)
         if (res.status === 201) {
          window.location.href = "/my-tenders";
        }
      } catch (error) {
        if(error.response.data.region){
          formik.errors.region=error.response.data.region
        }
        if(error.response.data.description){
          formik.errors.description=error.response.data.description
        }
        if(error.response.data.contact){
          formik.errors.contact=error.response.data.contact
        }
        if(error.response.data.category){
          formik.errors.category=error.response.data.category
        }
      }
    },
  });
       const user = auth.getCurrentUser()
          return (
            <div className='container'>
              <div className='row'>
              <div className="col-md-6"></div>
              <div className="col-md-6 mt-4">
              <h4>Publish Tender</h4>
          
            <form onSubmit={formik.handleSubmit} >
                <div className='form-group'>
              <label htmlFor="organization_name">Organization Name</label>
              <input
                id="organization_name"
                name="organization_name"
                className='form-control'
                type="text"
                onChange={formik.handleChange}
                //value={formik.values.organization_name}
                defaultValue={localStorage.getItem('organization')}
                disabled
              />
            {formik.errors.organization_name ? <div style={{color:'red'}}>{formik.errors.organization_name}</div> : null}

              </div>
            <div className='form-group'>
              <label htmlFor="title">Tender Title</label>
              <input
                id="title"
                className='form-control'
                name="title"
                type="title"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
              {formik.errors.title ? <div style={{color:'red'}}>{formik.errors.title}</div> : null}

              </div>

              <div className='form-group'>
              <label htmlFor="category">Category </label>
              <select
                id="category"
                name="category"
                type="category"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.category}
              >
                  <option disabled value=''>[Please select category]</option>
                  <option value="IT"> IT</option>
              <option value="Construction"> Construction</option>
              <option value="Electrical"> Electrical</option>
              <option value="Medical"> Medical</option>
              <option value="Oil and Gas"> Oil and Gas</option>
              <option value="Telecom"> Telecom</option>
                  </select>
              {formik.errors.category ? <div style={{color:'red'}}>{formik.errors.category}</div> : null}

              </div>


        <div className='form-group'>
              <label htmlFor="region">Region </label>
              <select
                id="region"
                name="region"
                type="region"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.region}
              >
                  <option disabled value=''>[Please select Region]</option>
                  <option value="Punjab"> Punjab</option>
              <option value="Sindh"> Sindh</option>
              <option value="Khyber Pukhtunkhwa"> Khyber Pukhtunkhwa</option>
              <option value="Balochistan"> Balochistan</option>
                  </select>
              {formik.errors.region ? <div style={{color:'red'}}>{formik.errors.region}</div> : null}

              </div>

<div className='form-group'>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                type="text"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description ? <div style={{color:'red'}}>{formik.errors.description}</div> : null}

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
              {formik.errors.contact ? <div style={{color:'red'}}>{formik.errors.contact}</div> : null}

              </div>

            <div className='form-group'>
              <label htmlFor="last_date"> Closing Date</label>
              <input
                id="last_date"
                name="last_date"
                type="date"
                className='form-control'
                onChange={formik.handleChange}
                value={formik.values.last_date}
              />
              {formik.errors.last_date ? <div style={{color:'red'}}>{formik.errors.last_date}</div> : null}

              </div>

              <div className='form-group'>
              <label htmlFor="file_uploaded"> Upload File</label>
              <input
                id="file_uploaded"
                name="file_uploaded"
                type="file"
                className='form-control'
               
                onChange={(e)=>{
                  setFile(e.currentTarget.files[0])
                }}
                
              />
              {formik.errors.file_uploaded ? <div style={{color:'red'}}>{formik.errors.file_uploaded}</div> : null}

              </div>
        
             {user && (
                <button id="btns" type="submit">Submit</button>
             )}
             {!user && (
                <button id="btns" disabled type="submit" style={{backgroundColor:'grey'}}>Submit</button>
             )}
            </form>
            </div>
              </div>
            </div>
          );
    
}

export default PublishTender
