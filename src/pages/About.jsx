export default function About() {
  return (
    <section className="bg-[#f8f5f1] py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Top Editorial Layout */}
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-start mb-20">

          {/* Left Identity */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#8b5e3c] leading-tight">
              About Us
            </h1>

            <div className="mt-6 h-px w-20 bg-[#8b5e3c]/40" />

            <p className="mt-6 text-sm text-[#4b4b4b] leading-relaxed">
              Handcrafted wooden furniture and decor, created with care,
              precision, and respect for natural materials.
            </p>
          </div>

          {/* Right Narrative */}
          <div className="space-y-8 text-[#4b4b4b] leading-relaxed text-base">
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
        </div>

        {/* Values Band */}
        <div className="border-t border-[#e2dbd2] pt-14">
          <div className="grid gap-10 sm:grid-cols-3">

            <div>
              <h3 className="text-lg font-medium text-[#8b5e3c] mb-3">
                Craftsmanship
              </h3>
              <p className="text-sm text-[#4b4b4b] leading-relaxed">
                Every piece is carefully built by hand, focusing on precision and
                durability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#8b5e3c] mb-3">
                Materials
              </h3>
              <p className="text-sm text-[#4b4b4b] leading-relaxed">
                We use quality wood and finishes that highlight the natural beauty
                of the material.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#8b5e3c] mb-3">
                Simplicity
              </h3>
              <p className="text-sm text-[#4b4b4b] leading-relaxed">
                Our designs are clean and functional, made to fit naturally into
                everyday living.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
