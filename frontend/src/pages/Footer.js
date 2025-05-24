import React from 'react';
import footerImg from '../assets/Paw-Pattern.png';

const Footer = () => {
    return (
        <div
            className="w-full bg-cover bg-center py-10 text-black"
            style={{ backgroundImage: `url(${footerImg})` }}
        >
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {/* First Column: Address */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p>123 Pet Street, Dog City</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Email: info@petservices.com</p>
                    <p>Website: www.petservices.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-yellow-500">Facebook</a>
                        <a href="#" className="hover:text-yellow-500">Twitter</a>
                        <a href="#" className="hover:text-yellow-500">Instagram</a>
                    </div>
                </div>

                {/* Second Column: Useful Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Services</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Pricing</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>

                {/* Third Column: Recent Posts */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">How to Groom Your Dog</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Top 10 Pet Foods</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Benefits of Regular Checkups</a></li>
                    </ul>
                </div>

                {/* Fourth Column: Product Tags */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Product Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">Dog Food</span>
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">Grooming</span>
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">Toys</span>
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-md">Accessories</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;