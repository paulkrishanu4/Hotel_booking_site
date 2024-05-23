import React from 'react'
import './Property.css';
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";
import {Link} from 'react-router-dom'

export const Demo = () => {
  return (
    <div style={{marginTop:"50px",marginLeft:"20px"}}>
    <h1>Stay at our top unique properties</h1>
    <div className="property">
    <div className="p1" style={{textAlign:"center"}}>
    <Link to="/Booking"><img src="./images/unq1.webp"></img></Link>
     <h5>Hotel one</h5>
     <h5>Location one</h5>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSLine/>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/unq2.webp"></img></Link>
     <h5>Hotel two</h5>
     <h5>Location two</h5>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSLine/>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/unq3.webp"></img></Link>
     <h5>Hotel three</h5>
     <h5>Location three</h5>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSLine/>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/unq4.webp"></img></Link>
     <h5>Hotel four</h5>
     <h5>Location four</h5>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSFill/>
     <RiStarSLine/>
   </div>
   
 </div>
 </div>
  )
}
