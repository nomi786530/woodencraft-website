export default function Collections() {
  const collections = [
    {
      title: "Dining Furniture",
      description: "Handcrafted dining tables and chairs made from solid wood.",
      image: "/images/collections/dining.jpg",
    },
    {
      title: "Living Room Pieces",
      description: "Coffee tables, side tables, and storage designed for everyday use.",
      image: "/images/collections/living.jpg",
    },
    {
      title: "Bedroom Furniture",
      description: "Beds, side tables, and wardrobes with natural finishes.",
      image: "/images/collections/bedroom.jpg",
    },
    {
      title: "Decor & Accessories",
      description: "Small wooden items crafted to add warmth to your space.",
      image: "/images/collections/decor.jpg",
    },
  ];

  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5e3c]">
            Our Collections
          </h1>
          <p className="mt-3 max-w-2xl text-[#4b4b4b]">
            A selection of handcrafted wooden pieces, designed with care and
            built to last.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#8b5e3c]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4b4b4b]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
