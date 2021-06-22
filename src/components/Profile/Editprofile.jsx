import React, {useState,useEffect} from 'react'
import * as auth from '../../services/authServices'
import {Form} from 'react-bootstrap'

const Editprofile = () => {
    const [user, setUser]= useState()
    const [organization_name, setOrgName] = useState(null)
    const [ntn, setNtn] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const [address, setAddress] = useState()


      useEffect(() => {
        async function getData(){
          await auth
          .getUsers()
          .then((res) => {
            setUser(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        }
        getData()
      }, [])
      if(!user || user.length===0) return <p>Waiting for the data to load...</p>
      const filter = user.filter(x=>x.email===localStorage.getItem('email'))
      console.log(filter)

      const handleSubmit=async(e)=>{
          e.preventDefault()
          if(organization_name===null){
              setOrgName(filter[0].organization_name)
          }
          if(email===null){
              setEmail(filter[0].email)
          }
          if(ntn===null){
              setNtn(filter[0].ntn)
          }
          if(contact===null){
              setContact(filter[0].contact)
          }
          if(address===null){
              setAddress(filter[0].address)
          }

         const res = await auth.updateUser(filter[0].id, organization_name,email,ntn,address,contact)
         if(res.status===200){
             alert('profile Updated')
         }
      }
    return (
        <p>
        <h3 className="text-center mt-5">Edit Profile</h3>
        <Form className="container" onSubmit={handleSubmit}>
        <Form.Group controlId="organization_name">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            type="text"
            value={organization_name}
            defaultValue={filter[0].organization_name}
            onChange={(e) => setOrgName(e.target.value)}
          ></Form.Control>
          
        </Form.Group>
        <Form.Group controlId="ntn">
          <Form.Label>NTN</Form.Label>
          <Form.Control
            type="text"
            value={ntn}
            defaultValue={filter[0].ntn}
            onChange={(e) => setNtn(e.target.value)}
          ></Form.Control>
          
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            defaultValue={filter[0].email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
          
        </Form.Group>

        <Form.Group controlId="contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            value={contact}
            defaultValue={filter[0].contact}
            onChange={(e) => setContact(e.target.value)}
          ></Form.Control>
          
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            defaultValue={filter[0].address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
          
        </Form.Group>

        <button id="btns">Update Profile</button>
        </Form>
        </p>
    )
}

export default Editprofile
