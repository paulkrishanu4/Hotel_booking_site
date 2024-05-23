import React from 'react'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  const [message,setMessage] = useState();
  const [gmail,setGmail]=useState();

  function notify (e) {
    toast.success('Form submitted!', {
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

  function handlesubmit(e){
    e.preventDefault();
    const data={
      Message:message,
      Mail:user.name
    }
    axios.post('https://sheetdb.io/api/v1/pbc6oym45n6iu',data).then((response)=>{
      console.log(response);
      setGmail('');
      setMessage('');
     
    })
  }

  function single(e){
    handlesubmit(e);
    notify(e);
  }
  return (
    <div style={{marginLeft:"20px",marginTop:"100px",marginBottom:"200px",display:"flex",flexDirection:"column",gap:"10px",width:"70%"}}>
      <h1>Message Customer Service</h1>
      <textarea rows="5" style={{outline:"none"}} placeholder="Please write your message here..." onChange={(e)=>{setMessage(e.target.value)}} value={message}></textarea>
      <h5>Your Email:</h5>
      {isAuthenticated ? 
        <h5> {user.name}</h5>:<h5>Please Login first otherwise we will not get your mail id.</h5>}
      <button style={{width:"30%",background:"green",color:"white",padding:"5px",borderRadius:"5px",border:"none"}} onClick={(e)=>{single(e)}}>SEND</button>
      <ToastContainer/>
    </div>
  )
}
