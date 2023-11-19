import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import API_URL from '../config/api';





function Update() {

  const [data ,setData] = useState([])
  const navigate = useNavigate();

  const {_id} = useParams();
  console.log(_id);

  
  const [inpval, setInpval] = useState({
    heading:"",
    fname: "",
   
});


const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
   // console.log(data);
   setData({...data,[name]:value})

    // setData(() => {
    //     return {
    //         ...inpval,
    //         [name]: value
    //     }
    // })navigate("/viewnotes")
};
function handleupdate(){
    console.log(data)
    axios.put(`${API_URL}/notes/`+ _id,data)
    .then(res => {
        navigate(`/viewnotes`)
      //  location.reload();
      
    })
      
      .catch(err =>console.log(err))

}

  useEffect(()=>{
      axios.get(`${API_URL}/notes/getUser/`+ _id)
      .then(res =>setData(res.data.data))
     // console.log(res.data)
      .catch(err =>console.log(err))

  },[])
  return (
    <div>
        <section>
                <div className="heading_notes">
                    <div className="form_headingss">
                        <h1>Update Notes</h1>
                     
                    </div>

                    <form>
                    <div className="form_input">
                            <label htmlFor="heading"><h2>Heading :</h2></label>
                            <input type="text"  name="heading" id="heading" onChange={setVal} placeholder='Enter Heading' value={data.heading}/>
                        </div>
                        <div className="form_input">
                            <label htmlFor="fname"><h2>Details :</h2></label>
                            <input type="text-area" onChange={setVal}  name="fname" id="fname" placeholder='Enter Notes' value={data.fname}/>
                        </div>


                        <button className='btn butt' onClick={handleupdate}>Update </button>
                        <Link to={`/home`} className='btn  btn-info me-2 butt' style={{color:"white"}}>Home</Link>

                    </form>
                    <ToastContainer />
                </div>
            </section>
    </div>
  )
}

export default Update;