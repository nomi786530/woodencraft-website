import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

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
  const [isOpen, setIsOpen] = useState(false);
  const images = categoriesData[activeCategory];

  return (
    <section className="bg-[#f8f5f1] py-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#8b5e3c]">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-[#4b4b4b] leading-relaxed">
            Explore our expertise across different areas of interior and wooden work.
          </p>
        </div>

        {/* Mobile Category Dropdown */}
        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-md shadow-sm text-sm font-medium text-[#4b4b4b]"
          >
            {activeCategory}
            <FiChevronDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <ul className="mt-2 bg-white rounded-md shadow-sm divide-y">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => {
                      setActiveCategory(category);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm
                      ${
                        activeCategory === category
                          ? "text-[#8b5e3c] font-medium"
                          : "text-[#4b4b4b]"
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="grid gap-12 md:grid-cols-[260px_1fr]">

          {/* Desktop Categories */}
          <aside className="hidden md:block">
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition
                      ${
                        activeCategory === category
                          ? "bg-[#ece7e2] text-[#8b5e3c] border-l-4 border-[#8b5e3c]"
                          : "text-[#4b4b4b] hover:bg-[#f0ebe6]"
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Images (VISIBLE ON ALL SCREENS) */}
          <div>
            <h2 className="text-lg font-medium text-[#4b4b4b] mb-6">
              {activeCategory}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white"
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

            <div className="mt-10">
              <Link
                to="/gallery"
                className="text-sm font-medium text-[#8b5e3c] hover:underline"
              >
                View more work →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
