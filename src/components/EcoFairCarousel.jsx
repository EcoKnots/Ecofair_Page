import React, { useEffect, useState } from "react";

const slidesData = [
  {
    title: "EcoFair is coming to your doorstep 🌿✨",
    subtitle: "Because conscious living should be easy.",
    img: "/image3.png",
  },
  {
    title: "Healthier homes start here",
    subtitle:
      "Chemical-free foods, clean dairy, and mindful ingredients — directly from trusted hands to your kitchen.",
    img: "/image7.png",
  },
  {
    title: "Wear stories, not waste",
    subtitle:
      "Handloom. Handmade. Artisanal.\nCrafts supporting culture, community, and creativity.",
    img: "/save_image-removebg.png",
  },
  {
    title: "Playtime goes green",
    subtitle:
      "Planet-friendly toys and fun learning that nurture imagination.",
    img: "/image6.png",
  },
];

const AUTO_INTERVAL = 7000; // 7s

export default function EcoFairCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesData.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);

  return (
    <section className="w-full bg-[#f6efe6] text-[#6b4f35] overflow-hidden">
      <div
        className="flex w-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className="w-full shrink-0 flex items-center justify-between h-[260px] md:h-[360px] lg:h-[420px] bg-[#f6efe6]"
          >
            {/* LEFT SIDE — TEXT */}
            <div className="flex-1 flex items-center px-6 md:px-10 lg:px-16">
              <div className="max-w-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-[#2f7a4a]">
                  {slide.title}
                </h1>
                <p className="mt-2 whitespace-pre-line text-sm md:text-[15px] text-[#6b4f35] leading-relaxed">
                  {slide.subtitle}
                </p>

                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#2f7a4a] text-white text-sm font-semibold px-5 py-2 shadow-[0_6px_18px_rgba(0,0,0,0.25)] hover:-translate-y-[1px] hover:shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-all duration-150"
                >
                  Explore EcoFair
                  <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — IMAGE */}
            <div className="flex-1 h-full relative">
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-contain object-right"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 py-3">
        {slidesData.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goToSlide(i)}
            className={`w-4 h-4 rounded-full border border-[#e0d4c6] transition-all duration-150 ${
              i === activeIndex ? "bg-[#2f7a4a]" : "bg-[#f6efe6]"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
