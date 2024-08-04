import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
// import { useState } from 'react';


const Carousel = () =>{
  
  const downArrow=()=>{
    const aboutMeSection = document.getElementById('about');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-white text-6xl animate-pulse duration-500 delay-200">PARTH MISHRA</h1>
      <h1 className="font-bold text-white text-6xl animate-pulse duration-500 delay-200">PORTFOLIO</h1>
      
      <h2 className='text-white mt-8 text-xl font-sans'>Web Developer:Transforming ideas into digital realities.</h2>
      <ChevronDownIcon  className='bg-deeprich w-10 h-10 text-white mt-8 cursor-pointer hover:text-orange-500' onClick={downArrow}/>
    </div>
  )
}

export default Carousel