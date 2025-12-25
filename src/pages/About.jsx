import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function About() {
  const slides = [
    {
      title: "Our Vision",
      image: "/images/vision.jpg",
      text:
        "To be a trusted name in interior and woodwork solutions, known for thoughtful design, skilled craftsmanship, and lasting quality. We aim to create spaces that feel balanced, functional, and timeless.",
    },
    {
      title: "Our Mission",
      image: "/images/mission.jpg",
      text:
        "Our mission is to deliver custom interior and woodwork solutions that reflect our clients’ needs and lifestyles. We focus on precision, honest materials, and clear communication throughout every project.",
    },
    {
      title: "Quality & Policy",
      image: "/images/quality.jpg",
      text:
        "We follow strict quality standards at every stage — from material selection to final installation. Our work is guided by integrity, consistency, and a commitment to delivering results we stand behind.",
    },
  ];

  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);

  const nextSlide = () =>
    setIndex(index === slides.length - 1 ? 0 : index + 1);

  return (
    <section className="bg-[#f8f5f1] py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ================= ABOUT INTRO ================= */}
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] items-start mb-20">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-[#8b5e3c]">
              About Us
            </h1>

            <div className="mt-6 h-px w-20 bg-[#8b5e3c]/40" />

            <p className="mt-6 text-sm text-[#4b4b4b] leading-relaxed">
              Handcrafted wooden furniture and decor, created with care,
              precision, and respect for natural materials.
            </p>
          </div>

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
        </div>

        {/* ================= VALUES ================= */}
        <div className="border-t border-[#e2dbd2] pt-14 mb-24">
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
                We use quality wood and finishes that highlight the natural
                beauty of the material.
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

        {/* ================= VISION / MISSION / QUALITY ================= */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

          <div className="grid md:grid-cols-2 min-h-[420px]">

            {/* Image */}
            <div className="relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center px-8 sm:px-14 py-12">
              <span className="text-sm uppercase tracking-wide text-[#8b5e3c] mb-3">
                Our Philosophy
              </span>

              <h2 className="text-3xl font-semibold mb-6">
                {slide.title}
              </h2>

              <p className="text-[#4b4b4b] leading-relaxed max-w-xl">
                {slide.text}
              </p>

              {/* Navigation */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d6cec4] hover:bg-[#f3efe9]"
                  aria-label="Previous"
                >
                  <FiChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#d6cec4] hover:bg-[#f3efe9]"
                  aria-label="Next"
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
