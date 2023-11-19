import { useState } from 'react'
import Signup from './pages/Signup';
import './App.css'
import Login from './pages/Login';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Viewnotes from './pages/Viewnotes';
import Update from './pages/Update';
import Contact from './Contact/Contact';
import { About } from './Contact/About';




function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/notes' element={<Notes/>} />

      <Route path='/home' element={<Home/>}/>
      <Route path='/viewnotes' element={<Viewnotes/>}/>
      <Route path='/update/:_id' element={<Update/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>




      



    </Routes>
     </>
  )
}

export default App
