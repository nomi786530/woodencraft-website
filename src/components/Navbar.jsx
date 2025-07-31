import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext"; // ✅ Auth context

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useAuth(); // ✅ Get user and logout from context
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-[#f8f5f1] shadow-md sticky top-0 z-50">
      <nav className="h-16 flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8">
        {/* Logo */}
        <Link to="/" className="h-full py-2">
          <img
            src="/images/logo.png"
            alt="WoodenCraft Logo"
            className="h-18 w-20"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-md font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#8b5e3c]"
                  : "text-[#4b4b4b] hover:text-[#8b5e3c]"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `text-md font-semibold transition-colors duration-200 ${
                isActive
                  ? "text-[#8b5e3c]"
                  : "text-[#4b4b4b] hover:text-[#8b5e3c]"}`
            }
          >
            Shop
          </NavLink>

          {/* Cart */}
          <NavLink to="/cart" className="relative text-[#4b4b4b] hover:text-[#8b5e3c]">
            <FaShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Show Login/Register if not logged in */}
          {!user ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `text-md font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#8b5e3c]"
                      : "text-[#4b4b4b] hover:text-[#8b5e3c]"}`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `text-md font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#8b5e3c]"
                      : "text-[#4b4b4b] hover:text-[#8b5e3c]"}`
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-md font-semibold text-[#4b4b4b] hover:text-[#8b5e3c]"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#8b5e3c]"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#f8f5f1] shadow">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]">
            Home
          </NavLink>

          <NavLink to="/shop" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]">
            Shop
          </NavLink>

          <NavLink to="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]">
            <FaShoppingCart />
            Cart
            {totalItems > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 ml-1">
                {totalItems}
              </span>
            )}
          </NavLink>

          {!user ? (
            <>
              <NavLink to="/login" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]">
                Login
              </NavLink>
              <NavLink to="/register" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]">
                Register
              </NavLink>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="block py-2 text-sm font-medium text-left w-full text-[#4b4b4b] hover:text-[#8b5e3c]"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
