import React from 'react'
import { Link } from "react-router-dom";


const HeroBanner = () => {
  return (
    <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(banner4.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Premium Bags Premium Offers</h1>
      <p className="mb-5">
      🔥 Exclusive Deals on Premium Bags! 🔥<br/>
      Get up to 50% OFF on our latest collection. Limited-time offer, grab your style now!
      </p>
      <Link to="/login" className="btn btn-primary">Explore Now</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroBanner