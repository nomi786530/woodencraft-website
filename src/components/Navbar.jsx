import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-md font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#8b5e3c]"
        : "text-[#4b4b4b] hover:text-[#8b5e3c]"
    }`;

  return (
    <header className="bg-[#f8f5f1] shadow-md sticky top-0 z-50">
      <nav className="h-16 flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8">
        {/* Logo */}
        <Link to="/" className="h-full py-2 flex items-center">
          <img
            src="/images/logo.png"
            alt="Grand Point"
            className="h-12 w-auto rounded"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/collections" className={navLinkClass}>
            Collections
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-[#8b5e3c]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 bg-[#f8f5f1] shadow">
          {[
            { to: "/", label: "Home" },
            { to: "/collections", label: "Collections" },
            { to: "/about", label: "About" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-medium text-[#4b4b4b] hover:text-[#8b5e3c]"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
