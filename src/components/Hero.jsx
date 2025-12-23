// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: "Handcrafted Wooden Art",
    subtitle: "Bring warmth and elegance to your home with our wooden crafts.",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "Rustic Home Decor",
    subtitle: "Perfect blend of tradition and modern design for your space.",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "Nature-Inspired Designs",
    subtitle: "Grand Points made with love, inspired by the beauty of nature.",
  },
];

const Hero = () => {
  return (
    <section className="w-full h-[90vh]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center text-center px-4 sm:px-10"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded text-white max-w-xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="mb-4 text-base sm:text-lg">{slide.subtitle}</p>
                {/* <button className="bg-[#8B5E3C] hover:bg-[#6A452C] px-6 py-2 rounded font-medium text-white transition">
  Shop Now
</button> */}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
