import React from 'react'
import bg from "../assets/stick6.png"
import {FaGooglePlay} from "react-icons/fa"
import { IoMdMenu } from 'react-icons/io'
import logo from "../assets/logo.png"


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='py-4 bg-whitesmoke lg:h-fit md:h-16 h-16 hover:h-fit overflow-hidden lg:px-0 md:px-0 px-2'>
              <div className='fixed lg:hidden md:flex flex top-5 right-4'><IoMdMenu size={25} className='text-redish'/></div>
              <ul className='lg:flex block justify-around items-center'>
                  <div className='flex items-center gap-2 lg:mb-0 md:mb-0 mb-4'>
                      <img src={logo} className='lg:w-14 md:w-14 w-10 animate-spin'/>
                      <p className='font-semibold text-lg'>Hannah kitchen katsina</p> 
                  </div>
      
                  <ul className='lg:flex block items-center gap-10 lg:mb-0 md:mb-0 mb-4'>
                      <li className='hover:font-semibold lg:mb-0 md:mb-0 mb-2 hover:text-redish cursor-pointer duration-700'>Furniture</li>
                      <li className='hover:font-semibold lg:mb-0 md:mb-0 mb-2 hover:text-redish cursor-pointer duration-700'>Designers</li>
                      <li className='hover:font-semibold lg:mb-0 md:mb-0 mb-2 hover:text-redish cursor-pointer duration-700'>Trends</li>
                      <li className='hover:font-semibold lg:mb-0 md:mb-0 mb-2 hover:text-redish cursor-pointer duration-700'>Blogs</li>
                      <li className='hover:font-semibold lg:mb-0 md:mb-0 mb-2 hover:text-redish cursor-pointer duration-700'>About US</li>
                  </ul>
           
                  <div>
                      <button className='lg:p-2 md:p-1 p-2 lg:px-8 md:px-6 px-6 border lg:text-sm md:text-sm text-sm rounded-xl outline-none bg-redish text-lace hover:scale-95'>Sing Up</button>
                  </div>
              </ul>
      </div>
       {/* mid */}
      <img src={bg} className='object-cover w-full h-full absolute'/>
      <div className='relative flex justify-center bg-black bg-opacity-35 items-center w-[100%] h-[100vh] '>
          <div className='flex items-center gap-3'>
            <button className='p-4 rounded-full outline-none border-2 border-black text-redish'><FaGooglePlay size={30}/></button>
            <div>
              <h1 className='text-4xl text-white font-bold'>HANNAH KITCHEN <span>KATSINA</span></h1>
              <p className='text-xl font-bold  text-center animate-pulse scale-150'>kitchen utilities</p>
            </div>
            
          </div>
          
      </div>
    </div>
  )
}

export default Home