import React from "react";
import {Link} from "react-router-dom"
const HomeCard = () => {
  return (
    <div className="h-[85vh] w-[90vw] mx-auto overflow-hidden mt-2">
      <img
        src="/2151046784.jpg"
        className="relative inset-0 h-full w-full object-cover rounded-md opacity-80 "
        alt=""
      />
      <div className="relative -top-[90%]  w-[90vw]">
        <div className="ml-12 md:ml-24">
          <h1 className="text-xl md:text-6xl font-semibold md:font-extrabold">
            Health EduHub
          </h1>
          <h1 className="text-lg md:text-2xl ">
            Empowering Minds, Nourishing Bodies
          </h1>
          <h2 className="text-xl">
            Elevating Student Health with Expert Guidance and Energizing
            Resources for Mind and Body Wellness!
          </h2>
        </div>
        <div className="flex flex-col w-[80%] ml-12 md:ml-24 mt-10 h-24">
          <div>
            <h1 className="text-lg md:text-3xl relative w-auto text-black md:text-white my-2">Get Started Now</h1>
            <Link
              className="text-md md:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:border-2 font-semibold rounded-sm px-5 py-1"
              to="/login"
            >
              Login
            </Link>
          </div>
          <div className="transition-all">
            <h1 className="text-lg md:text-3xl relative w-auto my-2 text-black md:text-white">New user?</h1>
            <Link
              className="text-md md:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l  font-semibold rounded-sm px-4 py-1 transition-all "
              to="/signup"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
