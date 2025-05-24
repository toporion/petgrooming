import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const MenuBar = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
        setIsMoreDropdownOpen(false);
    };

    const toggleMoreDropdown = () => {
        setIsMoreDropdownOpen(!isMoreDropdownOpen);
        setIsServicesDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsServicesDropdownOpen(false);
        setIsMoreDropdownOpen(false);
    };

    return (
        <div className="bg-white text-gray-800 shadow-md relative z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-500">Groom</div>

                {/* Hamburger Menu - visible on mobile */}
                <div className="lg:hidden block">
                    <button onClick={toggleMobileMenu} className="text-2xl text-blue-500 focus:outline-none">
                        {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>

                {/* Desktop Menu - hidden on mobile */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6">
                    <a href="/" className="hover:text-blue-500">Home</a>

                    <div className="relative">
                        <button onClick={toggleServicesDropdown} className="hover:text-blue-500 focus:outline-none flex items-center space-x-1">
                            <span>Services</span>
                            <FiChevronDown className="w-4 h-4" />
                        </button>
                        {isServicesDropdownOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10" style={{ animation: 'fadeIn 0.3s' }}>
                                <a href="/services/haircut" className="block px-4 py-2 hover:bg-gray-100">Haircut</a>
                                <a href="/services/nailcut" className="block px-4 py-2 hover:bg-gray-100">Nail Cut</a>
                                <a href="/services/bath" className="block px-4 py-2 hover:bg-gray-100">Bath</a>
                            </div>
                        )}
                    </div>

                    <a href="/about" className="hover:text-blue-500">About Us</a>
                    <a href="/shop" className="hover:text-blue-500">Shop</a>

                    <div className="relative">
                        <button onClick={toggleMoreDropdown} className="hover:text-blue-500 focus:outline-none flex items-center space-x-1">
                            <span>More</span>
                            <FiChevronDown className="w-4 h-4" />
                        </button>
                        {isMoreDropdownOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10" style={{ animation: 'fadeIn 0.3s' }}>
                                <a href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
                                <a href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</a>
                                <a href="/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden px-4 pb-4">
                    <div className="flex flex-col space-y-3">
                        <a href="/" className="hover:text-blue-500">Home</a>

                        <div>
                            <button onClick={toggleServicesDropdown} className="hover:text-blue-500 flex items-center space-x-1 w-full text-left">
                                <span>Services</span>
                                <FiChevronDown className="w-4 h-4" />
                            </button>
                            {isServicesDropdownOpen && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="/services/haircut" className="block hover:text-blue-500">Haircut</a>
                                    <a href="/services/nailcut" className="block hover:text-blue-500">Nail Cut</a>
                                    <a href="/services/bath" className="block hover:text-blue-500">Bath</a>
                                </div>
                            )}
                        </div>

                        <a href="/about" className="hover:text-blue-500">About Us</a>
                        <a href="/shop" className="hover:text-blue-500">Shop</a>

                        <div>
                            <button onClick={toggleMoreDropdown} className="hover:text-blue-500 flex items-center space-x-1 w-full text-left">
                                <span>More</span>
                                <FiChevronDown className="w-4 h-4" />
                            </button>
                            {isMoreDropdownOpen && (
                                <div className="ml-4 mt-2 space-y-1">
                                    <a href="/contact" className="block hover:text-blue-500">Contact Us</a>
                                    <a href="/faq" className="block hover:text-blue-500">FAQ</a>
                                    <a href="/testimonials" className="block hover:text-blue-500">Testimonials</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Animation Keyframes */}
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </div>
    );
};

export default MenuBar;
