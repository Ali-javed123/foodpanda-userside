import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import ResertionHero from '../component/Reservation/ResertionHero'
import ReservationLayout from '../component/Reservation/ReservationLayout'
import HomeLayout3 from '../component/Home3/HomeLayout3'
import HomeHero from '../component/Home/HomeHero'
export default function Reservation() {
    const [mode,setmode]=useState(false)
    const id=document.getElementById("theme")
    const Mode=()=>{
        if(mode){
            id.setAttribute("class", "theme-light");
        }
        if(!mode){
            id.setAttribute("class", "theme-dark");
        }
    }
  return (
<>

    <div className="switch-theme-mode">
  <label id="switch" className="switch">
    <input type="checkbox" onChange={()=>{Mode();setmode(!mode)}} id="slider" />
    <span className="slider round" />
  </label>
</div>
    <div class="page-wrapper ">
<Navbar/>
<div class="content-wrapper">

<ResertionHero/>
<ReservationLayout/>
</div>
<Footer/>


    </div>
</>
  )
}
