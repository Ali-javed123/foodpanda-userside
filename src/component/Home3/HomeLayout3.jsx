import React from 'react'
import OurServices from '../Home3/HomeComponent3.jsx/OurServices'
import DishesLogo from './HomeComponent3.jsx/DishesLogo'
import QuickDelivery from './HomeComponent3.jsx/QuickDelivery'
import ReservationTable from './HomeComponent3.jsx/ReservationTable'
import OurFeature from '../../component/Home/HomeComponent.jsx/OurFeature'
import Offer from '../../../src/component/Home2/HomeComponet2/Offer'
import Testimoniel from '../Home2/HomeComponet2/Testimoniel'
import ContactUs from './HomeComponent3.jsx/ContactUs'
import OurBlog from '../Home2/HomeComponet2/OurBlog'
export default function HomeLayout3() {
  return (
    <>
    <OurServices/>
    <ReservationTable/>
    <DishesLogo/>
    <QuickDelivery/>
    <OurFeature/>
    <Offer/>
    <ContactUs/>
    <Testimoniel/>
    <OurBlog/>
    </>
  )
}

