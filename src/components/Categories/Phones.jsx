import React, { useContext, useEffect, useState } from "react";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { NavLink } from "react-router-dom";
import TotalPhones from "../../api/TotalPhones";
import { SearchContext } from "../../context/SearchContext";

export const Phones = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [filteringBrands, setFilteringBrands] = useState("All Brands")

// logic of filtering brands
const filterBrands = (elem) => {
  if(filteringBrands === "All Brands"){
    return elem;
  }
  else{
    return elem.brand === filteringBrands
  }
}




  // Logic of searching the phones
  const searchPhones = (elem) => {
    if (searchQuery) {
      return elem.title.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return elem;
  };

  // Filter phones based on search query
  const filteredPhones = TotalPhones.filter((elem) => searchPhones(elem) && filterBrands(elem) );

  const handleProductClick = () => {
    console.log("handleProductClick");
    setSearchQuery(''); // Clear the search query
  };

  const handleFilteringBrands = (e) => {
    setFilteringBrands(e.target.value)
  }
  

  return (
    <>
      <div className="our-products ml-4 md:ml-6 xl:ml-12 flex flex-col mt-3">
        <div className="flex gap-3 items-center">
          <div className="bg-red-500 h-10 rounded-md w-5"></div>
          <h3 className="text-red-500 font-[400]">Our Phones</h3>
        </div>
        <h1 className="font-bold pt-5 text-2xl lg:text-3xl">Explore Our Phones</h1>
      </div>

      {/* Brand Filter Dropdown */}
      <div className="flex items-center justify-center mt-3">
        <select name="All Brands" id="All" className="rounded-md border px-2 py-1" onChange={handleFilteringBrands} value={filteringBrands} >
          <option value="All Brands">All Brands</option>
          <option value="Apple">Apple</option>
          <option value="Google">Google</option>
          <option value="Samsung">Samsung</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Nothing">Nothing</option>
        </select>
      </div>

      {/* Display Phones */}
      {filteredPhones.length === 0 ? (
        <div className="flex items-center h-screen justify-center w-full mx-auto">
          <h1 className="text-2xl">Phone not found</h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-6 xl:mx-12 mt-8 mb-16">
          {filteredPhones.map((product) => (
            <NavLink to={`/products/${product.title}`} key={product.id}>
              <div
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
                  {/* Brand */}
                  <h4 className="text-sm text-gray-600 font-medium mb-1">
                    {product.brand}
                  </h4>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2">
                    {product.title.length > 16
                      ? product.title.slice(0, 16) + "..."
                      : product.title}
                  </h3>

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
                    <div className="flex text-yellow-400">★★★★☆</div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} Reviews)
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};