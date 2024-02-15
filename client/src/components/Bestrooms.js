import React from 'react'
import view from '../assets/img1.jpg'

const Bestrooms = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '> 
                <img className='w-[500px] mx-auto my-4' src={view} alt="/" />
                <div className='flex flex-col justify-center'>
                <h1 className='text-[20px] font-serif'>Best Rooms</h1>
                    <p className='md:text-3xl sm:text-2xl text-1xl font-mono py-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
                   <button className='bg-[black] w-[200px] rounded-md text-yellow-100 my-6 mx-auto py-3'>Get Explore  </button>
                </div>
            </div>
        </div>
    ) 
}

export default Bestrooms