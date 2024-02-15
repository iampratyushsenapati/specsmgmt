import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


const HotelCard = (props) => {
    const hotel = props.hotel
    return (

        <div className='card-container'>
            <img
                src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                alt='Books'
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
        </div>
            </div >  
          );
        };

export default HotelCard
        





