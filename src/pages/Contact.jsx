import {
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";

export default function Contact() {
  return (
    <section className="bg-[#f8f5f1] py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#8b5e3c]">
            Contact Us
          </h1>
          <p className="mt-4 text-[#4b4b4b] leading-relaxed">
            Visit us, talk to our team, or reach out online — we’re here to help
            with your interior and woodwork needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Visit Our Office */}
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <div className="flex justify-center mb-6 text-3xl text-[#8b5e3c]">
              <FiMapPin />
            </div>

            <h3 className="text-xl font-medium mb-4">
              Visit Our Office
            </h3>

            <p className="text-[#4b4b4b] leading-relaxed">
              MUSFFAH M9<br />
              ABU DHABI, UAE
            </p>
          </div>

          {/* Talk to Us (Primary) */}
          <div className="bg-white rounded-xl p-10 shadow-md text-center border border-[#ece7e2]">
            <div className="flex justify-center mb-6 text-4xl text-[#8b5e3c]">
              <FiPhone />
            </div>

            <h3 className="text-2xl font-medium mb-6">
              Talk to Us
            </h3>

            <ul className="space-y-2 text-[#4b4b4b]">
              <li>
                <a href="tel:+971556724192" className="hover:text-[#8b5e3c]">
                  +971 55 672 4192
                </a>
              </li>
              <li>
                <a href="tel:+971523140903" className="hover:text-[#8b5e3c]">
                  +971 52 314 0903
                </a>
              </li>
              <li>
                <a href="tel:+971521999024" className="hover:text-[#8b5e3c]">
                  +971 52 199 9024
                </a>
              </li>
              <li>
                <a href="tel:+971553809056" className="hover:text-[#8b5e3c]">
                  +971 55 380 9056
                </a>
              </li>
            </ul>

            <p className="mt-6 text-sm text-[#6b6b6b]">
              Available for calls & consultations
            </p>
          </div>

          {/* Mail & Reach Us */}
          <div className="bg-white rounded-xl p-8 shadow-sm text-center">
            <div className="flex justify-center mb-6 text-3xl text-[#8b5e3c]">
              <FiMail />
            </div>

            <h3 className="text-xl font-medium mb-4">
              Mail & Reach Us
            </h3>

            <a
              href="mailto:grandpointdecor@gmail.com"
              className="block text-[#4b4b4b] hover:text-[#8b5e3c] mb-6"
            >
              grandpointdecor@gmail.com
            </a>

            {/* Social */}
            <div className="flex justify-center gap-5 text-xl text-[#4b4b4b]">
              <a
                href="https://www.instagram.com/grand_point_decore_official?igsh=MW9qcG5lMXYxbjc5ZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5e3c]"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@grand.point.decor?_r=1&_t=ZS-92IFdxPFOZs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5e3c]"
                aria-label="TikTok"
              >
                <SiTiktok />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
