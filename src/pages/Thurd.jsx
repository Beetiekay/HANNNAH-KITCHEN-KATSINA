import React from 'react'
import image from "../assets/stick5.png"

const Thurd = () => {
  return (
    <div className='p-2 flex flex-wrap justify-around items-center'>
        <div>
            <h1 className='text-3xl font-bold text-redish mb-5'>Drop Table</h1>
            <p className='font-semibold italic mb-2'>The Black edition</p>
            <p className='lg:w-72 md:w-72 w-fit mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, quod quos. Quidem, atque minus porro velit a fuga delectus enim?</p>
            <div className='flex justify-start'><button className='p-2 px-8 rounded-2xl hover:bg-redish hover:text-white duration-500 border-2 border-redish text-redish'>View All</button></div> 
        </div>
        <div><img src={image} className='w-80'/></div>
    </div>
  )
}

export default Thurd