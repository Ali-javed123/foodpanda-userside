import React from 'react'
import OurStory from '../Home2/HomeComponet2/OurStory'
import OurServices from '../Home/HomeComponent.jsx/OurServices'
import OurFeature from '../Home2/HomeComponet2/OurFeature'
import Offer from './HomeComponet2/Offer'
import Testimoniel from './HomeComponet2/Testimoniel'
import Testimonials from '../Home/HomeComponent.jsx/Testimonials'
import OurApp from '../Home/HomeComponent.jsx/OurApp'
import OurBlog from './HomeComponet2/OurBlog'
import OurContactUs from './HomeComponet2/OurContactUs'
export default function HomeLayout2() {
  return (
    <>
    <OurStory/>
    <OurServices/>
    <OurFeature/>
    <Offer/>
    {/* <Testimonials /> */}
    <Testimoniel/>
    <OurApp/>
    <OurBlog/>
    <OurContactUs/>
    </>
  )
}
