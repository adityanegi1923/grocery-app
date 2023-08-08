import React from 'react'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'
import Footer from '../components/Footer'
import '../css/Contactus.css'
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter, FaPhone, FaMailBulk, FaLocationArrow } from "react-icons/fa";
const Contactpage = () => {
  return (
    <div className='contact-page'>
      <Navbar />
      <BottomNavbar />
    </div>
  )
}

export default Contactpage

