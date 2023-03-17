import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import React, { useEffect, useState } from 'react';

import { Autoplay, Pagination ,Navigation} from "swiper";
import OurServices from './HomeComponent/OurServices';
import OurStory from './HomeComponent/OurStory';
import OurFeature from './HomeComponent/OurFeature';
import OurDelivery from './HomeComponent/OurDelivery';
import OurContact from './HomeComponent/OurContact';
import Testimonials from './HomeComponent/Testimonials';
import OurApp from './HomeComponent/OurApp';
import NewsLetter from './HomeComponent/NewsLetter';
import OurBlog from '../Home2/HomeComponet2/OurBlog';
import BaseUrl from '../../config/BaseUrl';
import axios from 'axios';

export default function HomeLayout() {
  const Token=localStorage.getItem('token');
  const [Data,SetData]=useState([])
  useEffect(() => {
    getApi()
}, [])

  const getApi = async () => {
    // setLoad(true)

    try {
        const config = {
            Accept: 'application/json',
            Authorization: `Bearer ${Token}`
          }
      const response = await axios.get(`${BaseUrl.baseUrl}/breed/`, {
        headers: config
      })
      console.log("Logo response", response.data.data.image)
      // setLoad(false)

      SetData(response.data.data)
    } catch (error) {
      // setLoad(false)
      console.log(error)
    }
  }
  return (
    <>
    
  {/* <OurStory/> */}
{/* <OurServices/> */}
 {/* <OurFeature/> */}
<OurDelivery/>
  <OurContact/>
 {/* <Testimonials/> */}
  <OurApp/>
  {/* <NewsLetter/> */}

<OurBlog/>
    </>
  )
}
