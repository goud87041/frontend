import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiDashboard3Line } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { RiSettingsLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import Header from '../components/header'
import  Table from '../components/table';
import  CourseSection from '../components/CourseSection'
export function SideBar() {
    const [activeLink, setActiveLink] = useState("");

    const selectedFile = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="flex  justify-around gap-1">

        <div className="w-64 h-screen bg-gray-100"> {/* Fixed width for sidebar */}
            <div className="w-full h-full flex flex-col items-center py-5">
                {/* Sidebar Logo */}
                <div className="w-24 mb-8">
                    <img src="/images/sideBarlogo.png" alt="SideBar Logo" />
                </div>

                {/* Navigation Links */}
                <div className="w-full space-y-4 px-4">
                    {/* Dashboard Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "dashboard" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("dashboard")}
                    >
                        <RiDashboard3Line className="text-lg" />
                        <Link to="/dashboard" className="w-full">
                            Dashboard
                        </Link>
                    </div>

                    {/* Students Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "Students" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("Students")}
                    >
                        <FaUserGroup className="text-lg" />
                        <Link to="/students" className="w-full">
                            Students
                        </Link>
                    </div>

                    {/* Chapter Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "Chapter" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("Chapter")}
                    >
                        <FaBookBookmark className="text-lg" />
                        <Link to="/chapter" className="w-full">
                            Chapter
                        </Link>
                    </div>

                    {/* Help Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "Help" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("Help")}
                    >
                        <IoMdHelpCircleOutline className="text-lg" />
                        <Link to="/help" className="w-full">
                            Help
                        </Link>
                    </div>

                    {/* Reports Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "Reports" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("Reports")}
                    >
                        <TbReportSearch className="text-lg" />
                        <Link to="/reports" className="w-full">
                            Reports
                        </Link>
                    </div>

                    {/* Settings Link */}
                    <div
                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                            activeLink === "Settings" ? "bg-slate-200 text-black" : "bg-white text-gray-500"
                        }`}
                        onClick={() => selectedFile("Settings")}
                    >
                        <RiSettingsLine className="text-lg" />
                        <Link to="/settings" className="w-full">
                            Settings
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div  className="w-full ml-2 mt-4">
            <Header/>
            <CourseSection/>
            <Table/>
        </div>
            
        </div>

    );
}
