import { Sidebar } from 'flowbite-react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import useGetCurrentUser from '../../Hooks/useGetCurrentUser';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Button } from '@mui/material';
import { GiTeacher } from "react-icons/gi";
import { useState } from 'react';
import ClockLoading from '../DataLoadingComponents/ClockLoading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useLoggedinUser from '../../Hooks/useLoggedinUser';
import useAxios from '../../Hooks/useAxios';


function Dashboard() {
    const user = useLoggedinUser();
    const instance = useAxiosSecure();
    const navigate = useNavigate();
    const { data, isFetching, isSuccess } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => {
            return instance.get(`/tasks?id=${user.email}`);
        }
    });
    return (
        <div>
            <NavigationBar></NavigationBar>
            {
                isFetching &&
                <div>
                    <ClockLoading></ClockLoading>
                </div>
            }
            {
                isSuccess &&
                <div className='flex flex-col'>

                    <div className='w-full h-10 flex flex-row justify-center items-center border-2 rounded-lg border-green-500'>
                        {
                            <span>Dashboard</span>
                        }

                    </div>
                    <div className='flex flex-row w-full h-full'>
                        <div className='hidden md:block w-fit border-2 rounded-lg border-green-500'>
                            {
                                <div className='w-full h-screen rounded-lg flex flex-col bg-base-200'>
                                    <NavLink to={'/dashboard/addtask'}>
                                        <Button startIcon={<GiTeacher />}>Add Task</Button>
                                    </NavLink>
                                    <NavLink to={'/dashboard/edittask'}>
                                        <Button startIcon={<PeopleIcon />}>Edit Task</Button>
                                    </NavLink>
                                    <NavLink to={'/dashboard/alltasks'}>
                                        <Button startIcon={<SchoolIcon />}>All Tasks</Button>
                                    </NavLink>
                                    <NavLink to={'/dashboard/profile'}>
                                        <Button startIcon={<PersonIcon />}>Profile</Button>
                                    </NavLink>
                                </div>
                            }

                        </div>
                        <div className='w-full border-2 rounded-lg border-green-500'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Dashboard