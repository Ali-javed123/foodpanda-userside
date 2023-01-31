import React from 'react'
import OurStory from '../../Home2/HomeComponet2/OurStory'
import ReservationTable from '../HomeComponent3.jsx/ReservationTable'
import OurServices from '../HomeComponent3.jsx/OurServices'
import ContactUs from '../HomeComponent3.jsx/ContactUs'
import QuickDelivery from '../HomeComponent3.jsx/QuickDelivery'
import OurApp from '../../Home/HomeComponent.jsx/OurApp'
import NewsLetter from '../../Home/HomeComponent.jsx/NewsLetter'
export default function AboutLayout() {
  return (
    <>
    <OurStory/>
    <ReservationTable/>
    <OurServices/>
    <ContactUs/>
    <QuickDelivery/>
    <OurApp/>
    <NewsLetter/>
    </>
  )
}
