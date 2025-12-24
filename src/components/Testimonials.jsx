import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sheikh Khalid Bin Muhammad",
    review:
      "Absolutely love the handcrafted products! The quality is amazing and the delivery was quick.",
  },
  {
    id: 2,
    name: "Sheikh Yousaf Al Mazroi",
    review:
      "Beautiful wooden pieces! They give such a warm and aesthetic vibe to my home.",
  },
  {
    id: 3,
    name: "Sheikha Mariam",
    review:
      "Top-notch craftsmanship and super friendly customer service. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fefcf9] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-amber-100 shadow-sm rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <p className="text-lg text-amber-800 italic mb-4 leading-relaxed">
                “{t.review}”
              </p>
              <h3 className="text-md font-semibold text-amber-700">— {t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
