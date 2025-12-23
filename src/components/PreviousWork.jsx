import { Link } from "react-router-dom";

export default function PreviousWorkSection() {
  const images = [
    "/images/gallery-1 (1).jpeg",
    "/images/gallery-1 (10).jpeg",
    "/images/gallery-1 (11).jpeg",
    "/images/gallery-1 (12).jpeg",
    "/images/gallery-1 (13).jpeg",
    "/images/gallery-1 (14).jpeg",
  ];

  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8b5e3c]">
            Previous Work
          </h2>
          <p className="mt-2 text-[#4b4b4b] max-w-xl">
            A glimpse of our recent handcrafted projects.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img
                src={src}
                alt={`Previous work ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="mt-8">
          <Link
            to="/gallery"
            className="text-sm font-semibold text-[#8b5e3c] hover:underline"
          >
            View full gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
