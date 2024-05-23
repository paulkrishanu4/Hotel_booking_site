import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";


export const Details = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  function notify (e) {
    toast.success('Booking Done!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  };

  const [name,setName]=useState('');
  const [gmail,setGmail]=useState('');
  const [phone,setPhone]=useState('');
  const [checkin,setCheckin]=useState('');
  const [out,setOut]=useState('');
  const [guest,setGuest]=useState('');
  const [time,setTime]=useState('');
  function handlesubmit(e){
    e.preventDefault();
    //console.log(name,gmail,phone,checkin,out,guest,time);
    const data={
      Name:name,
      Email:user.name,
      Phone:phone,
      checkin:checkin,
      checkout:out,
      Guest:guest,
      Time:time
    }
    axios.post('https://sheetdb.io/api/v1/c7silx5zklzso',data).then((response)=>{
      console.log(response);
      setName('');
      setGmail('');
      setPhone('');
      setCheckin('');
      setOut('');
      setGuest('');
      setTime('');
    })
  }

  function single(e){
    handlesubmit(e);
    notify(e);
  }
  return (
    <div style={{display:"flex",flexDirection:"column",gap:"10px",maxWidth:"60%",padding:"20px"}}>
    <h1>Enter your details</h1>
    {isAuthenticated ? <h5>Gmail: {user.name}</h5> : <h3>Signin to Book Properties</h3>}
    <label>Name:</label><input type="text" style={{height:"50px"}} onChange={(e)=>{setName(e.target.value)}} value={name}></input>
    <label>Phone Number</label><input type="t}ext" style={{height:"50px"}} onChange={(e)=>{setPhone(e.target.value)}} value={phone}></input>
    <label>Check-in</label><input style={{height:"50px"}} type="date"onChange={(e)=>{setCheckin(e.target.value)}} value={checkin}></input>
    <label>Check-out</label><input style={{height:"50px"}} type="date" onChange={(e)=>{setOut(e.target.value)}} value={out}></input>
    <label>Number Of Guests:</label><input style={{height:"50px"}} type="number" onChange={(e)=>{setGuest(e.target.value)}} value={guest}></input>
    <label>Your Arival Time:</label><input style={{height:"50px"}} type="text" onChange={(e)=>{setTime(e.target.value)}} value={time}></input>

    <button style={{background:"blue",height:"40px",width:"100px",color:"white"}} onClick={(e)=>{single(e)}}>Submit</button>
    <ToastContainer />
    </div>
  )
}
