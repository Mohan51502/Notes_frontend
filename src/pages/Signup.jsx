import React, { useState } from 'react';
import {Container,Button ,Form} from "react-bootstrap";
import '../styles/Signup.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import API_URL from '../config/api';

const Signup = () => {
    const [formData,setformData] = useState({
        name:"",
        email:"",
        password:""
    });
    const Navigate = useNavigate()
    const handlechange = (e) =>{
const{name,value} = e.target
setformData({...formData,
    [name]:value
})

    }

    const handlesubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/signup/verify`,formData);
if(response.data === true)  {
    alert("Registeration link sent to your Email");
}   else if(response.data === false){
    alert("User Already Registered");
}       
        } catch (e) {
            console.log("Error during Registeration",e)
            
        }




    }
  return (
<Container>
    <h1 className='signup_heading'>Registeration Form</h1>
    <Form onSubmit={handlesubmit}>
        <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' name='name' value={formData.name} onChange={handlechange} required/>

        </Form.Group>
    
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' value={formData.email} onChange={handlechange} required/>

        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' value={formData.password} onChange={handlechange} required/>

        </Form.Group>
        <Button type='submit' variant='primary'>Register</Button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </Form>
</Container>
    )
}

export default Signup