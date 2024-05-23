
import './App.css'

import { Navbar } from './assets/Components/Navbar'
import { Navbar2 } from './assets/Components/Navbar2'
import {useState} from 'react'
import { Footer } from './assets/Components/Footer';
import { Routes, Route } from 'react-router-dom'
import { Booking } from './assets/Components/Booking';
import { Home } from './Home';
import { Details } from './assets/Components/Details';
import { Contact } from './assets/Components/Contact';

function App() {
  const [show,setShow]=useState(false);
 

  return (
    <>
    <Navbar show={show} setShow={setShow}></Navbar>
    {show && <Navbar2></Navbar2>}
    <Routes>
    <Route path='/' element={<Home></Home>}/>
      <Route path='/Booking' onClick={()=>{showPage(!page)}} element={<Booking></Booking>}/>
      <Route path='/Details' element={<Details></Details>}/>
      <Route path='/Contact' element={<Contact></Contact>}/>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
