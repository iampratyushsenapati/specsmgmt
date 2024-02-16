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



    const[ShowToast, setShowToast] = useState(false);
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
                },  5000); // Adjust the timeout as needed
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

            <div className='container'>
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
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default CreateHotel;