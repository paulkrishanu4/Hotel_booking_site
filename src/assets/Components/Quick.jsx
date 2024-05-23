import React from 'react'
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuBike } from "react-icons/lu";
import { MdLocationCity } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import {useState} from 'react';
import {Beach} from './Beach';
import {Outdoor} from './Outdoor';
import {City} from './City';
import {Romance} from './Romance';

export const Quick = () => {
  const [beach,setBeach]=useState(true);
  const [color1,setColor1]=useState("purple");
  const [outdoor,setOutdoor]=useState(false);
  const [color2,setColor2]=useState("black");
  const [city,setCity]=useState(false);
  const [color3,setColor3]=useState("black");
  const [romance,setRomance]=useState(false);
  const [color4,setColor4]=useState("black");

  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
      <h3>Quick and easy trip planner</h3>
      <p>Pick a vibe and explore the top destinations in India</p>
      <div className="category" style={{display:"flex", gap:"30px",marginTop:"30px",marginLeft:"30px"}}>
        <h4 id="bch" onClick={()=>{setColor1("purple"),setColor2("black"),setColor3("black"),setColor4("black"),setOutdoor(false);setCity(false);setRomance(false);setBeach(true)}} style={{cursor:"pointer",color:`${color1}`}}><FaUmbrellaBeach/> Beach </h4>
        <h4 onClick={()=>{setColor1("black"),setColor2("purple"),setColor3("black"),setColor4("black"),setOutdoor(true);setCity(false);setRomance(false);setBeach(false)}} style={{cursor:"pointer",color:`${color2}`}}><LuBike/> Outdoors</h4>
        <h4 onClick={()=>{setColor1("black"),setColor2("black"),setColor3("purple"),setColor4("black"),setOutdoor(false);setCity(true);setRomance(false);setBeach(false)}} style={{cursor:"pointer",color:`${color3}`}}><MdLocationCity/> City</h4>
        <h4 onClick={()=>{setColor1("black"),setColor2("black"),setColor3("black"),setColor4("purple"),setOutdoor(false);setCity(false);setRomance(true);setBeach(false)}} style={{cursor:"pointer",color:`${color4}`}}><GiSelfLove/> Romance</h4>
      </div>
      <div className="content">
        {beach && <Beach></Beach>}
        {outdoor && <Outdoor></Outdoor>}
        {city && <City></City>}
        {romance && <Romance></Romance>}

      </div>
    </div>
  )
}
