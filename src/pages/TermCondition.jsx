import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import TermConditionHero from '../component/Term&Condition/TermConditionHero'
import TermConditionLayout from '../component/Term&Condition/TermConditionLayout'
export default function TermCondition() {
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

<TermConditionHero/>
<TermConditionLayout/>
</div>
<Footer/>


    </div>
</>
  )
}
