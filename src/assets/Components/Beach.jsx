import React from 'react'
import './Property.css'
import {Link} from 'react-router-dom'

export const Beach = () => {
  return (
    <div className="property">
       <div className="p1" style={{textAlign:"center"}}>
       <Link to="/Booking"><img src="./images/beach1.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/beach2.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/beach3.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/beach4.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      
    </div>
  )
}
