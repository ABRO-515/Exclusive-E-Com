import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { SearchContext } from "../../context/SearchContext";
import { useCart } from "../../context/CartContext"; // Import useCart hook

const HeaderNew = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(SearchContext); // Use SearchContext
  const { cart } = useCart(); // Use CartContext to get cart items

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchBar(!searchBar);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <main className="w-full h-full">
        {/* Announcement Bar */}
        <div className="bg-black text-white">
          <div className="mx-5 flex flex-col lg:flex-row lg:justify-between lg:mx-24 justify-center items-center gap-1 py-3">
            <h3 className="text-sm text-center">
              Summer Sale For All Cameras And Free Express Delivery - OFF 50%!
            </h3>
            <NavLink to="/cameras">
              <h3 className="text-sm underline">Shop Now</h3>
            </NavLink>
          </div>
        </div>

        {/* NavBar */}
        <div className="py-4 md:px-8 px-4 flex justify-between border-b border-gray-300 items-center xl:px-24">
          <NavLink to="/">
            <h1 className="font-serif font-bold text-2xl">Exclusive</h1>
          </NavLink>

          {/* Visible from lg devices */}
          <div className="hidden lg:flex gap-2">
            <ul className="flex gap-3">
              <NavLink onClick={toggleMenu} to="/">
                <li className="cursor-pointer hover:text-gray-500">Home</li>
              </NavLink>
              <NavLink onClick={toggleMenu} to="/contact">
                <li className="cursor-pointer hover:text-gray-500">Contact</li>
              </NavLink>
              <NavLink onClick={toggleMenu} to="/about">
                <li className="cursor-pointer hover:text-gray-500">About</li>
              </NavLink>
              <NavLink onClick={toggleMenu} to="/signup">
                <li className="cursor-pointer hover:text-gray-500">Sign Up</li>
              </NavLink>
            </ul>
            <div className="bg-[#F5F5F5] flex items-center pl-1 pr-2">
              <input
                type="text"
                onChange={handleSearchChange}
                value={searchQuery}
                placeholder="What are you looking for?"
                className="px-3 py-1 placeholder:text-sm text-gray-800 outline-none bg-[#F5F5F5]"
              />
              <IoSearchSharp />
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex items-center gap-2">
            <IoSearchSharp className="text-2xl" onClick={toggleSearch} />
            <NavLink to="/cart" className="relative">
              <IoCartOutline className="text-2xl" />
              {/* Cart Notification Badge */}
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </NavLink>
            <FaRegUser className="text-xl" />

            <div onClick={toggleMenu} className="lg:hidden">
              {!isOpen ? (
                <RxHamburgerMenu className="text-2xl" />
              ) : (
                <HiX size={28} />
              )}
            </div>
          </div>
        </div>

        {/* Searchbar Till Medium Devices */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: searchBar ? "auto" : 0 }}
          className="overflow-hidden lg:hidden bg-gray-100"
        >
          <div className="flex justify-center items-center bg-[#F3F4F6]">
            <input
              onChange={handleSearchChange}
              value={searchQuery}
              type="search"
              className="border border-black py-2 px-5 my-2"
              placeholder="What Are You Looking For?"
            />
          </div>
        </motion.div>

        {/* DropDown Till Medium Devices */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden lg:hidden bg-gray-100"
        >
          <ul className="flex flex-col gap-3 p-4">
            <NavLink onClick={toggleMenu} to="/">
              <li className="cursor-pointer hover:text-gray-500">Home</li>
            </NavLink>
            <NavLink onClick={toggleMenu} to="/contact">
              <li className="cursor-pointer hover:text-gray-500">Contact</li>
            </NavLink>
            <NavLink onClick={toggleMenu} to="/about">
              <li className="cursor-pointer hover:text-gray-500">About</li>
            </NavLink>
            <NavLink onClick={toggleMenu} to="/signup">
              <li className="cursor-pointer hover:text-gray-500">Sign Up</li>
            </NavLink>
          </ul>
        </motion.div>
      </main>
    </>
  );
};

export default HeaderNew;