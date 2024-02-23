import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-500 text-white py-6 mt-[10rem] h-64">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-lg font-bold ml-[2rem]">Edu Hub</h2>
        <h2 className='text-lg font-semibold'>2024@Copy</h2>
        <div className="flex space-x-4 mr-[2rem]">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300 text-2xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;