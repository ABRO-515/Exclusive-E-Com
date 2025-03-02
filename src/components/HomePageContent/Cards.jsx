
import React, { useContext, useEffect } from "react";
import { IoCashOutline } from "react-icons/io5";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import { NavLink } from "react-router-dom";
import products from "../../api/products.json";
import { SearchContext } from "../../context/SearchContext";



const Cards = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);


  const {searchQuery} = useContext(SearchContext);

  const searchCards = (elem) => {
    if(searchQuery){
      return elem.title.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return elem
  }
  
  
    const filteredCards = products.filter((elem)=> searchCards(elem))

  return (
    <>

      {/* Red-Heading */}


      <div className="our-products ml-4 md:ml-6 xl:ml-12 flex flex-col mt-3 ">
        <div className="flex gap-3 items-center" >
          <div className="bg-red-500 h-10 rounded-md w-5" ></div>
          <h3 className="text-red-500 font-[400] " >Our Products</h3>
        </div>
        <h1 className="font-bold pt-5 text-2xl lg:text-3xl" >Explore Our Products</h1>
      </div>

      <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4 md:mx-6 xl:mx-12 mt-8">
        {filteredCards.map((product) => (
       <NavLink to={`/products/${product.title}`} >   <div
            key={product.id}
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
              <h3 className="font-semibold text-lg mb-2">{product.title}</h3>

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
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index}>
                      {index < Math.floor(product.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.reviews} Reviews)
                </span>
              </div>
            </div>
          </div></NavLink>
        ))}
      </div>
      <div className="last-btn flex items-center justify-center mt-12">
   <NavLink to="/allproducts" >    <button className="bg-red-500 px-5 py-3 font-[500] text-white rounded-md" >View All Products</button></NavLink> 
      </div>


      {/* last-section */}

      <div className=" mb-24 grid grid-cols-1  lg:grid-cols-3 mx-14  gap-12 text-center ">

        <div className="flex flex-col gap-3 items-center mt-14  " >
          <div className="bg-[#2F2E30]  rounded-full flex items-center w-fit p-[9px]">
            <div className="rounded-full bg-black flex items-center w-fit p-[10px]" >
              <img src="/shop.png" alt="" />
            </div>
          </div>
          <h1 className="font-bold" >FREE AND FAST DELIVERY</h1>
          <h4 className="font-medium text-center" >Free delivery for all orders over $140</h4>
        </div>

        <div className="flex flex-col gap-3 items-center mt-14  " >
          <div className="bg-[#2F2E30]  rounded-full flex items-center w-fit p-[9px]">
            <div className="rounded-full bg-black flex items-center w-fit p-[10px]" >
              <img src="/bag.png" alt="" />
            </div>
          </div>
          <h1 className="font-bold" >24/7 CUSTOMER SERVICE</h1>
          <h4 className="font-medium" >Friendly 24/7 customer support</h4>
        </div>

        <div className="flex flex-col gap-3 items-center mt-14" >
          <div className="bg-[#2F2E30]  rounded-full flex items-center w-fit p-[9px]">
            <div className="rounded-full bg-black flex items-center w-fit p-[10px]" >
              <IoCashOutline className="text-white text-[40px]" />
            </div>
          </div>
          <h1 className="font-bold" >MONEY BACK GUARANTEE</h1>
          <h4 className="font-medium" >We return money within 30 days</h4>
        </div>


      </div>
    </>

  );
};

export default Cards;
