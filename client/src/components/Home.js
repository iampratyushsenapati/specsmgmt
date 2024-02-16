import React from 'react'
import view from '../assets/img1.jpg'
// import Bestrooms from './components/Bestrooms';
// import RoomTypes from './components/RoomTypes';
// import Footer from './components/Footer';
import standardroom from '../assets/slider1.jpg'
import premiumroom from '../assets/slider2.jpg'
import luxuryroom from '../assets/slider4.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='w-full h-screen'>
        <img
          className='top-0  left-0 w-full h-screen object-cover mt-[2rem]  ' src={view} alt="/" />
        <div className='bg-black/30 absolute top-0 mt-[5.2rem] left-0 h-screen w-full' />

        <div className='absolute top-0 w-full h-full  flex flex-col justify-center text-white '>
          <div className='md-left-[10%] max-w-[1100px]  w-full h-screen  mx-auto  mt-[96px]  m-auto absolute p-4  text-center'>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  mt-[200px] text-center p-11'>Welcome Here</h1>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Enjoy Our Services</p>
            <button className='bg-[black] w-[200px] rounded-md text-yellow-100 my-6 mx-auto py-3'>get start</button>
          </div>
        </div>
      </div>

        {/* best Rooms  */}

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


        {/* // Room RoomTypes */}
      <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-5'>
          <div className='w-full shadow-xl  text-gray-500  shadow-white flex flex-col my-8  md:-my-0  rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={standardroom} alt='/' />
            <h3 className='text-2xl font-bold text-center py-8'>Standard Room </h3>
            <div className='text-center text-sm font-medium'>
              <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
              <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <Link to='/create-hotel'>
            <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
            </Link>
          </div>


          <div className='w-full  shadow-xl text-gray-500  shadow-white flex flex-col md:-my-0  my-8 rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={premiumroom} alt='/' />
            <h3 className='text-2xl font-bold text-center py-8'>Premium Room </h3>
            <div className='text-center text-sm font-medium'>
              <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
              <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <Link to='/create-hotel'>
              <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
            </Link>
          </div>


          <div className='w-full  shadow-xl text-gray-500  shadow-white flex flex-col my-8   md:-my-0  rounded-lg hover:scale-105 duration-500'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={luxuryroom} alt='/' />
            <h3 className='text-2xl font-bold text-center py-8'>Luxury Room </h3>
            <div className='text-center text-sm font-medium'>
              <p className='text-center mx-auto  text-4xl font-bold'>150rs-/</p>
              <p className='text-center text-1xl font-thin'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <Link to='/create-hotel'>
            <button className='bg-green-400 rounded-md mx-auto my-5 px-2 py-2 hover:scale-90 duration-300'>Book Now </button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home