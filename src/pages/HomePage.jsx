import React from 'react';  
import Header from '../components/Header/Header';  
import background from '../assets/background_img.jpg';  
import '../index.css';  
import title from '../assets/title.png';  
import play from '../assets/play_icon.png';  
import info from '../assets/info_icon.png';  
import Cards from '../components/Cards/Cards';  
import Footer from '../components/Footer/Footer';  

function HomePage() {  
  return (  
    <div className="w-full h-screen overflow-y-scroll overflow-x-hidden relative">  
      <Header />  
      <div className="relative w-full h-full">  
        <div className="absolute inset-0">  
          <img   
            src={background}   
            alt="background_img"   
            className="w-full h-full object-cover"   
          />  
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>  
        </div>  
        
        <div className="relative w-full h-[75vh] flex flex-col justify-end z-10">  
          <div className="absolute left-0 bottom-32 mx-14 -my-48 text-white py-28 font-head">  
            <img className="box-border mb-2" src={title} alt="Title" />  
            <p className="text-xl mb-2 mt-6 max-w-[585px] break-words">  
              Set in a small mining town dominated by women, the conflict-filled Western received 12 Emmy nominations, including Best Miniseries.  
            </p>  
          </div>  
          <div className="absolute left-0 bottom-44 mx-14 -my-48 font-head flex space-x-3 h-30">        
            <button className="bg-white text-black px-8 py-2.5 rounded flex items-center text-lg font-bold hover:bg-gray-300">   
              <img className='h-6 pr-2' src={play} alt="" /> Play  
            </button>  
            <button className="bg-gray-500/[.6] text-white flex items-center px-6 py-2 text-xl rounded-sm hover:bg-gray-400/[.3]">  
              <img className='mr-2 w-8 h-8' src={info} alt="info icon" />  
              <span>More Info</span>  
            </button>  
          </div>  
        </div>  
        <div className="relative w-full h-auto mt-[13vh] pb-20 z-10 px-2">  
          <Cards />  
        </div>  
        <div className='px-2 ml-1 -mt-28'>  
          <Cards title={"Blockbuster Movies"} category={"top_rated"}/>  
          <Cards title={"Only on Netflix"} category={"popular"}/>  
          <Cards title={"Upcoming"} category={"upcoming"}/>  
          <Cards title={"Top Pics For You"} category={"now_playing"}/>  
        </div>  
        <Footer/>  
      </div>  
    </div>  
  );  
}  

export default HomePage;