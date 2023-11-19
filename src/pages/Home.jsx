import React, { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';
import "../styles/Home.css"
import axios from 'axios';
import API_URL from '../config/api';
import Avatar from 'react-avatar';
import { Header } from './Header';
import { Topcontent } from './Topcontent';



const Home = () => {
  const [res,setRes] = useState({});

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user && user.token){
      getdata(user.token);
      
    }
  },[]);

   const getdata =  async(token) => {
    try {
      const config = {
        headers:{
          Authorization : token
        }
      }

      const response = await axios.get(`${API_URL}/home`,config);
      if(response.data ==="Invalid Token"){
        alert("Login Again");
      }
      else if(response.data === "Server Busy"){
        alert("Unauthorized Access")
      } else if(response?.status){
        setRes(response.data);
        console.log("Homeeeeeeeee",response);
        localStorage.setItem("_id",response.data.id);
       // localStorage.setItem("_id",JSON.stringify(data.id));

      }

    } catch (error) {
      
    }

  }
  return (
  <div>
    <Header/>
    <Topcontent/>
  </div>

    // <Avatar name={res.name} maxInitials={1}round={true} size="50" alt= 'avatar'className='avatar' color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} />
  
 


 
  )
}

export default Home