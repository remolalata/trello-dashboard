import React from "react";

import { NavLink } from "react-router-dom";

import { Avatar, Skeleton } from "@mui/material";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

import Logo from "../../Logo/Logo";
import { useAppSelector } from "../../../hooks/hooks";

const Sidebar: React.FC = () => {

    const userData = useAppSelector((state) => state.userData.data);

    return (
        <div className="px-5 py-6">
            {userData 
                ? <div className="flex gap-x-4 items-center p-5 bg-gray-100 rounded-2xl">
                    <div>
                        <Avatar alt="Remo Antonio Lalata" src={`${userData.avatarUrl}/60.png`} />
                    </div>
                    <div className="font-bold text-sm">{userData.fullName}</div>
                </div> 
                : <div className="flex gap-x-4 items-center p-5 bg-gray-100 rounded-2xl">
                    <div>
                        <Skeleton width={40} height={40} variant="circular" />
                    </div>
                    <Skeleton height={20} variant="rounded" className="w-full" />
                </div> 
            }

            <div className="p-5">
                <ul className="list-none font-bold text-sm text-gray-600 no-underline">
                    <li className="mb-3">
                        <NavLink 
                        to="/" 
                        className={({ isActive }) => {
                            const baseClass = "block font-bold text-sm text-gray-600 no-underline rounded-md hover:bg-gray-300";
                            const stateClass = isActive ? "bg-gray-300" : "";
                            return `${baseClass} ${stateClass}`;
                        }}
                        >
                            <div className="px-2 py-3 flex items-center gap-x-4">
                                <SpaceDashboardTwoToneIcon />
                                <div>Dashboard</div>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="calendar" 
                            className={({ isActive }) => {
                                const baseClass = "block font-bold text-sm text-gray-600 no-underline rounded-md hover:bg-gray-300";
                                const stateClass = isActive ? "bg-gray-300" : "";
                                return `${baseClass} ${stateClass}`;
                            }}
                        >
                            <div className="px-2 py-3 flex items-center gap-x-4">
                                <CalendarMonthTwoToneIcon />
                                <div>Calendar</div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;