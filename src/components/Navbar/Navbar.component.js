import React from "react";
import { BsChevronCompactRight, BsChevronCompactDown, BsMenuButtonWide } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex itmes-center"> Bhubneswar <BsChevronCompactRight /></span>
                </div>
                <div className="w-8 h-8"><BiSearchAlt className="w-full h-full" /></div>
            </div></>
    )
};

const NavMd = () => {
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearchAlt />
            <input type="search" className="w-full focus:outline-none " placeholder="Search for movies,shows and magic" />
        </div>
    )
};

const NavLg = () => {
    return (<>
        <div className="container mx-auto h-8 px-4 flex items-center justify-between ">
            <div className="flex items-center w-1/2">
                <div className=" w-48 h-full">
                    <img src="https://www.rezeem.com/img/stores/bookmyshow.jpg" alt="LOGO" className="w-full h-full" />
                </div>
                <div className="w-full  flex items-center gap-3 bg-white px-3 py-2 rounded-sm">
                    <BiSearchAlt />
                    <input type="search" className="w-full focus:outline-none " placeholder="Search for movies,shows and magic" />
                </div>
                
            </div>
            <div className="flex items-center gap-5">
                    <span className="text-gray-400 text-xs flex itmes-center hover:text-white cursor-pointer"> Bhubneswar <BsChevronCompactDown /></span>
                    <button className="bg-red-500 text-white text-sm rounded px-2 py-1">Sign in</button>
                    <div className="w-8 h-8 bg-white">
                        <BsMenuButtonWide className="w-full h-full " />
                    </div>

                </div>
        </div>
    </>
    )
};


const NavBar = () => {
    return (
        <>
            <nav className="bg-navCol-900 p-4">
                <div className="md:hidden">{
                    //mobile screen
                    <NavSm />
                }</div>
                <div className="hidden lg:hidden md:flex">{
                    //tablet screen
                    <NavMd />
                }</div>
                <div className="hidden lg:flex">{
                    //desktop screen 
                    <NavLg />
                }</div>
            </nav>
        </>
    )
};

export default NavBar;
