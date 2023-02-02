import React,{useState} from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

import ShopGirdHero from '../component/ShopGird/ShopGirdHero'
import ShopGirdLayout from '../component/ShopGird/ShopGirdLayout'
export default function ShopGird() {
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
<ShopGirdHero/>
<ShopGirdLayout/>
<Footer/>
<a href="javascript:void(0)" class="back-to-top"><i class="las la-arrow-up"></i></a>


    </div>
</>
  )
}
