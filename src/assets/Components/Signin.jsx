import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Signin = () => {
  return (
    <div style={{Width:"100%",border:"2px solid black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
      <form style={{margin:"20px",maxWidth:"40%"}}>
      <h3>Sign in or create an account</h3>
      <div className="input" style={{display: 'flex', flexDirection: 'column',gap:"5px"}}>
      <label for="email">Email address</label>
      <input type="email" id="email"></input>
      <button>Continue with gmail</button>
      </div>
      <div className="child" >
        <p style={{textAlign:"center"}}>or use one of these options</p>
        <div className="icons" style={{display:"flex",justifyContent: "space-evenly",alignItems:"center",fontSize:"30px"}}>
          <FaSquareFacebook/>
          <FcGoogle/>
          <FaApple/>
        </div>
        <p style={{fontSize:"10px",paddingTop:"30px",textAlign:"center"}}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
        <p style={{fontSize:"10px",textAlign:"center"}}>All rights reserved.</p>
        <p style={{fontSize:"10px",textAlign:"center"}}>Copyright (2006 - 2024) - Booking.com™</p>
      </div>
      </form>
    </div>
  )
}
