import React from 'react'
import {Items} from './Info';
import {useState,useEffect} from 'react';
import { Card } from './Card';
import './Booking.css'

export const Booking = () => {
  
  const [star5,setStar5]=useState(false);
  const [star4,setStar4]=useState(false);
  const [star3,setStar3]=useState(false);
  const [hotel,setHotel]=useState(false);
  const [apartment,setApartment]=useState(false);
  const [guesth,setGuesth]=useState(false);
  const [villa,setVilla]=useState(false);
  const [pool,setPool]=useState(false);
  const [ac,setAc]=useState(false);
  const [room,setRoom]=useState(false);
  const [breakfast,setBreakfast]=useState(false);
  const [dinner,setDinner]=useState(false);
  const [wifi,setWifi]=useState(false);
  const [balcony,setBalcony]=useState(false);
  const [resort,setResort]=useState(false);
  const [pet,setPet]=useState(false);
  const [parking,setParking]=useState(false);
  const [location,setLocation]=useState('');
  
  const [data,setData]=useState(Items);

  function applyfilter(){
    let updatelist= Items;
    let five=Items.filter(item => item.Star == 5);
    let four=Items.filter(item => item.Star == 4);
    let three=Items.filter(item => item.Star == 3);
    let h=Items.filter(item => item.Type == "hotels");
    let a=Items.filter(item => item.Type == "apartment");
    let g=Items.filter(item => item.Type == "guest houses");
    let r=Items.filter(item => item.Type == "resorts");
    let v=Items.filter(item => item.Type == "villas");


    //filter fot 5 star
    if(star5){
      updatelist=updatelist.filter(item => item.Star == 5);
    }

    if(star4){
      updatelist=updatelist.filter(item => item.Star == 4);
    }
    if(star3){
      updatelist=updatelist.filter(item => item.Star == 3);
    }
    if(star5 && star4){
      var combine=[...five,...four];
      updatelist=combine;
    }
    if(star5 && star3){
      var combine=[...five,...three];
      updatelist=combine;
    }
    if(star4 && star3){
      var combine=[...four,...three];
      updatelist=combine;
    }
    if(star5 && star4 && star3){
      var combine=[...five,...four,...three];
      updatelist=combine;
    }
    if(hotel){
      updatelist=updatelist.filter(item => item.Type == "hotels");
    }
    if(apartment){
      updatelist=updatelist.filter(item => item.Type == "apartment");
    }
    if(guesth){
      updatelist=updatelist.filter(item => item.Type == "guest houses");
    }
    if(resort){
      updatelist=updatelist.filter(item => item.Type == "resorts");
    }
    if(villa){
      updatelist=updatelist.filter(item => item.Type == "villas");
    }
    if(hotel && apartment){
      var combine=[...h,...a];
      updatelist=combine;
    }
    if(hotel && guesth){
      var combine=[...h,...g];
      updatelist=combine;
    }
    if(hotel && resort){
      var combine=[...h,...r];
      updatelist=combine;
    }
    if(hotel && villa){
      var combine=[...h,...v];
      updatelist=combine;
    }
    if(apartment && guesth){
      var combine=[...g,...a];
      updatelist=combine;
    }
    if(resort && apartment){
      var combine=[...r,...a];
      updatelist=combine;
    }
    if(villa && apartment){
      var combine=[...v,...a];
      updatelist=combine;
    }
    if(guesth && resort){
      var combine=[...g,...r];
      updatelist=combine;
    }
    if(guesth && villa){
      var combine=[...g,...v];
      updatelist=combine;
    }
    if(hotel && apartment && guesth){
      var combine=[...h,...a,...g];
      updatelist=combine;
    }
    if(hotel && resort && guesth){
      var combine=[...h,...r,...g];
      updatelist=combine;
    }
    if(hotel && resort && villa){
      var combine=[...h,...r,...v];
      updatelist=combine;
    }
    if(resort && apartment && guesth){
      var combine=[...r,...a,...g];
      updatelist=combine;
    }
    if(guesth && resort && villa){
      var combine=[...g,...r,...v];
      updatelist=combine;
    }
    if(hotel && apartment && guesth && resort){
      var combine=[...h,...a,...g,...r];
      updatelist=combine;
    }
    if(villa && apartment && guesth && resort){
      var combine=[...v,...a,...g,...r];
      updatelist=combine;
    }
    if(hotel && apartment && guesth && resort && villa){
      var combine=[...h,...a,...g,...r,...v];
      updatelist=combine;
    }

    if(pool){
      updatelist=updatelist.filter(item => item.Swimming_pool == "yes");
    }
    if(ac){
      updatelist=updatelist.filter(item => item.ac == "yes");
    }
    if(room){
      updatelist=updatelist.filter(item => item.Room_service == "yes");
    }
    if(breakfast){
      updatelist=updatelist.filter(item => item.Breakfast == "yes");
    }
    if(dinner){
      updatelist=updatelist.filter(item => item.Dinner == "yes");
    }
    if(wifi){
      updatelist=updatelist.filter(item => item.Wifi == "yes");
    }
    if(balcony){
      updatelist=updatelist.filter(item => item.Balcony == "yes");
    }
    if(parking){
      updatelist=updatelist.filter(item => item.Parking == "yes");
    }
    if(pet){
      updatelist=updatelist.filter(item => item.Pet == "yes");
    }
   if(location.length!=0){
    if(location=='select'){
      updatelist=updatelist;
    }else{
      updatelist=updatelist.filter(item => item.Location == location);
    }
   }

   updatelist.sort(function(a,b){
    return a.Price-b.Price;
   })


    setData(updatelist);
  }

  useEffect(()=>{
    applyfilter();
  },[star5,star4,star3,hotel,apartment,guesth,resort,villa,pool,ac,room,breakfast,dinner,wifi,balcony,parking,pet,location])

 

  return (
    <div className="book">
      <div className="filter">
        <h2>Filter by:</h2>
        <h4>Location:</h4>
        <select id="loc" onChange={(e)=>{setLocation(e.target.value)}}>
        <option value="select">select</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Chennai">Chennai</option>
        <option value="Pune">Pune</option>
        </select>
        <h4>Stars:</h4>
        <ul>
           <li><input type="checkbox" value="5 stars" 
          onChange={()=>{setStar5(!star5)}}/><label>5 star</label></li>
          <li><input type="checkbox" value="5 stars" 
          onChange={()=>{setStar4(!star4)}}/><label>4 star</label></li>
          <li><input type="checkbox" value="5 stars" 
          onChange={()=>{setStar3(!star3)}}/><label>3 star</label></li>
        </ul>
        <h4>Property Type:</h4>
        <ul>
           <li><input type="checkbox" value="hotels" onChange={()=>{setHotel(!hotel)}}></input>  <label>Hotels</label></li>
           <li><input type="checkbox" value="resorts" onChange={()=>{setApartment(!apartment)}} ></input>  <label>Apartments</label></li>
          <li><input type="checkbox" value="guest houses" onChange={()=>{setGuesth(!guesth)}}></input>  <label> Guest houses</label></li>
          <li><input type="checkbox" value="hotels" onChange={()=>{setResort(!resort)}}></input>  <label>Resorts</label></li>
          <li><input type="checkbox" value="hotels" onChange={()=>{setVilla(!villa)}}></input>  <label>Villas</label></li>
        </ul>
        <h4>Facilities:</h4>
        <ul>
           <li><input type="checkbox" value="swimming pool" onChange={()=>{setPool(!pool)}}/>  <label>swimming pool</label></li>
           <li><input type="checkbox" value="Air condition" onChange={()=>{setAc(!ac)}}/>  <label >Air conditioning</label></li>
           <li><input type="checkbox" value="room service" onChange={()=>{setRoom(!room)}}/>  <label >Room Service</label></li>
          <li> <input type="checkbox" value="Breakfast" onChange={()=>{setBreakfast(!breakfast)}} />  <label >Breakfast</label></li>
           <li> <input type="checkbox" value="Dinner" onChange={()=>{setDinner(!dinner)}}></input>  <label>Dinner</label></li>
           <li> <input type="checkbox" value="wifi" onChange={()=>{setWifi(!wifi)}} ></input>  <label >Wifi</label></li>
           <li> <input type="checkbox" value="balcony" onChange={()=>{setBalcony(!balcony)}} ></input>  <label for="vehicle1">Balcony</label></li>
           <li> <input type="checkbox" value="Pets" onChange={()=>{setPet(!pet)}}></input>  <label >Pets allowed</label></li>
           <li> <input type="checkbox" value="parking" onChange={()=>{setParking(!parking)}}></input>  <label>Parking</label></li>
        </ul>

      </div>
      <div className="gallery">
        {
          data.length==0?
            <h1>No data found</h1>:
          data.map((cur,index)=>{
           
            return (<Card key={index} name={cur.Name} src={cur.src} price={cur.Price} pet={cur.Pet} pool={cur.Pool} ac={cur.ac} wifi={cur.Wifi}></Card>)
          })
        }

      </div>
    </div>
  )
}
