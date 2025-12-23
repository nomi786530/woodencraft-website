export default function Gallery() {
  const images = [
    "/images/gallery-1 (15).jpeg",
    "/images/gallery-1 (16).jpeg",
    "/images/gallery-1 (17).jpeg",
    "/images/gallery-1 (18).jpeg",
    "/images/gallery-1 (19).jpeg",
    "/images/gallery-1 (20).jpeg",
    "/images/gallery-1 (21).jpeg",
    "/images/gallery-1 (22).jpeg",
    "/images/gallery-1 (23).jpeg",
    "/images/gallery-1 (24).jpeg",
    "/images/gallery-1 (10).jpeg",
    "/images/gallery-1 (11).jpeg",
  ];

  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5e3c]">
            Gallery
          </h1>
          <p className="mt-3 max-w-2xl text-[#4b4b4b]">
            A glimpse into our craftsmanship, materials, and attention to
            detail.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <img
                src={src}
                alt={`Craft work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
