import React from 'react'
import image from "../assets/f2.png"

const Second = () => {
  return (
    <div className='w-[100%] py-10 px-2'>
       <div>
         <div>
            <h1 className='font-bold text-4xl mb-4 text-center text-redish'>Modern at</h1>
            <div className='flex justify-center'>
               <p className='mb-4 text-xl opacity-85'>
                It's a long established fact that is a reader will<br/> be distracted
                by the readable content of a.
            </p> 
            </div>
            <div className='flex justify-center'><button className='p-2 px-8 rounded-2xl hover:bg-redish hover:text-white duration-500 border-2 border-redish text-redish'>View All</button></div> 
         </div>
         <div className='flex justify-center mt-4'><img src={image}/></div>
       </div>
    </div>
  )
}

export default Second