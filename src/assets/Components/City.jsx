import React from 'react'
import "./Property.css"
import {Link} from 'react-router-dom'

export const City = () => {
  return (
    <div className="property">
       <div className="p1" style={{textAlign:"center"}}>
       <Link to="/Booking"><img src="./images/city1.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/city2.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/city3.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/city4.jpg"></img></Link>
        <h5>Hotels</h5>
      </div>
      
    </div>
  )
}
