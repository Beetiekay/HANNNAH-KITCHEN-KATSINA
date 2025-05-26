import React from 'react'
import bg from "../assets/image1.jpg"
import {FaGooglePlay} from "react-icons/fa"

const Home = () => {
  return (
    <div className='overflow-hidden'>
    
      <img src={bg} className='object-cover w-full h-full absolute'/>
      <div className='relative flex justify-center bg-black bg-opacity-35 items-center w-[100%] h-[100vh] '>
          <div className='flex items-center gap-3'>
            <button className='p-4 rounded-full outline-none border-2 border-black text-redish'><FaGooglePlay size={30}/></button>
            <div>
              <h1 className='text-8xl font-bold'>HUK<span>s</span></h1>
              <p className='text-xl font-bold text-redish translate-x-14 animate-spin scale-150'>DESIGN</p>
            </div>
            
          </div>
          
      </div>
    </div>
  )
}

export default Home