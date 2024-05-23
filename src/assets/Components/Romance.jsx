import React from 'react'
import {Link} from 'react-router-dom'

export const Romance = () => {
  return (
    <div className="property">
    <div className="p1" style={{textAlign:"center"}}>
    <Link to="/Booking"><img src="./images/romance1.jpg"></img></Link>
     <h5>Hotels</h5>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/romance2.jpg"></img></Link>
     <h5>Hotels</h5>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/romance3.jpg"></img></Link>
     <h5>Hotels</h5>
   </div>
   <div className="p1" style={{textAlign:"center"}}>
   <Link to="/Booking"><img src="./images/romance4.jpg"></img></Link>
     <h5>Hotels</h5>
   </div>
   
 </div>
  )
}
