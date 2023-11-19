import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';
//import {BrowserRouter ,Route,Router} from 'react-router-dom';
//import { Joinwithme } from '../Withme/withme';

export const Header = () => {
  return (
    <div className='Header'>
        <div className='Header-left'>
            <h1>MOHAN<span className='spantag'>NOTES</span></h1>
        </div>
        <div className='Header-right'>
            <Link to='/about' smooth={true} duration={500}  style={{ textDecoration: 'none' }}>
                <h4>
                    About Us
                </h4>
            </Link>
            <Link to='/notes' smooth={true} duration={500}  style={{ textDecoration: 'none' }}>
                <h4>
                    Notes
                </h4>
            </Link>
          
            
            
            <Link to='/contact' smooth={true} duration={500}  style={{ textDecoration: 'none' }}>
                <h4>
                    Contact
                </h4>
            </Link>
           

        </div>

    </div>
  )
}
