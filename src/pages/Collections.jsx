import { useState } from "react";
import { Link } from "react-router-dom";

export default function Collections() {
  const categoriesData = {
    All: [
      "/images/ferniture-4.webp",
      "/images/wooden-cabnet-3.webp",
      "/images/kitchen-cab2.jpg",
      "/images/ceiling-gyp-2.jpg",
    ],

    Furniture: [
      "/images/ferniture-1.webp",
      "/images/ferniture-2.webp",
      "/images/ferniture-3.webp",
      "/images/ferniture-4.webp",
    ],

    Decor: [
      "/images/decor-1.jpg",
      "/images/decor-2.jpg",
      "/images/decor-3.jpg",
      "/images/decor-4.jpg",
    ],

    "Wall Cladding": [
      "/images/wall-cladding-1.jpg",
      "/images/wall-cladding-2.jpg",
      "/images/wall-cladding-3.jpg",
      "/images/wall-cladding-4.jpg",
    ],

    "Wooden Cabinet": [
      "/images/wooden-cabnet-1.webp",
      "/images/wooden-cabnet-2.webp",
      "/images/wooden-cabnet-3.webp",
      "/images/wooden-cabnet-4.webp",
    ],

    "Kitchen Cabinet": [
      "/images/kitchen-cab1.jpg",
      "/images/kitchen-cab2.jpg",
      "/images/kitchen-cab3.jpg",
      "/images/kitchen-cab4.jpg",
    ],

    Wardrobe: [
      "/images/wardrobe1.webp",
      "/images/wardrobe2.webp",
      "/images/wardrobe3.webp",
      "/images/wardrobe4.webp",
    ],

    "Glass Partition": [
      "/images/glass-part1.jpg",
      "/images/glass-part2.jpg",
      "/images/glass-part3.jpg",
      "/images/glass-part4.jpg",
    ],

    "Ceiling & Gypsum Work": [
      "/images/ceiling-gyp-1.jpg",
      "/images/ceiling-gyp-2.jpg",
      "/images/ceiling-gyp-3.jpg",
      "/images/ceiling-gyp-4.jpg",
    ],

    "TV Units": [
      "/images/tv-unit-1.jpg",
      "/images/tv-unit-2.jpg",
      "/images/tv-unit-3.jpg",
      "/images/tv-unit-4.jpg",
    ],

    "Office Interiors": [
      "/images/office-int-1.webp",
      "/images/office-int-2.webp",
      "/images/office-int-3.webp",
      "/images/office-int-4.webp",
    ],

    "Custom Work": [
      "/images/custom-1.jpg",
      "/images/custom-2.jpg",
      "/images/custom-3.jpg",
      "/images/custom-4.jpg",
    ],
  };

  const categories = Object.keys(categoriesData);
  const [activeCategory, setActiveCategory] = useState("All");

  const images = categoriesData[activeCategory];

  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5e3c]">
            Our Work
          </h1>
          <p className="mt-3 max-w-2xl text-[#4b4b4b]">
            Explore our craftsmanship across different categories of interior
            and wooden work.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mb-12">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-3 text-sm font-medium rounded-md border transition-all
                  ${
                    activeCategory === category
                      ? "bg-[#8b5e3c] text-white border-[#8b5e3c] shadow-sm"
                      : "bg-white text-[#4b4b4b] border-[#d6cec4] hover:bg-[#ece7e2]"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Label */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#4b4b4b]">
            {activeCategory}
          </h2>
        </div>

        {/* Image Grid (Always 4 Images) */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img
                src={src}
                alt={`${activeCategory} work`}
                loading="lazy"
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
            View more work →
          </Link>
        </div>

      </div>
    </section>
  );
}
