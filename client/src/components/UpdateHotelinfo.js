import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function UpdateHotelinfo(props) {
  const [hotel, setHotel] = useState({
    hotel_name: '',
    customer_name: '',
    gender: '',
    place: '',
    price: '',
    date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`/api/hotels/${id}`)
      .then((res) => {
        setHotel({
          hotel_name: res.data.hotel_name,
          customer_name: res.data.customer_name,
          gender: res.data.gender,
          place: res.data.place,
          price: res.data.price,
          date: res.data.date,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateHotelinfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setHotel({ ...hotel, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      hotel_name: hotel.hotel_name,
      customer_name: hotel.customer_name,
      gender: hotel.gender,
      place: hotel.place,
      price: hotel.price,
      date: hotel.date,

    };


    axios
      .put(`/api/hotels/${id}`, data)
      .then((res) => {
        navigate(`/show-hotel/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateBookInfo PUT request ->');
        console.log(err)
      });
  };
  const onUpdate = (id) => {
    axios
      .update(`/api/hotels/${id}`)
      .then((res) => {

        // Show the success alert
        toast.success('Hotel updated!', {
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
          // setShowToast(false); // Hide the toast
          navigate('/show-hotel/:id'); // Navigate to hotel list
        }, 5000); // Adjust the timeout as needed
      })
      //Error show
      .catch((err) => {
        console.log('Error in updatehotelDetails!');
        console.log('The error is -> ')
        console.log(err)


        // Show the success alert
        toast.error('Error while deleting the hotel, please try again!', {
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
  };

  return (

    <div className='flex flex-col gap-6 w-72 mx-[600px] my-[20px] justify-center'>
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
        theme="dark"
        transition={Slide}
      />


      {/* <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto text-center'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Hotel List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Hotel</h1>
            <p className='lead text-center'>Update Hotel's Info</p>
          </div>
        </div> */}

       <div className='flex flex-col gap-6 w-[300px] justify-center'>
        <form noValidate onSubmit={onSubmit}>
          <div className='relative h-11 w-full min-w-[200px] text-center justify-center'>
            <input
              type='text'
              placeholder='Hotel name'
              name='hotel_name'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              value={hotel.hotel_name}
              onChange={onChange}
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Hotel Name</label>
          </div>
          <br />

          <div className='relative h-11 w-full min-w-[200px]'>
            <input
              type='text'
              placeholder='customer_name'
              name='customer_name'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              value={hotel.customer_name}
              onChange={onChange}
            />
            <label className=" after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
              Customer Name
            </label>
          </div>
          <br />

          <div className='relative h-11 w-full min-w-[200px]'>

            <input
              type='text'
              placeholder='gender'
              name='gender'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              value={hotel.gender}
              onChange={onChange}
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Gender
            </label>
          </div>
          <br />

          <div className='relative h-11 w-full min-w-[200px]'>

            <input
              type='text'
              placeholder='Description of the Book'
              name='place'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              value={hotel.place}
              onChange={onChange}
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Place
            </label>
          </div>
          <br />

          <div className='relative h-11 w-full min-w-[200px]'>
            <input
              type='text'
              placeholder='Price'
              name='price'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100'
              value={hotel.price}
              onChange={onChange}
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Price
            </label>
          </div>
          <br />

          <div className='relative h-11 w-full min-w-[200px]'>

            <input
              type='date'
              placeholder='Date'
              name='date'
              className='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              value={hotel.date}
              onChange={onChange}
            />
            <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Date
            </label>
          </div>
          <br />

          <button
            type='submit'
            className='btn btn-outline-info btn-lg btn-block'
            onClick={() => {
              onUpdate(hotel._id);
            }}
          >
            Update Hotel
          </button>
          <br /> <br />
        </form>
      </div>
    </div >
  );
}
export default UpdateHotelinfo