import React, { useState } from 'react';
import {Container,Button ,Form} from "react-bootstrap";
import '../styles/Login.css';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import API_URL from '../config/api';
const Login = () => {
    const [formData,setformData] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate();
    const handlechange = (e) =>{
        const{name,value} = e.target
        setformData({...formData,
            [name]:value
        })
        
            }
        
            const handlesubmit = async(e) =>{
                e.preventDefault();
                try {
                    const response = await axios.post(`${API_URL}/login`,formData);
                    if(response.data === "Invalid Username or Password"){
                        alert("Username or Password is Invalid");
                    } else if(response.data === "Server Busy"){
                        alert(" Verify your Email id ");
                    } else if(response?.status){
                        localStorage.setItem("userInfo",JSON.stringify(response.data));
                       // console.log(response)
                       // localStorage.setItem("_id",JSON.stringify(data.id));
                        navigate("/home")
                    }
                    
                } catch (e) {
                    console.log(e)
                    
                }
              
            }
  return (
<Container>
    <h1 className='signup_heading'>Login</h1>
    <Form onSubmit={handlesubmit}>
       
    
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' value={formData.email} onChange={handlechange} required/>

        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' name='password' value={formData.password} onChange={handlechange} required/>

        </Form.Group>
        <Button type='submit' variant='primary'>Login</Button>
        <p>Don't  have an account? <Link to="/">Register</Link></p>
    </Form>
</Container>  )
}

export default Login