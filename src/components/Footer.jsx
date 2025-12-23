import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#e5e5e5] mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 grid gap-8 md:grid-cols-3 text-sm">
        
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
            Grand Point
          </h3>
          <p className="leading-relaxed text-[#cfcfcf]">
            Handcrafted wooden furniture and decor, made with care, precision,
            and respect for natural materials.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-[#8b5e3c] mb-2">
            Explore
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link to="/" className="hover:text-[#8b5e3c]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/collections" className="hover:text-[#8b5e3c]">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-[#8b5e3c]">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#8b5e3c]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#8b5e3c]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-[#8b5e3c] mb-2">
            Contact
          </h4>
          <ul className="space-y-1.5 text-[#cfcfcf]">
            <li>
              <a
                href="mailto:grandpointdecor@gmail.com"
                className="hover:text-[#8b5e3c]"
              >
                grandpointdecor@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+971556724192"
                className="hover:text-[#8b5e3c]"
              >
                +971 55 672 4192
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/971556724192"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5e3c]"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>MUSFFAH M9 ABU DHABI UAE</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs py-3 border-t border-[#2a2a2a] text-[#bdbdbd]">
        &copy; {new Date().getFullYear()} Grand Point. All rights reserved.
      </div>
    </footer>
  );
}
