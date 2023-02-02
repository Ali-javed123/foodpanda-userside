import React,{useState} from 'react'
import Footer from '../component/Footer'
import FaqHero from '../component/Faq/FaqHero'
import FaqLayout from '../component/Faq/FaqLayout'
import Navbar from '../component/Navbar'
export default function Faq() {
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
<FaqHero/>
<FaqLayout/>

<Footer/>
<a href="javascript:void(0)" class="back-to-top"><i class="las la-arrow-up"></i></a>


    </div>
</>
  )
}
