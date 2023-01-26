import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper";
import OurServices from './HomeComponent.jsx/OurServices';
import OurStory from './HomeComponent.jsx/OurStory';
import OurFeature from './HomeComponent.jsx/OurFeature';
import OurDelivery from './HomeComponent.jsx/OurDelivery';
import OurContact from './HomeComponent.jsx/OurContact';
import Testimonials from './HomeComponent.jsx/Testimonials';
import OurApp from './HomeComponent.jsx/OurApp';
import NewsLetter from './HomeComponent.jsx/NewsLetter';

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
