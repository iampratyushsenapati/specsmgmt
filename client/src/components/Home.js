import React from 'react'
import view from '../assets/img1.jpg'
// import Bestrooms from './components/Bestrooms';
// import RoomTypes from './components/RoomTypes';

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
      <div >
        {/* <!-- component --> */}
            <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-10  sm:mb-[5px] h-[600px] border border-black ">
              <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8 ">
                <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">  Welcome Here</h1>
                <p class=" md:text-base text-white  mb-[30px] text-2xl text-center">Enjoy our Services</p>
                <a href="#"
                  class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 ">
                  Explore Now</a>
              </div>
              <div class="p-8 mt-12 mb-6 md:mb-1 md:mt-0 ml-0 md:ml-12 lg:w-2/3 m-0   justify-center">
                <div class="h-48 flex flex-wrap content-center">
                  <div className='  m-2'>
                    <img class="inline-block mt-28  xl:block w-[290px]  h-[90px]vmx-auto my-4 rounded-lg" src='https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
                    </div>

                    {/*SEcond Image*/}
                    <div className=' mt-[100px] '>
                    <img class="inline-block mt-28  md:mt-0  h-[300px]  w-[300px]   lg:block  hidden mx-auto my-4 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 duration-300" src='https://images.pexels.com/photos/15010977/pexels-photo-15010977/free-photo-of-interior-design-of-hall-in-caeli-caeli-winery.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
                    </div>

                    {/* third Image */}
                      <div className='m-2'>
                    <img class="inline-block mt-28  lg:block w-[300px] mx-auto my-4  hidden rounded-lg" src='https://images.pexels.com/photos/3209049/pexels-photo-3209049.jpeg?auto=compress&cs=tinysrgb&w=600'alt='/ '/>
                    </div>

              </div>
            </div>
          </div>

        {/* best Rooms  */}

        <div className='w-full py-16 px-4  mt-[100px] '>

          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] my-8 rounded-lg' src={view} alt="/" />
            <div className='flex flex-col justify-center'>
              <h1 className='text-[25px]  text-white font-serif'>Best Rooms</h1>
              <p className='md:text-3xl sm:text-2xl  text-white text-1xl font-mono py-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of </p>
              <button className='bg-[black] w-[200px] rounded-md text-yellow-100 my-6 mx-auto py-3'>Get Explore  </button>
            </div>
          </div>

        </div>


        {/* // Room RoomTypes */}
        <div class="flex min-h-screen items-center justify-center">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border   rounded-lg" src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Standard Rooms</h1>
                <p className='text-lg italic text-white mb-3 transition-opacity duration-300 group-hover:opacity-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <Link to='/create-hotel'>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Book Now</button>
                </Link>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border rounded-lg" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="/" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Premium Rooms</h1>
                <p class="mb-3 text-lg italic text-white transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <Link to='/create-hotel'>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Book Now</button>
                </Link>
              </div>
            </div>
            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-96 w-72">
                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 border rounded-lg" src="https://plus.unsplash.com/premium_photo-1661963239507-7bdf41a5e66b?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Luxury Rooms</h1>
                <p class="mb-3 text-lg italic text-white  transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                <Link to='/create-hotel'>
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home