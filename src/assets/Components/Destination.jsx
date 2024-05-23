import React from 'react'
import "./Destination.css"
import {Link} from 'react-router-dom'

export const Destination = () => {
  return (
    <div className="des"style={{textAlign: 'center',marginTop:"100px"}}>
      <h1>Trending Destinations</h1>
      <p>Travellers searching for India also booked these</p>
      <div className="img">
      <div className="row1">
        <div className="image1">
        <Link to="/Booking"><img src="./images/place1.jpg"></img></Link>
          <div className="text" style={{marginTop:"-80px" ,marginLeft:"30px",display:"flex", alignItems:"center"}}>
          <h1 style={{color:"White",position:"absolute"}}>Anjuna</h1>
          <img src="./images/india.png" style={{height:"40px", width:"60px",position:"absolute",marginLeft:"150px"}}></img>
          </div>
        </div>
        <div className="image1">
        <Link to="/Booking"><img src="./images/place2.jpg"></img></Link>
          <div className="text" style={{marginTop:"-80px" ,marginLeft:"30px",display:"flex", alignItems:"center"}}>
          <h1 style={{color:"White",position:"absolute"}}>Calangute </h1>
          <img src="./images/india.png" style={{height:"40px", width:"60px",position:"absolute",marginLeft:"150px"}}></img>
          </div>
        </div>
       
      </div>
      <div className="row2">
      <div className="image1">
      <Link to="/Booking"><img src="./images/place3.jpg"></img></Link>
          <div className="text" style={{marginTop:"-80px" ,marginLeft:"30px",display:"flex", alignItems:"center"}}>
          <h1 style={{color:"White",position:"absolute"}}>Candolim </h1>
          <img src="./images/india.png" style={{height:"40px", width:"60px",position:"absolute",marginLeft:"150px"}}></img>
          </div>
        </div>
        <div className="image1">
        <Link to="/Booking"><img src="./images/place4.jpg"></img></Link>
          <div className="text" style={{marginTop:"-80px" ,marginLeft:"30px",display:"flex", alignItems:"center"}}>
          <h1 style={{color:"White",position:"absolute"}}>Vagator </h1>
          <img src="./images/india.png" style={{height:"40px", width:"60px",position:"absolute",marginLeft:"150px"}}></img>
          </div>
        </div>
        <div className="image1">
        <Link to="/Booking"><img src="./images/place5.jpg"></img></Link>
          <div className="text" style={{marginTop:"-80px" ,marginLeft:"30px",display:"flex", alignItems:"center"}}>
          <h1 style={{color:"White",position:"absolute"}}>Baga</h1>
          <img src="./images/india.png" style={{height:"40px", width:"60px",position:"absolute",marginLeft:"150px"}}></img>
          </div>
        </div>
      
      </div>
      </div>
    </div>
  )
}
