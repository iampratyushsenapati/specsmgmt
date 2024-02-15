import React from 'react'
import view from '../assets/img1.jpg'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0  left-0 w-full h-screen object-cover mt-[2rem]  ' src={view} alt="/"
      />
      <div className='bg-black/30 absolute top-0 mt-[5.2rem] left-0 h-screen w-full' />

      <div className='absolute top-0 w-full h-full  flex flex-col justify-center text-white '>
        <div className='md-left-[10%] max-w-[1100px]  w-full h-screen  mx-auto  mt-[96px]  m-auto absolute p-4  text-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  mt-[200px] text-center p-11'>Welcome Here</h1>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Enjoy Our Services</p>
          <button className='bg-[black] w-[200px] rounded-md text-yellow-100 my-6 mx-auto py-3'>get start</button>
        </div>
      </div>

    </div>
  )
}

export default Home