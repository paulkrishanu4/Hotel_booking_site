import React from 'react'

export const Footer = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"100px",textAlign:"center",color:"white",background:" #00224f"}}>
      <h3>Stay in the know</h3>
      <p>Sign up to get marketing emails from Booking.com, including promotions, rewards, travel experiences and information about Booking.com’s and Booking.com Transport Limited’s products and services.</p>
      <div className="subscribe" style={{display:"flex",gap:"15px"}}>
        <input type="text" placeholder='Your email address' style={{height:"50px",width:"300px",borderRadius:"10px",outline:"none"}}></input>
        <button style={{height:"50px",width:"100px",textAlign:"center",borderRadius:"10px",background:"#006ce4",color:"white"}}>Subscribe</button>
      </div>
      <p style={{marginTop:"50px"}}>Copyright © 1996–2024 Booking.com™. All rights reserved.</p>

    </div>
  )
}
