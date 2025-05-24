import React from 'react';
import newsletter from '../assets/newslettter.jpg';

const NewsLetter = () => {
    return (
        <div
            className="w-full h-auto mt-24 flex items-center justify-center bg-cover bg-center py-8"
            style={{ backgroundImage: `url(${newsletter})` }}
        >
            <div className="bg-white bg-opacity-80 p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between w-11/12 sm:w-3/4 shadow-lg">
                {/* Text on the left */}
                <p className="text-lg font-semibold mb-4 sm:mb-0 sm:flex-1 text-center sm:text-left">
                    Subscribe to our Newsletter:
                </p>
                
                {/* Email input in the middle */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 flex-1 mb-4 sm:mb-0 sm:mx-4 w-full sm:w-auto"
                />
                
                {/* Button on the right */}
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition flex-none w-full sm:w-auto">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;