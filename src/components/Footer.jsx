import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='rounded-t-2xl bg-black p-2 py-10 grid lg:grid-cols-2 grid-cols-1 gap-5 lg:px-24 md:px-24 px-8'>
      <div className='lg:mb-0 md:mb-2 mb-2'>
       <div className='flex items-center gap-2 mb-2'>
           <img src={logo} className=' w-10 bg-gray rounded-full'/>
           <p className='font-semibold text-lg text-gray'>Hannah</p> 
       </div>
       <p className='text-gray italic text-sm mb-1 '>All credit own by respective owner</p>
       <p className='text-white text-sm mb-2'>Enter your email to get our weekly newsletter</p>

       <div>
        <form className='border w-[56%] flex border-gray rounded-2xl  py-1'>
        <input type='email' name='email' placeholder=' Inter Your Email' required className='bg-black outline-none text-white p-1'/>
        <button  className='p-1 px-6 rounded-2xl bg-redish text-white outline-none'>Join Now</button>
        </form>
       </div>
      </div>

      <div className='lg:flex md:flex block justify-between'>
        <div className='lg:mb-0 md:mb-0 mb-4'>
            <h1 className='text-lg font-semibold text-gray mb-2'>Navigation</h1>
            <p className='mb-1 text-gray'>Home</p>
            <p className='mb-1 text-gray'>Products</p>
            <p className='mb-1 text-gray'>Blogs</p>
            <p className='mb-1 text-gray'>About Us</p>
        </div>
        <div className='lg:mb-0 md:mb-0 mb-4'>
            <h1 className='text-lg font-semibold text-gray mb-2'>Features</h1>
            <p className='mb-1 text-gray'>We're hiring</p>
            <p className='mb-1 text-gray'>Help</p>
        </div>
        <div className='lg:mb-0 md:mb-0 mb-4'>
            <h1 className='text-lg font-semibold text-gray mb-2'>Cookies</h1>
            <p className='mb-1 text-gray'>Data collections</p>
            <p className='mb-1 text-gray'>Terms</p>
            <p className='mb-1 text-gray'>Privacy</p>
            <p className='mb-1 text-gray'>Laws</p>
        </div>
      </div>
    </div>
  )
}

export default Footer