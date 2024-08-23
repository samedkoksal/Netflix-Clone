import React, { useEffect, useRef } from 'react';
import '../../index.css';
import netflix from '../../assets/netflix.png';
import profile from '../../assets/profile.svg';
import { CiBellOn } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {logOut} from '../../firebase'

function Header() {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 80) {
          navRef.current.style.backgroundColor = 'black';
        } else {
          navRef.current.style.backgroundColor = 'transparent';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="font-head w-full px-[3.5%] py-3 flex justify-between text-sm text-white bg-gradient-to-b from-black/80 to-transparent z-50 fixed transition-all duration-300"
    >
      <div className='flex items-center gap-8'>
        <img className='w-21 h-8 mr-10 cursor-pointer' src={netflix} alt="Netflix Logo" />
        <ul className='flex gap-4 cursor-pointer text-md'>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='flex items-center gap-3'>
        <CiSearch className='text-3xl size-6 cursor-pointer' />
        <p>Samed</p>
        <div className="cursor-pointer">
          <CiBellOn className='size-6 ' />
        </div>
        <div id='profile' className="flex items-center gap-2 cursor-pointer relative">
          <img className='w-9 rounded' src={profile} alt="" />
          <FaCaretDown />
          <div id='down-btn' className='absolute py-4 px-5 top-9 right-0 w-max rounded underline z-10 bg-ff hidden'>
            <p onClick={() => {logOut()}} className='text-s cursor-pointer'>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
