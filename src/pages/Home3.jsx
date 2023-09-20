import React,{useState} from 'react'
import Footer from '../component/Footer'
import HomeHero2 from '../component/Home2/HomeHero2'
import HomeHero3 from '../component/Home3/HomeHero3'
import HomeLayout3 from '../component/Home3/HomeLayout3'
import Navbar from '../component/Navbar'
export default function Home3() {
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

<HomeHero3/>
<HomeLayout3/>
</div>
<Footer/>


    </div>
</>
  )
}
