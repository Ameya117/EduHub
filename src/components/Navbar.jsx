import React, { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('auth-token');
  if(token){

  }
  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleLogout = ()=>{
      localStorage.removeItem('auth-token');
      navigate("/login");
  }
  return (
    <>
      <div className={`${location.pathname==='/login'?'hidden':'block'} ${location.pathname==='/signup'?'hidden':'block'} p-5 font-bold border-b-2 border-indigo-500  md:h-20  flex flex-row justify-between text-xl sticky top-0 bg-white z-10 bg-opacity-95 shadow-lg`}>
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
           <Link to="/login" className={`${token?'hidden':'block'} font-light border-2 border-black px-4 py-1 rounded-xl hover:bg-black hover:text-white`}>Login</Link> 
           <Link to="/login" className={`${token?'block':'hidden'} font-light border-2 border-black px-4 py-1 rounded-xl hover:bg-black hover:text-white`} onClick={handleLogout}>Logout</Link> 
        </div>

      </div>
    </>
  );
};

export default Navbar;
