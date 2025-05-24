import React from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="w-full bg-[#FFD600] px-4 py-2">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4">
                {/* Left Side - Contact Info */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
                    <p className='flex items-center gap-2'>
                        <LuPhoneCall className='text-lg' /> +880-175-252-9602
                    </p>
                    <p className='flex items-center gap-2'>
                        <MdEmail className='text-lg' /> info@groomer.com
                    </p>
                </div>

                {/* Right Side - Icons and Menu */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    {/* Social Icons - visible on sm+ */}
                    <div className='hidden sm:flex gap-3 text-white font-extrabold'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaInstagram />
                    </div>

                    {/* Search Button */}
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* Notification Button */}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="dropdown dropdown-end z-50">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><a href="#">Homepage</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
