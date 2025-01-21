import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Hamburger icons
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
        <div className='w-[100%]' >
            {/* Announcement Bar */}
            <div className="kali-pati  text-white flex flex-col md:flex-row justify-between lg:justify-around items-center gap-2 bg-black px-4 py-2 md:h-12 text-center">
                {/* Announcement Section */}
                <div className="flex md:flex-row gap-1 md:gap-3 text-sm md:text-base lg:text-lg">
                    <h4 className="text-center md:text-left">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </h4>
                    <div className='hidden lg:flex'>
                        <h5 className="underline cursor-pointer text-center md:text-left">
                            Shop Now
                        </h5>
                    </div>
                </div>

                {/* Language Section */}
                <div className="flex items-center gap-1 md:gap-2 text-sm md:text-base lg:text-lg">
                    <div className='md:hidden flex'>
                        <h5 className="underline cursor-pointer text-center md:text-left">
                            Shop Now
                        </h5>
                    </div  >
                    <h4  className='hidden md:block' >English</h4>
                    <RiArrowDropDownLine className=" hidden md:block text-xl md:text-2xl lg:text-3xl" />
                </div>
            </div>


            {/* Navbar */}
            <div className="Navbar w-[100%] flex items-center py-5 px-6 lg:justify-around md:justify-between justify-between  border-b-[1px] border-gray-300">
                {/* Logo */}
                <div className="logo">
                    <h1 className="font-serif font-bold text-2xl">Exclusive</h1>
                </div>

                {/* Links */}
                <div className="hidden lg:flex links gap-5 items-center">
                    <ul className="flex gap-3">
                        <li className="cursor-pointer hover:text-gray-500">Home</li>
                        <li className="cursor-pointer hover:text-gray-500">Contact</li>
                        <li className="cursor-pointer hover:text-gray-500">About</li>
                        <li className="cursor-pointer hover:text-gray-500">Sign Up</li>
                    </ul>
                    <div className="bg-[#F5F5F5] flex items-center pl-1 pr-2">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="px-3 py-1 placeholder:text-sm text-gray-800 outline-none bg-[#F5F5F5]"
                        />
                        <IoSearchOutline />
                    </div>
                </div>

                {/* Icons */}
                <div className="hidden md:flex svgs items-center gap-3 text-xl">
                    <FaRegHeart />
                    <AiOutlineShoppingCart />
                    <FaRegUser />
                </div>

                {/* Hamburger Menu for Smaller Screens */}
                <div className="md:hidden flex items-center">
                    <div className="flex gap-3 text-xl mr-2">
                        <FaRegHeart />
                        <AiOutlineShoppingCart />
                        <FaRegUser />
                    </div>
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <HiX size={28} /> : <RxHamburgerMenu className='text-2xl' />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: isMenuOpen ? "auto" : 0 }}
                className="overflow-hidden md:hidden bg-gray-100"
            >
                <ul className="flex flex-col gap-3 p-4">
                    <li className="cursor-pointer hover:text-gray-500">Home</li>
                    <li className="cursor-pointer hover:text-gray-500">Contact</li>
                    <li className="cursor-pointer hover:text-gray-500">About</li>
                    <li className="cursor-pointer hover:text-gray-500">Sign Up</li>
                </ul>

            </motion.div>
            </div>
        </>
    );
};

export default Header;
