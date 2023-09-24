import React from 'react'
import OurStory from '../Home2/HomeComponet2/OurStory'
import OurServices from '../Home/HomeComponent/OurServices'
import OurFeature from '../Home2/HomeComponet2/OurFeature'
import Offer from './HomeComponet2/Offer'
import Testimoniel from './HomeComponet2/Testimoniel'
import Testimonials from '../Home/HomeComponent/Testimonials'
import OurApp from '../Home/HomeComponent/OurApp'
import OurBlog from './HomeComponet2/OurBlog'
import OurContactUs from './HomeComponet2/OurContactUs'
import ReservationTable from '../Home3/HomeComponent3/ReservationTable'
export default function HomeLayout2() {
  return (
    <>
    <OurStory/>
    <OurServices/>
    <OurFeature/>
    <Offer/>
    <Testimonials />
    <Testimoniel/>
    <OurApp/>
    <ReservationTable/>
    <OurBlog/>
    <OurContactUs/>
    </>
  )
}
