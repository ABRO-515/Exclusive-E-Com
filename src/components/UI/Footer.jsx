import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoSendOutline  } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Exclusive Subscribe Section */}
        <div>
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="mt-4 flex items-center border border-gray-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <IoSendOutline   className="text-white mr-2" /> 
           
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg">Support</h3>
          <p className="mt-2 text-sm">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-2 text-sm">exclusive@gmail.com</p>
          <p className="mt-2 text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg">Quick Link</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App & Social Media */}
        <div>
          <h3 className="font-bold text-lg">Download App</h3>
          <p className="text-sm mt-2">Save $3 with App New User Only</p>
          <div className="mt-3">
            <img
              src="/QRCode.png"  // Replace with your QR code image
              alt="QR Code"
              className="w-24  border-[1px] border-white bg-white"
            />
          </div>
          <div className="mt-3 flex space-x-2">
          <div className="border-[3px] rounded-md" >
            <img
              src="/e.png" className="h-[2rem]" // Replace with Google Play Store button
              alt="Google Play"
            />
            </div>
<div className="border-[3px] rounded-md" >
            <img
              src="/a.png" className="h-[2rem]" // Replace with Apple App Store button
              alt="App Store"
            />
</div>

          </div>
          <div className="mt-4 flex space-x-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
