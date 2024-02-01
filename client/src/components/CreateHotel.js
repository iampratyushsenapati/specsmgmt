import React, {useState}from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';
import{useNavigate} from 'react-router-dom';


const createHotel =()=> {
    return(
        <div className='createHotel'>
            <div className='container'>
                <h1>This is Create hotel page </h1>
            </div>
        </div>
    );
};

export default createHotel;