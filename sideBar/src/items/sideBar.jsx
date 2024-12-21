import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiDashboard3Line } from "react-icons/ri";
import { FaBookBookmark } from "react-icons/fa6";
import { RiSettingsLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
// import sideBarlogo from "./images/sideBarlogo.png";



export function SideBar() {

    const [activeLink , setActiveLink ] = useState("");


    const selectedFile = (link) => {
        setActiveLink(link);
      }; 

    return (
        <>
         <div className="w-1/5 h-screen "> 
            <div className="w-full h-full  flex items-center justify-start"> 
                <div className="w-full mt-5   h-screen flex flex-col justify-start items-center  ">
                    
                    <div className=" ml-10 object-fill  w-24 mb-8" >      <img src="/images/sideBarlogo.png" alt="SideBar Logo" />
                    </div>
                    
                    <div className={`w-full h-8   flex justify-start items-center gap-2 rounded-md ${activeLink === "deashboard" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("deashboard")}>
                        <div className="w-4  ml-16">
                            <RiDashboard3Line />
                        </div>
                        <Link to="/dashboard" className=" ">
                            Dashboard
                        </Link>
                    </div>
                    <div  className={` w-full h-8 flex justify-start items-center gap-2 rounded-md  ${activeLink === "Students" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("Students")}>
                        <div className="w-4 ml-16">  <FaUserGroup />    </div>
                        <Link to="/students" className=" ">
                            Students
                        </Link>
                    </div>
                    <div  className={` w-full  h-8 flex justify-start items-center gap-2 rounded-md  ${activeLink === "Chapter" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("Chapter")}>
                        <div className="w-4 ml-16"><FaBookBookmark /></div>
                        <Link to="/chapter" className=" hover:">
                            Chapter
                        </Link>
                    </div>
                    <div  className={` w-full h-8 flex justify-start items-center gap-2 rounded-md ${activeLink === "Help" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("Help")}>
                        <div className="w-4 ml-16"><IoMdHelpCircleOutline /></div>
                        <Link to="/help" className=" hover:">
                            Help
                        </Link>
                    </div>
                    <div  className={` w-full h-8 flex justify-start items-center gap-2 rounded-md ${activeLink === "Reports" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("Reports")}>
                        <div className="w-4 ml-16">  <TbReportSearch />     </div>
                        <Link to="/reports" className=" hover:">
                            Reports
                        </Link>
                    </div>
                    <div  className={`w-full h-8 flex justify-start items-center gap-2 rounded-md  ${activeLink === "Settings" ? "bg-slate-200 text-black" : "bg-white text-gray-500"} `} onClick={()=> selectedFile("Settings")}>
                        <div className="w-4 ml-16" >  <RiSettingsLine /></div>
                        <Link to="/settings" className="">
                            Settings
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        
        </>
    );
}
