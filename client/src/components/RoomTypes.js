import React from 'react'
import standardroom from '../assets/slider1.jpg'
import premiumroom from '../assets/slider2.jpg'
import luxuryroom from '../assets/slider4.jpg'
const RoomTypes = () => {
  return (
   <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5'>
        <div className='w-full shadow-xl  text-gray-500  shadow-white flex flex-col my-8  md:-my-0  rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={standardroom} alt='/'/>
            <h3 className='text-2xl font-bold text-center py-8'>Standard Room </h3>
            <div className='text-center text-sm font-medium'>
            <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
            <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
        </div>


        <div className='w-full  shadow-xl text-gray-500  shadow-white flex flex-col md:-my-0  my-8 rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={premiumroom} alt='/'/>
            <h3 className='text-2xl font-bold text-center py-8'>Premium Room </h3>
            <div className='text-center text-sm font-medium'>
            <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
            <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
        </div>


        <div className='w-full  shadow-xl text-gray-500  shadow-white flex flex-col my-8   md:-my-0  rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={luxuryroom} alt='/'/>
            <h3 className='text-2xl font-bold text-center py-8'>Luxury Room </h3>
            <div className='text-center text-sm font-medium'>
            <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
            <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
        </div>
    </div>
   </div>
  )
}

export default RoomTypes