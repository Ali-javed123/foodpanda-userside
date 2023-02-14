import React from 'react'
import Feature from './ShopSingleComponent/Feature'
import SingleCrousel from './ShopSingleComponent/SingleCrousel'
import ShopSingleHero from './ShopSingleHero'
import OurFeature from '../../../src/component/Home2/HomeComponet2/OurFeature' 
export default function ShopSingleLayout() {
  return ( 
    <>
<SingleCrousel />
<Feature/>
<OurFeature/>
    </>
  )
}
