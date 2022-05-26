import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiStarsStack } from 'react-icons/gi';
import { FaCartArrowDown } from 'react-icons/fa';
import { AiOutlineUserSwitch } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile bg-[#f8f9fa]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="container mx-auto px-8 py-14 drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet />
                </div>  
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                        <li><NavLink to='/dashboard'><span><BsCart3 /></span> My Order</NavLink></li>
                        <li><NavLink to='/dashboard/all-order'><span><BsCart3 /></span> All Order</NavLink></li>
                        <li><NavLink to='/dashboard/manage-products'><span><MdOutlineProductionQuantityLimits /></span> Manage All Products</NavLink></li>
                        <li><NavLink to='/dashboard/review'><span><GiStarsStack /></span> Add A Review</NavLink></li>
                        <li><NavLink to='/dashboard/add-product'><span><FaCartArrowDown /></span> Add A Product</NavLink></li>
                        <li><NavLink to='/dashboard/make-admin'><span><AiOutlineUserSwitch /></span> Make Admin</NavLink></li>
                        <li><NavLink to='/dashboard/my-profile'><span><BiUser /></span> My Profile</NavLink>
                        </li>
                    </ul>

                </div>
            </div>   
        </>
    );
};

export default Dashboard;