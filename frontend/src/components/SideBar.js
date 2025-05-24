import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ isCollapsed, onCollapse }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const menuItems = [
        {
            title: 'Dashboard',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
            ),
            path: '/admin',
        },
        {
            title: 'Posts',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                </svg>
            ),
            path: '/admin/posts',
        },
        {
            title: 'Groomers',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 100 12 6 6 0 000-12zM2 18a8 8 0 0116 0H2z" />
                </svg>
            ),
            dropdown: [
                { title: 'All Groomers', path: '/admin/groomers' },
                { title: 'Add Groomer', path: '/admin/groomers/add' },
            ],
        },
        {
            title: 'Clients',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            ),
            dropdown: [
                { title: 'All Clients', path: '/admin/clients' },
                { title: 'Add Client', path: '/admin/clients/add' },
            ],
        },
        {
            title: 'Product Management',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
            ),
            dropdown: [
                { title: 'All Products', path: '/admin/products' },
                { title: 'Add Product', path: '/admin/products/add' },
            ],
        },
        {
            title: 'Inventory',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm2 4h8v2H6V7zm0 4h8v2H6v-2z" />
                </svg>
            ),
            dropdown: [
                { title: 'All Inventory', path: '/admin/inventory' },
                { title: 'Add Inventory', path: '/admin/inventory/add' },
            ],
        },
        {
            title: 'Users',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
            ),
            path: '/admin/users',
        },
        {
            title: 'Settings',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            ),
            path: '/admin/settings',
        },
    ];

    return (
        <div className={`min-h-screen bg-gray-800 text-white transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
            <div className="p-4 flex items-center justify-between border-b border-gray-700">
                <h1 className={`font-bold text-xl ${isCollapsed ? 'hidden' : 'block'}`}>Admin Panel</h1>
                <button
                    onClick={() => onCollapse(!isCollapsed)}
                    className="p-1 rounded-lg hover:bg-gray-700 transition-colors"
                >
                    {isCollapsed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        </svg>
                    )}
                </button>
            </div>
            <nav className="mt-4">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
                            onClick={() => (item.dropdown ? toggleDropdown(item.title) : null)}
                        >
                            <span className="inline-flex">{item.icon}</span>
                            <span className={`ml-3 ${isCollapsed ? 'hidden' : 'block'}`}>{item.title}</span>
                            {item.dropdown && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-4 h-4 ml-auto transform transition-transform ${
                                        openDropdown === item.title ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </div>
                        {item.dropdown && openDropdown === item.title && (
                            <div className="ml-6">
                                {item.dropdown.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={subItem.path}
                                        className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default SideBar;