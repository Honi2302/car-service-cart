import React from 'react'
import Navimage from "./Navimage";
import CarSelector from "./Enquiry"
import Category from "./CategoryList";
import Navbar from "./Nabar"

const Home = () => {
  return (
    <div>
      <div className="header-container">
    <Navimage/>
    <Navbar/>
    </div>
    <Category/>
    <CarSelector/>
    </div>
  )
}

export default Home
