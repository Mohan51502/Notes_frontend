import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Notes.css";
import API_URL from '../config/api';


import { Link, useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate = useNavigate();


    const [inpval, setInpval] = useState({
        heading:"",
        fname: "",
       
        userid: "",
    });

const userid = localStorage.getItem("_id");
//console.log(userid);


    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const addQuerydata = async (e) => {
        e.preventDefault();

        const {heading,fname } = inpval;

        if (heading === "") {
            toast.warning("Heading is required!", {
                position: "top-center"
            });
        } else if(fname === "") {
            toast.warning("Notes is required!", {
                position: "top-center"
            });
        } 
         else {
            // console.log("user registration succesfully done");


            const data = await fetch(`${API_URL}/notes/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                heading,  fname,userid
                })
            });
           // console.log(data)


            const res = await data.json();
            // console.log(res.status);

            if (res.status === 200) {
                toast.success("Notes Added Successfully  😃!", {
                    position: "top-center"
                });
                setInpval({ ...inpval, heading: "", fname: "" ,userid:""});
                // navigate("/home");
            }
        }
    }

    return (
        <>
            <section>
                <div className=" heading_notes">
                    <div className=" form_headingss ">
                        <h1>Add Notes</h1>
                        {/* <p style={{ textAlign: "center" }}></p> */}
                    </div>

                    <form>
                    <div className="form_input">
                            <label htmlFor="Heading"><h2>Heading :</h2></label>
                            <input type="text" onChange={setVal} value={inpval.heading} name="heading" id="heading" placeholder='Enter Heading' />
                        </div>
                        
                    <div className="form_input">
                            <label htmlFor="Name">
                                <h2>Notes :</h2>
                            </label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter Notes' />
                        </div>
  
                     
                                            

                       
                        <Link to={`/home`} className='btn  btn-info me-2 butt' style={{color:"white"}}>Home</Link>
                        <button className='btn butt' onClick={addQuerydata}>Create</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Notes;