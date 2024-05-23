import { MdOutlineContactSupport } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import './Navbar.css';
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


export const Navbar = ({show,setShow}) => {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  function toggle(){
    setShow(!show);
  }
  
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <h1>Booking.com</h1>
      </div>
      <div className="nav-right">
        <ul>
        <Link to="/"><li>Home</li></Link>
          <li id='ind'>IND</li>
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
        <TiThMenu id="menu" onClick={()=>{toggle()}}></TiThMenu>
      </div>
      
    </div>
    </>
  )
}
