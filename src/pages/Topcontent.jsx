import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Topcontent.css';

export const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent-container'>
            <h1>Hi there! Nice to see you.</h1>
            <div>
                <h3><span style={{color: "green"}}>Notes Free</span> is one of the highest-rated note-taking apps </h3>
                <p> If you're looking for the simplest solution without fancy additional features, this is it.</p>
            </div>

            <p>The interface has a simple layout, delicate, brownish colors and it's super easy-to-use.</p>
            <p style={{display:"flex", justifyContent:"center"}}>Come on! The time is ticking. </p>

            
            
            <Link to='/viewnotes' smooth={true} duration={500}>
            <button className='topcontent-myworkbutton'>My Work</button>
            
            </Link>
            <Link to='/notes' smooth={true} duration={500}>
            <button className='topcontent-downloadbutton'>Try Notes for Free</button>

            
            </Link>
            <p className="credit">No credit card required</p>

            <p><span style={{color:"aqua"}}>*</span> If you want your notes to be concise and brief, use abbreviations and symbols.</p>
            <p><span style={{color:"aqua"}}>*</span> Write in bullets and phrases instead of complete sentences. </p>
            <p><span style={{color:"aqua"}}>*</span> This will help your mind and hand to stay fresh during class and will help you access things easier.</p>
            <p><span style={{color:"aqua"}}>*</span> It will also help you focus on the main concepts.
</p>

        </div>
    </div>
  )
}
