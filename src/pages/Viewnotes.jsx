import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_URL from '../config/api';
import { Button } from 'react-bootstrap';
//import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';




export default function Viewnotes() {
    const _id = localStorage.getItem("_id");
    //console.log(_id )


    
    const [data ,setData] = useState([])
    useEffect(()=>{
        axios.get(`${API_URL}/notes/getUsercrudOnly/${_id}`)
        .then(res =>setData(res.data.data))
        .catch(err =>console.log(err))
       // console.log("aalalal",data);

    },[])

    const navigate = useNavigate();

    const handledelete  = (_id) =>{
        console.log("delete",_id)
        console.log(`${API_URL}/notes/` +_id)
        const confirm = window.confirm("Would you like to Delete?");
        if(confirm){
            axios.delete(`${API_URL}/notes/` +_id)
            .then(res => {
                navigate(`/viewnotes`)
                location.reload();
              
            }).catch(err => console.log(err));
        }
    }


  return (
   <div>
    
     <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-150 heads viewnotesss '  >
        
        <h1 className='notes_heading'>List of Notes</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>


        <div className='d-flex justify-content-start'>
        <Link to="/home" className='btn btn-danger addbutton'>Home</Link>
       
       

         
            <Link to="/notes" className='btn btn-success addbutton'>Add +</Link>
            {/* <input placeholder='Enter heading' type='search' className='search_input'/>
            <Button variant="outline-secondary">Search</Button> */}

        </div>
        <div>.</div>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Heading</th>
                    <th>Details</th>

                   
                    <th>Action</th>


                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) =>(
                        <tr key={i}>
                            <td>{d.heading}</td>
                            <td>{d.fname}</td>
                            
                            <td>

                                <Link to={`/update/${d._id}`} className='btn btn-sm btn-info me-2'>Edit</Link>
                                <button  onClick={ e => handledelete(d._id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>



                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        </div>
        
   </div>
  )
}