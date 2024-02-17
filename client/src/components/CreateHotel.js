import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';


const CreateHotel = (props) => {

    const navigate = useNavigate();
    const [hotel, setHotel] = useState({
        hotel_name: '',
        customer_name: '',
        gender: '',
        place: '',
        date: '',
        price: '',
    });



    const [ShowToast, setShowToast] = useState(false);
    const onChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {

        // Prevents the page from refreshing
        e.preventDefault();

        //  API calls with the help of axios
        axios
            .post('/api/hotels', hotel)
            .then((res) => {
                setHotel({
                    hotel_name: "",
                    customer_name: "",
                    gender: "",
                    place: "",
                    date: "",
                    price: ""
                })

                // Show the success alert
                toast.success('Book added successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });

                // Delay the navigation slightly to allow the toast to be seen
                setTimeout(() => {
                    setShowToast(false); // Hide the toast
                    navigate('/all-hotel'); // Navigate to homepage
                }, 5000); // Adjust the timeout as needed
            })
            .catch((err) => {
                console.log('Error in CreateBook!');
                console.log('The error is -> ')
                console.log(err)
                // Show the success alert
                toast.error('Something went wrong, try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            });


    }


    return (
        <div className='CreateHotel'>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />

            {/* <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/all-hotel' className='btn btn-outline-warning float-left'>
                            Show Hotel List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Hotel</h1>
                        <p className='lead text-center'>Create new Hotel</p>

                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Name of the Hotel'
                                    name='hotel_name'
                                    className='form-control'
                                    value={hotel.hotel_name}
                                    onChange={onChange} />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Customer Name'
                                    name='customer_name'
                                    className='form-control'
                                    value={hotel.customer_name}
                                    onChange={onChange} />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Gender'
                                    name='gender'
                                    className='form-control'
                                    value={hotel.gender}
                                    onChange={onChange} />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Place'
                                    name='place'
                                    className='form-control'
                                    value={hotel.place}
                                    onChange={onChange} />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='entry-date'
                                    name='date'
                                    className='form-control'
                                    value={hotel.date}
                                    onChange={onChange} />
                            </div>

                            <div className='form-group'>
                                <input
                                    type='number'
                                    placeholder='price'
                                    name='price'
                                    className='form-control'
                                    value={hotel.price}
                                    onChange={onChange} />
                            </div>

                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />

                        </form>
                    </div>
                </div>
            </div> */}

            <div class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-4 mx-auto rounded-lg md:grid-cols-2  md:px-12 lg:px-16 xl:px-32  text-gray-800">
                <div class="flex flex-col justify-between">
                    <div class="space-y-1">
                        <h2 class="text-4xl font-bold leadi lg:text-5xl">Let's Book!</h2>
                        {/* <div class="text-gray-400">Vivamus in nisl metus? Phasellus.</div> */}
                    </div>
                    {/* <img src="https://img.freepik.com/free-vector/organic-flat-new-normal-hotels-illustration_23-2148935231.jpg?w=996&t=st=1708195520~exp=1708196120~hmac=1a9d4677da21939c9c8064e9e3061f7c7d3c103f19563cb21cbe03d673f8d0cc" alt="/" class="p-6  h-52 md:h-64" /> */}
                </div>
                <form noValidate onSubmit={onSubmit} class="space-y-4">
                    <div >
                        <label for="name" class="text-sm text-white">Full name</label>
                        <input
                            type='text'
                            placeholder='Name of the Hotel'
                            name='hotel_name'

                            value={hotel.hotel_name}
                            onChange={onChange}
                            class="w-full p-3 rounded placeholder-gray-400 bg-gray-800 border-blue-200"
                        />
                    </div>
                    <div>
                        <label for="email" class="text-sm text-white">Customer Name</label>
                        <input
                            type='text'
                            placeholder='Customer Name'
                            name='customer_name'

                            value={hotel.customer_name}
                            onChange={onChange}
                            class="w-full p-3 rounded bg-gray-800 placeholder-gray-400 border-blue-200" />
                    </div>

                    <div>
                        <label for="message" class="text-sm  text-white">Gender:</label>
                        <input
                            type='text'
                            placeholder='Gender'
                            name='gender'

                            value={hotel.gender}
                            onChange={onChange}
                            class="w-full p-3 rounded bg-gray-800 placeholder-gray-400 border-blue-200 "/>
                    </div>

                    <div>
                        <label for="message" class="text-sm text-white">Place:</label>
                        <input
                            type='text'
                            placeholder='Place'
                            name='place'

                            value={hotel.place}
                            onChange={onChange}
                            class="w-full p-3 rounded bg-gray-800 placeholder-gray-400 border-blue-200" />
                    </div>



                    <div>
                        <label for="message" className='text-white text-sm' >date</label>
                        <input
                           type='date'
                           placeholder='date'
                           name='date'

                            value={hotel.date}
                            onChange={onChange}
                            class="w-full p-3 rounded bg-gray-800 placeholder-gray-400 border-blue-200" />
                    </div>

                    <div>
                        <label for="message" className='text-white text-sm' >Price</label>
                        <input
                            type='number'
                            placeholder='price'
                            name='price'
                            value={hotel.price}
                            onChange={onChange}
                            class="w-full p-3 rounded bg-gray-800 placeholder-gray-400 border-blue-200" />
                    </div>


                    <button type="submit" class="w-full p-3 text-sm font-bold tracki uppercase rounded bg-violet-400 text-gray-900" >Submit</button>
                </form>
            </div>
        </div >
    );
};

export default CreateHotel;