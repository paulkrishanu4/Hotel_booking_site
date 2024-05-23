import React from 'react'
import './Property.css'
import {Link} from 'react-router-dom'

export const Outdoor = () => {
  return (
    <div className="property">
       <div className="p1" style={{textAlign:"center"}}>
       <Link to="/Booking"><img src="./images/outdoor1.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/outdoor2.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/outdoor3.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/outdoor4.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      
    </div>
  )
}
