// import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from'./Navbar';
import Footer from './Footer';

const createHotel = (props) => {
    return (
        <div className='createHotel'>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    <h1>This is Create hotel page </h1>
                </div>
               
            </div>
            <Footer/>
        </div>
    );
};

export default createHotel;