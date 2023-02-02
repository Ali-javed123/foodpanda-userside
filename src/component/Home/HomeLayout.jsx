import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
import OurServices from './HomeComponent/OurServices';
import OurStory from './HomeComponent/OurStory';
import OurFeature from './HomeComponent/OurFeature';
import OurDelivery from './HomeComponent/OurDelivery';
import OurContact from './HomeComponent/OurContact';
import Testimonials from './HomeComponent/Testimonials';
import OurApp from './HomeComponent/OurApp';
import NewsLetter from './HomeComponent/NewsLetter';

export default function HomeLayout() {
  return (
    <>
    
  <OurStory/>
<OurServices/>
 <OurFeature/>
<OurDelivery/>
  <OurContact/>
 <Testimonials/>
  <OurApp/>
  <NewsLetter/>


    </>
  )
}
