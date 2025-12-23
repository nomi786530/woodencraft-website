export default function About() {
  return (
    <section className="bg-[#f8f5f1] py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8b5e3c]">
            About Us
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#4b4b4b] leading-relaxed">
          <p>
            We create handcrafted wooden furniture and decor with a focus on
            quality, simplicity, and long-lasting design. Each piece is made
            with attention to detail, using carefully selected materials and
            traditional techniques.
          </p>

          <p>
            Our work is rooted in respect for natural wood—its texture, grain,
            and character. Rather than mass production, we believe in making
            fewer pieces, done properly, so they can be enjoyed for years.
          </p>

          <p>
            From furniture to smaller decorative items, every product reflects
            our commitment to craftsmanship and honest work. We aim to create
            pieces that feel natural in your space and meaningful in everyday
            use.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
              Craftsmanship
            </h3>
            <p className="text-sm text-[#4b4b4b]">
              Every piece is carefully built by hand, focusing on precision and
              durability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
              Materials
            </h3>
            <p className="text-sm text-[#4b4b4b]">
              We use quality wood and finishes that highlight the natural beauty
              of the material.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-[#8b5e3c] mb-2">
              Simplicity
            </h3>
            <p className="text-sm text-[#4b4b4b]">
              Our designs are clean and functional, made to fit naturally into
              everyday living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
