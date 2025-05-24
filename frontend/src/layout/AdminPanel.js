import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';

const AdminPanel = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">
            <SideBar isCollapsed={isSidebarCollapsed} onCollapse={setIsSidebarCollapsed} />
            <div className="flex-1 flex flex-col">
                <TopBar isSidebarCollapsed={isSidebarCollapsed} />
                <main className="p-8 flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;