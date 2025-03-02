
import React, { useContext, useEffect } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { NavLink } from "react-router-dom";
import TotalComputers from "../../api/TotalComputers";
import { SearchContext } from "../../context/SearchContext";



export const Computers = () => {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const {searchQuery, setSearchQuery} = useContext(SearchContext);

  const searchComputers = (elem) => {
    if(searchQuery){
      return elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return elem
  }
  

  const filteredComputers = TotalComputers.filter((elem)=> searchComputers(elem));

  const handleProductClick = () => {
    console.log("handleProductClick")
    setSearchQuery(''); // Clear the search query
  };

    return (
      <>
 
         <div className="our-products ml-4 md:ml-6 xl:ml-12 flex flex-col mt-3 ">
        <div className="flex gap-3 items-center" >
          <div className="bg-red-500 h-10 rounded-md w-5" ></div>
          <h3 className="text-red-500 font-[400] " >Our Computers</h3>
        </div>
        <h1 className="font-bold pt-5 text-2xl lg:text-3xl" >Explore Our Computers</h1>
      </div>

      <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-6 xl:mx-12 mt-8 mb-16">
        {filteredComputers.map((product) => (
       <NavLink to={`/products/${product.title}`}><div
            key={product.id}
            onClick={handleProductClick}
            className="card-container relative w-full cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            data-aos="fade-in" // AOS Animation attribute
            data-aos-duration="1000" // Animation duration in milliseconds
          >
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full md:h-[250px] h-[317px] flex justify-center items-center bg-[#F5F5F5] p-4 object-contain"
              />
     
            </div>

            {/* Card Details */}
            <div className="p-4">
              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{product.title.length > 15  ? product.title.slice(0,15 ) + "..." : product.title}</h3>

              {/* Price Section */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-bold text-green-600">
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-500">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                ★★★★☆
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviews} Reviews)
                </span>
              </div>
            </div>
          </div></NavLink>
        ))}
      </div>


      </>
    )
  }
  