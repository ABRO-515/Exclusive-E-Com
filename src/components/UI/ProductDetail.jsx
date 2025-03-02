import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from "../HomePageContent/Cards";
import products from "../../api/products.json";
import TotalPhones from "../../api/TotalPhones.json";
import TotalProducts from "../../api/TotalProducts.json";
import TotalComputers from "../../api/TotalComputers.json";
import TotalCameras from "../../api/TotalCameras.json";
import TotalGaming from "../../api/TotalGaming.json";
import TotalHeadphones from "../../api/TotalHeadphones.json";
import { useCart } from "../../context/CartContext"; // Import useCart hook

export const ProductDetail = () => {



  const { title } = useParams();
  const { addToCart } = useCart(); // Use the addToCart function from CartContext


  useEffect(() => {
 window.scrollTo(0,0)
  }, [title])
  

  // Find the product in the appropriate JSON file
  const OnlyProduct = products.find((elem) => elem.title === title);
  const phone = TotalPhones.find((elem) => elem.title === title);
  const totalProduct = TotalProducts.find((elem) => elem.title === title);
  const totalComputer = TotalComputers.find((elem) => elem.title === title);
  const totalCamera = TotalCameras.find((elem) => elem.title === title);
  const totalGame = TotalGaming.find((elem) => elem.title === title);
  const totalHeadphone = TotalHeadphones.find((elem) => elem.title === title);

  // Determine which item to display (phone, product, or totalProduct)
  const item = phone || OnlyProduct || totalProduct || totalComputer || totalCamera || totalGame || totalHeadphone;

  // Handle case where the item is not found
  if (!item) {
    return <div>Product not found!</div>;
  }

  // Handle Add to Cart button click
  const handleAddToCart = () => {
    addToCart(item); // Add the item to the cart
  };

  return (
    <main className="w-full h-full">
      <div className="flex justify-center min-h-[50vh]">
        <div className="flex flex-col lg:flex-row items-center justify-center my-6 mx-6 md:gap-12 lg:gap-24 xl:gap-36">
          {/* For Medium Devices Only */}
          <div className="md:flex hidden gap-3 lg:flex-col justify-center">
            {/* Render small product images dynamically */}
            {[1, 2, 3, 4].map((index) => (
              <img
                key={index}
                className="w-[7.5rem] lg:w-[6rem] xl:w-[8rem] bg-[#F5F5F5] object-contain"
                src={item.image}
                alt={`Product ${index}`}
              />
            ))}
          </div>

          {/* Product Image */}
          <div className="bg-[#F5F5F5] max-w-[26rem] lg:max-w-[21rem] md:items-center w-full xl:h-full items-center flex justify-center">
            <img
              className="w-[55vw] md:w-full lg:w-[19rem]"
              src={item.image}
              alt={item.title}
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2 w-[-webkit-fill-available] md:mx-24 lg:mx-0 lg:w-fit">
            <h1 className="text-xl sm:text-2xl font-semibold">{item.title}</h1>
            <div className="flex items-center gap-2">
              <h4 className="text-red-500 text-xl">${item.discountedPrice}</h4>
              <span className="line-through text-gray-500">${item.price}</span>
            </div>
            <div className="flex items-center gap-2">
              <h4 className="text-yellow-400 text-xl">★★★★☆</h4>
              <span className="text-sm text-gray-500">({item.reviews})</span>
            </div>
            <p className="text-sm">This is the brief description of the product.</p>
            <button
              onClick={handleAddToCart} // Add onClick handler
              className="bg-red-500 hover:bg-red-600 text-white w-full rounded-sm py-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <Cards />
    </main>
  );
};