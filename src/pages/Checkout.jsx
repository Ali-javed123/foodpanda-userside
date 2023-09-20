import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import CheckoutHero from '../component/Checkout/CheckoutHero'
import CheckoutLayout from '../component/Checkout/CheckoutLayout'
export default function Checkout() {
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
<CheckoutHero/>
<CheckoutLayout/>
</div>
<Footer/>



</div>
  )
}
