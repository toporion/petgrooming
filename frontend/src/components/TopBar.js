import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Mock data for notifications
    const notifications = [
        { id: 1, text: 'New comment on your post', time: '5m ago' },
        { id: 2, text: 'System update available', time: '1h ago' },
        { id: 3, text: 'New user registration', time: '2h ago' },
    ];

    return (
        <div className="bg-white border-b border-gray-200full fiw-full xed top-50">
            <div className="px-4 h-16 flex items-center justify-between">
                {/* Left section */}
                <div className="flex items-center">
                    <Link to="/" className="text-gray-800 hover:text-gray-600 mr-4">
                        <span className="text-xl font-bold">Site Title</span>
                    </Link>
                    <Link to="/" className="text-sm text-gray-600 hover:text-gray-800 flex items-center" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                        View Site
                    </Link>
                </div>

                {/* Right section */}
                <div className="flex items-center space-x-4">
                    {/* New Content Button */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        New
                    </button>

                    {/* Notifications */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                            className="text-gray-600 hover:text-gray-800 relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Notifications Dropdown */}
                        {isNotificationsOpen && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                <div className="px-4 py-2 border-b border-gray-200">
                                    <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
                                </div>
                                {notifications.map(notification => (
                                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                                        <p className="text-sm text-gray-800">{notification.text}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                ))}
                                <div className="px-4 py-2 border-t border-gray-200">
                                    <Link to="/notifications" className="text-sm text-blue-500 hover:text-blue-600">
                                        View all notifications
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Profile */}
                    <div className="relative">
                        <button 
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                        >
                            <img
                                src="https://ui-avatars.com/api/?name=Admin+User"
                                alt="Profile"
                                className="h-8 w-8 rounded-full"
                            />
                            <span className="text-sm font-medium">Admin User</span>
                        </button>

                        {/* Profile Dropdown */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Your Profile
                                </Link>
                                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Settings
                                </Link>
                                <div className="border-t border-gray-200"></div>
                                <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;