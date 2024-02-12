import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import Footer from './Footer';
import Navbar from './Navbar';

const CreateHotel = (props) => {
    const navigate = useNavigate();
    const [hotel, setHotel] = useState({
       hotel_name : '',
        customer_name: '',
        gender: '',
        place:'',
        date: '',
        price: '',
    });
    //    const[ShowToast, setShowToast] = useState(false);
    const onChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {

        // Prevents the page from refreshing
        e.preventDefault();

        //  API calls with the help of axios
        axios.post('/api/hotels', hotel)
            .then((res) => {
                setHotel({
                    hotel_name: "",
                    customer_name: "",
                    gender: "",
                    date: "",
                    price: ""
                })
            })
    }


    //  // Delay the navigation slightly to allow the toast to be seen
    //  setTimeout(() => {
    //     //setShowToast(false);  Hide the toast
    //     navigate('/'); // Navigate to homepage
    //   },  5000); // Adjust the timeout as needed


    return (
        <div className='CreateHotel'>
            <Navbar />
            {/* <ToastContainer 
            position="top-right"
            tranistion={slide}
            /> */}

            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link to='/all-tickets' className='btn btn-outline-warning float-left'>
                            Show Hotel List
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Hotel</h1>
                        <p className='lead text-center'>Create new Hotel</p>

                        {<form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Name of the Hotel'
                                    className='form-control'
                                    value={hotel.hotel_name}
                                    onChange={onChange}
                                />
                            </div>


                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Customer Name'
                                    className='form-control'
                                    value={hotel.customer_name}
                                />
                            </div>


                            <div className='form-group'>
                                <input
                                    type='text'
                                    placeholder='Gender'
                                    className='form-control'
                                    value={hotel.gender}
                                />
                            </div>


                            <div className='form-group'>
                                <input
                                    type='date'
                                    placeholder='entry-date'
                                    className='form-control'
                                    value={hotel.date}
                                />
                            </div>


                            <div className='form-group'>
                                <input
                                    type='number'
                                    placeholder='price'
                                    className='form-control'
                                    value={hotel.price}
                                />
                            </div>


                            <input
                                type='submit'
                                className='btn btn-outline-warning btn-block mt-4'
                            />

                        </form>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateHotel;