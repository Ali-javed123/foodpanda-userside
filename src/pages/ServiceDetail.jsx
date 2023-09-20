import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import ServiceDetailLayout from '../component/ServiceDetail/ServiceDetailLayout'
import ServiceDetailHero from '../component/ServiceDetail/ServiceDetailHero'
export default function ServiceDetail() {
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

<ServiceDetailHero/>
<ServiceDetailLayout/>
</div>
<Footer/>


    </div>
</>
  )
}
