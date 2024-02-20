import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const HotelCard = (props) => {
    const hotel = props.hotel


    return (
        <div className='card-container'>
            {/* <img
                src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                alt='Hotels'
                height={200}
            />
            <div className='desc'>
                <h2>
                    <Link to={`/show-hotel/${hotel._id}`}>
                        {hotel.hotel_name}
                    </Link>
                </h2>
                <h3>{hotel.customer_name}</h3>
                <p>{hotel.date}</p>
            </div> */}
    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
  <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40">
    <img src="https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg" alt="Hotels" />
  </div>
  <div class="p-6 text-center">
    <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      <Link to={`/show-hotel/${hotel._id}`}>
      {hotel.customer_name}
      </Link>
    </h4>
    <p
      class="block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text text-blue-gray-900">
      {hotel.hotel_name}
    </p>
    <p className='block font-sans text-base antialiased font-medium leading-relaxed  bg-clip-text text-blue-gray-900'>
         {hotel.date}</p>
  </div>
 
</div>
        </div >
    );
};

export default HotelCard






