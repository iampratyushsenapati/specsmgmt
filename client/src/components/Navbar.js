import React from "react";
import { Outlet } from 'react-router-dom'
function Navbar() {
    return (
        <div className="text-white">
           hello
           
           <Outlet/>
      </div> 
     
    )
}

export default Navbar
