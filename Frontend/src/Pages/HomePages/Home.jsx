import React from 'react';
import BannerArrow from '../../Components/HomeComp/BannerArrow';
import HeroBanner from '../../Components/HomeComp/HeroBanner';
import OfferSlide from '../../Components/HomeComp/OfferSlide';
import BrandProduct from '../../Components/HomeComp/BrandProduct';
import Category from '../../Components/HomeComp/Category';
import HomeFooter from '../../Components/HomeComp/HomeFooter';

const Home = () => {
  return (
    <>
    {/* <HeroBanner/> */}
    <OfferSlide/>
    <BrandProduct/>
    <Category/>
    <HomeFooter/>
    </>
  )
}

export default Home