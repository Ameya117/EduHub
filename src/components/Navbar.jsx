import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-5 shadow font-bold  md:h-20 border-b-4 border-indigo-500 flex flex-row justify-between text-xl">
        <div className="ml-4">
            <h1 className="">EduHub</h1>
        </div>
        <div className="mx-2">
            <ul className="flex flex-row">
                <Link to="/"><li className="mx-4">Home</li></Link>
                 <Link to="/videos"><li className="mx-4">Videos</li></Link>
            </ul>
        </div>
        <div className="mr-4">
           <Link to="/login">Login</Link> 
        </div>

      </div>
    </>
  );
};

export default Navbar;
