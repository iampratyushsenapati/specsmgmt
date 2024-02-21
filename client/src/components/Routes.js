
import React from 'react';
// import NavBar from './NavBar';
// import Footer from './Footer';

const AllRoutes = () =>(
    <div className=' text-white text-3xl grid grid-cols-2 gap-5'>
       
        <div className=''>
            <h3 className=''>Backend Routes</h3>
            <ul>
                <li>Create: api/hotels/ </li>
                <li>Read: api/hotels/ </li>
                <li>FindById: api/hotels/:id</li>
                <li>Update: api/hotels/:id</li>
                <li>Delete: api/hotels/:id</li>
            </ul>
        </div>
        <div className=''>
            <h3 className='text-3xl text-white'>Frontend Routes</h3>
            <ul>
                <li>Create: /create-hotel </li>
                <li>Read: /all-hotel </li>
                <li>FindById: /show-hotel/:id</li>
                <li>Update: /edit-hotel/:id</li>
            </ul>
        </div>
   
    </div>
)

export default AllRoutes