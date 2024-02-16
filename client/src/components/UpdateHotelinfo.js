import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';



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

  return (

    <div className='UpdateHotelinfo'>


      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Book's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='hotel_name'>Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='hotel_name'
                className='form-control'
                value={hotel.hotel_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='customer_name'>ISBN</label>
              <input
                type='text'
                placeholder='customer_name'
                name='customer_name'
                className='form-control'
                value={hotel.customer_name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='gender'>Author</label>
              <input
                type='text'
                placeholder='gender'
                name='gender'
                className='form-control'
                value={hotel.gender}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='place'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Book'
                name='place'
                className='form-control'
                value={hotel.place}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input
                type='Number'
                placeholder='Price'
                name='price'
                className='form-control'
                value={hotel.price}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='date'>Date</label>
              <input
                type='Date'
                placeholder='Date'
                name='date'
                className='form-control'
                value={hotel.date}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Hotel
            </button>
            <br /> <br />
          </form>
        </div>
      </div>


    </div>
  );
}

export default UpdateHotelinfo