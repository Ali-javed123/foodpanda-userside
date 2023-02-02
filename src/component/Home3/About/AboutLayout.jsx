import React from 'react'
import OurStory from '../../Home2/HomeComponet2/OurStory'
import ReservationTable from '../HomeComponent3/ReservationTable'
import OurServices from '../HomeComponent3/OurServices'
import ContactUs from '../HomeComponent3/ContactUs'
import QuickDelivery from '../HomeComponent3/QuickDelivery'
import OurApp from '../../Home/HomeComponent/OurApp'
import NewsLetter from '../../Home/HomeComponent/NewsLetter'
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
