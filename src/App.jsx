import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout"; // Correct import path
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import SignUp from "./Pages/SignUp";
import { ProductDetail } from "./components/UI/ProductDetail";
import { AllProducts } from "./Pages/AllProducts";
import { Phones } from "./components/Categories/Phones";
import { Computers } from "./components/Categories/Computers";
import { Cameras } from "./components/Categories/Cameras";
import { Gaming } from "./components/Categories/Gaming";
import { Headphones } from "./components/Categories/Headphones";
import { Cart } from "./Pages/Cart";
import { SearchProvider } from "./context/SearchContext";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Use AppLayout here
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:title",
        element: <ProductDetail />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/phones",
        element: <Phones />,
      },
      {
        path: "/computers",
        element: <Computers />,
      },
      {
        path: "/cameras",
        element: <Cameras />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/headphones",
        element: <Headphones />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

const App = () => {
  return (
    <SearchProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </SearchProvider>
  );
};

export default App;