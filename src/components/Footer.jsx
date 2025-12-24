import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#e5e5e5] mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 grid gap-10 md:grid-cols-3 text-sm">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-[#8b5e3c] mb-3">
            Grand Point
          </h3>
          <p className="leading-relaxed text-[#cfcfcf] max-w-sm">
            Handcrafted wooden furniture and decor, made with care, precision,
            and respect for natural materials.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-medium text-[#8b5e3c] mb-3">
            Explore
          </h4>
          <ul className="space-y-2">
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
          <h4 className="text-lg font-medium text-[#8b5e3c] mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-[#cfcfcf] mb-4">
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
            <li className="text-[#bdbdbd]">
              MUSFFAH M9 ABU DHABI UAE
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.instagram.com/grand_point_decore_official?igsh=MW9qcG5lMXYxbjc5ZQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#8b5e3c]"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@grand.point.decor?_r=1&_t=ZS-92IFdxPFOZs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-[#8b5e3c]"
            >
              <SiTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-3 text-center text-xs text-[#bdbdbd]">
          &copy; {new Date().getFullYear()} Grand Point. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
