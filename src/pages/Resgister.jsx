import React,{useState} from 'react'
import Footer from '../component/Footer'
import RegisterHero from '../component/Register/RegisterHero'
import RegisterLayout from '../component/Register/RegisterLayout'
import Navbar from '../component/Navbar'
export default function Register() {
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

<RegisterHero/>
<RegisterLayout/>
</div>
<Footer/>


    </div>
</>
  )
}
