import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? "text-[#8b5e3c]"
        : "text-[#4b4b4b] hover:text-[#8b5e3c]"
    }`;

  return (
    <header className="bg-[#f8f5f1] sticky top-0 z-50 border-b border-[#e5dfd7]">
      <nav className="h-16 flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Brand (Text Logo) */}
        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-wide text-[#8b5e3c]">
            Grand Point
          </span>
          <span className="text-xs text-[#4b4b4b]">
            Decor & Maintenance
          </span>
        </Link>

        {/* Desktop Navigation */}
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
        <div className="md:hidden bg-[#f8f5f1] px-6 pb-4 border-t border-[#e5dfd7]">
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
