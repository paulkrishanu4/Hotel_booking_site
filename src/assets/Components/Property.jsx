import React from 'react'
import './Property.css'
import {Link} from 'react-router-dom'

export const Property = () => {
  return (
    <div className="parent">
    <h2 style={{padding:"30px"}}>Browse by property type</h2>
    <div className="property">
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/hotels.jpeg"></img></Link>
        <h5>Hotels</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/holiday homes.jpeg"></img></Link>
        <h5>Holiday Homes</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/guest houses.jpeg"></img></Link>
        <h5>Guest Houses</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/cabins.jpeg"></img></Link>
        <h5>Cabins</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/apartments.jpeg"></img></Link>
        <h5>Apartments</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/resorts.jpeg"></img></Link>
        <h5>Resorts</h5>
      </div>
      <div className="p1" style={{textAlign:"center"}}>
      <Link to="/Booking"><img src="./images/hostels.jpeg"></img></Link>
        <h5>Hostels</h5>
      </div>
  
    </div>
    </div>
  )
}
