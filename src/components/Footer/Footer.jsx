import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className='p-30 max-w-[1000] cursor- mt-20 mx-72 '>
      <div className='flex gap-6 w-30 mb-10'>
        <FaFacebookF className='size-8'/>
        <FaInstagram className='size-8'/>
        <FaTwitter className='size-8'/>
        <IoLogoYoutube className='size-8'/>
      </div>
      <ul className='grid grid-cols-4 gap-10 mb-10 list-none font-head text-lg'>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-bckgr font-head'>© 1997-2024 Netflix,Inc.</p>
    </div>
  )
}

export default Footer