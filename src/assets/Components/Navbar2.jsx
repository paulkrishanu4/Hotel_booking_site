import React from 'react'
import { MdOutlineContactSupport } from "react-icons/md";
import './Navbar.css';
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar2 = ({show,setShow}) => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  function toggle(){
    setShow(!show);
  }
  return (
    <div className="navbar2 navbar">
      <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center",alignItems:"center",backgroundColor:' rgb(71, 71, 164)', padding:'30px',position:'relative'}}>
      <Link to="/" style={{color:"white"}}><li>Home</li></Link>
          <li id='ind' style={{color:"white"}}>IND</li>
          <li><Link to="/Contact"><MdOutlineContactSupport id='contact'/></Link></li>
          <li>
          {isAuthenticated && (
      <div>
        <p style={{color:"white",textAlign:"center"}}>Welcome,<br></br>{user.name}</p>
      </div>)
      }
          </li>
          {
            isAuthenticated ? (<li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Sign out</button></li>): (<li><button  onClick={() => loginWithRedirect()}>Sign in</button></li>)
          }
      </ul>
    </div>
  )
}
