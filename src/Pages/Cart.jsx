import { NavLink } from "react-router-dom";
import AnimatedButton from "../hooks/AnimatedButton";
import { useCart } from "../context/CartContext"; // Import useCart hook

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart(); // Access cart state and functions

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
  const shippingFee = 10; // Fixed shipping fee
  const total = subtotal + shippingFee; // Calculate total

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity); // Update quantity in the cart
    }
  };

  return (
    <>
      <main className="w-full h-full">
        <h1 className="font-bold text-2xl mx-6 my-2">Your Cart</h1>

        {/* Main Div of cards */}
        <div className="container my-3 flex flex-col gap-3 w-[-webkit-fill-available] mx-6 lg:mx-16 lg:flex-row md:mx-16">
          <div className="flex flex-col w-[-webkit-fill-available] gap-2">
            {/* Display cart items */}
            {cart.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 shadow-lg rounded-md w-full mb-5"
                >
                  <div className="flex-col md:flex-row flex py-3 items-center mx-auto md:mx-0 w-fit md:justify-between md:w-full">
                    <div className="flex flex-col md:flex-row items-center">
                      <img
                        src={item.image}
                        className="mb-5 md:mb-0 w-full h-[7rem] max-w-[10rem] md:h-[5rem] lg:h-[6rem] object-contain md:max-w-[7rem] mx-auto md:mx-4"
                        alt={item.title}
                      />
                      <div className="flex flex-col gap-2 my-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <h5 className="text-gray-500 text-sm">
                          ${item.discountedPrice}
                        </h5>
                        <div className="flex items-center gap-4">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-16 p-2 border rounded-md text-center"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
                            >
                              +
                            </button>
                          </div>
                          <h5 className="text-gray-500 text-sm">
                            Total: ${item.discountedPrice * item.quantity}
                          </h5>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)} // Remove item from cart
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md my-2 md:mx-6"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}

            {/* Return to shop button */}
            <div className="border border-gray-300 py-3 hover:bg-[#F3F4F6] font-medium rounded-md shadow-md w-full text-center mb-3">
              <NavLink to="/allproducts">
                <h1>Return to shop</h1>
              </NavLink>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="flex flex-col border border-gray-300 w-[-webkit-fill-available] rounded-md shadow-lg lg:w-[25rem] py-2 px-3 gap-2 mb-6 lg:mb-3">
            <h2 className="my-2 font-semibold text-xl">Checkout Summary</h2>
            <div className="flex justify-between">
              <h2>Subtotal:</h2>
              <h2>${subtotal.toFixed(2)}</h2>
            </div>
            <div className="flex justify-between">
              <h2>Shipping Fee:</h2>
              <h2>${shippingFee.toFixed(2)}</h2>
            </div>
            <div className="flex justify-between font-semibold">
              <h2>Total:</h2>
              <h2>${total.toFixed(2)}</h2>
            </div>
            <AnimatedButton />
          </div>
        </div>
      </main>
    </>
  );
};