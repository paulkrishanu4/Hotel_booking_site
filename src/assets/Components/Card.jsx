import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.css";

export const Card = ({src,name,price,pet,pool,ac,wifi}) => {
  return (
    <div className="card" style={{minHeight:"300px",maxWidth:"100%",padding:"20px",margin:"30px",display:"flex",border:"2px solid black"}}>
      <img src={src} style={{maxWidth:"30%"}}></img>
      <div className="details" style={{margin:"5px"}}>
      <h3>{name}</h3>
      <p>Price: <span style={{background:"green", color:"white",padding:"5px",borderRadius:"5px"}}>Rs. {price}</span> per night</p>
      <div style={{display:"flex",flexDirection:"column"}}>
      <h5>Facilities:</h5>
      {pet==="yes"?<a>Pets Allowed</a>:<a>Pets not allowed</a>}
      {pool=='yes'?<a>Swimming Pool</a>:<a>No Swimming Pool</a>}
      {ac=='yes'?<a>Air Conditioning Rooms</a>:<a>No air conditioning rooms</a>}
      {wifi==="yes"?<a>Free Wifi available</a>:<a>No wifi</a>}
      </div>
      </div>
      <Link to="/Details"><button style={{height:"40px",minWidth:"100px",background:"#006ce4",color:"white",border:"none",borderRadius:"5px"}}>Book Now</button></Link>
    </div>
  )
}
