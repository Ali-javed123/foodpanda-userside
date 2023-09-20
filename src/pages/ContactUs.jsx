import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import ContactUsHero from '../component/ContactUS/ContactUsHero'
import ContactUsLayout from '../component/ContactUS/ContactUsLayout'
export default function ContactUs() {
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
<div class="page-wrapper ">

    <div className="switch-theme-mode">
  <label id="switch" className="switch">
    <input type="checkbox" onChange={()=>{Mode();setmode(!mode)}} id="slider" />
    <span className="slider round" />
  </label>
</div>
<Navbar/>

    <div class="content-wrapper">
<ContactUsHero/>
<ContactUsLayout/>
</div>
<Footer/>



</div>
  )
}
