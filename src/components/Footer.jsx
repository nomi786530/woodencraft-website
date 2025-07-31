import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-4">WoodenCraft</h3>
          <p>
            Premium handmade wooden products crafted with love and care. Add
            warmth and elegance to your life.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="/login" className="hover:underline">
                Login / Register
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: support@woodencraft.com</p>
          <p>Phone: +92 123 4567890</p>
          <p>Address: Lahore, Pakistan</p>
        </div>
      </div>

      <div className="text-center mt-8 text-xs border-t border-gray-700 pt-3">
        &copy; {new Date().getFullYear()} WoodenCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
