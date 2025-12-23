export default function Contact() {
  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5e3c]">
            Contact
          </h1>
          <p className="mt-3 text-[#4b4b4b] max-w-xl">
            Have a question or want to discuss a custom piece? Reach out using
            the details below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
              Email
            </h3>
            <p className="text-[#4b4b4b]">
              <a
                href="mailto:contact@woodencraft.com"
                className="hover:text-[#8b5e3c]"
              >
                grandpointdecor@gmail.com
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
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


          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
              WhatsApp
            </h3>
            <p className="text-[#4b4b4b]">
              <a
                href="https://wa.me/+971553809056"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8b5e3c]"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
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
