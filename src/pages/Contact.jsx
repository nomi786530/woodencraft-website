import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-[#f8f5f1] py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#8b5e3c]">
            Contact Us
          </h1>
          <p className="mt-4 text-[#4b4b4b] leading-relaxed">
            Have a question or want to discuss a custom project?  
            Reach out through the details below and we’ll be happy to assist.
          </p>
        </div>

        {/* WhatsApp – Primary */}
        <div className="mb-16 bg-[#ece7e2] rounded-xl p-8 flex gap-6 items-start">
          <div className="text-3xl text-[#8b5e3c]">
            <FiMessageCircle />
          </div>
          <div>
            <h2 className="text-xl font-medium text-[#8b5e3c] mb-2">
              WhatsApp
            </h2>
            <p className="text-[#4b4b4b] mb-3">
              The fastest way to reach us for quick discussions.
            </p>
            <a
              href="https://wa.me/971553809056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-medium text-[#8b5e3c] hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* Secondary Contacts */}
        <div className="grid gap-10 sm:grid-cols-2 mb-16">

          {/* Email */}
          <div className="flex gap-5 items-start">
            <div className="text-2xl text-[#8b5e3c]">
              <FiMail />
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#8b5e3c] mb-1">
                Email
              </h3>
              <a
                href="mailto:contact@woodencraft.com"
                className="text-[#4b4b4b] hover:text-[#8b5e3c]"
              >
                grandpointdecor@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-5 items-start">
            <div className="text-2xl text-[#8b5e3c]">
              <FiPhone />
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#8b5e3c] mb-1">
                Phone
              </h3>
              <ul className="space-y-1 text-[#4b4b4b]">
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
            </div>
          </div>

        </div>

        {/* Location */}
        <div className="border-t border-[#e2dbd2] pt-10 flex gap-5 items-start">
          <div className="text-2xl text-[#8b5e3c]">
            <FiMapPin />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#8b5e3c] mb-1">
              Location
            </h3>
            <p className="text-[#4b4b4b]">
              MUSFFAH M9 ABU DHABI UAE
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
