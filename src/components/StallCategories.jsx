import React, { useState } from "react";

function CategoryMediaSection({ title, imageUrl, videoUrl, points }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full max-w-4xl mx-auto mb-10">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#2f7a4a] mb-3">
        {title}
      </h2>

      {/* Media box */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] bg-black">
        {isPlaying ? (
          // Video mode
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
          />
        ) : (
          // Image + overlay + play button
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />
            {/* Text & play button overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-white text-lg md:text-2xl font-semibold mb-4 drop-shadow">
                {title}
              </h3>
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center justify-center rounded-full w-14 h-14 md:w-16 md:h-16 bg-white/90 hover:bg-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-200 active:scale-95"
              >
                <span className="ml-0.5 text-2xl md:text-3xl text-[#2f7a4a]">
                  ▶
                </span>
              </button>
              <p className="mt-3 text-xs md:text-sm text-white/85 max-w-md">
                Tap play to watch a quick peek into this stall category.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Description points */}
      <ul className="mt-4 text-sm md:text-[15px] text-[#6b4f35] space-y-1 list-disc list-inside">
        {points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </section>
  );
}

const categories = [
  {
    title: "Sustainable Food & Wellness",
    imageUrl: "food_image.jpg",
    videoUrl:
      "/food_video.mp4", // 🔁 replace later with your own food-related video
    points: [
      "Organic Food & Juices",
      "Millets & Healthy Snacks",
      "Dairy Alternatives (Plant-based milk, ghee, etc.)",
      "Natural & Immunity Products",
      "Herbal & Ayurvedic Wellness",
      "Sattvic Food & Homemade Treats",
    ],
  },
  {
    title: "Home & Daily Essentials",
    imageUrl: "/Home_Essential_imag.jpg",
    videoUrl:
      "/Home_Essentials.mp4", // 🔁 replace with eco home essentials video
    points: [
      "Eco-friendly Cleaning Products",
      "Plastic-free Home Essentials",
      "Reusable Cutlery, Straw & Kitchenware",
      "Sustainable Storage Solutions",
      "Natural Fragrances & Incense",
    ],
  },
  {
    title: "Fashion & Clothing",
    imageUrl: "/fashion_image.jpg",
    videoUrl:
      "/fashion_video.mp4", // 🔁 replace with handloom / fashion video
    points: [
      "Handloom Apparel",
      "Preloved / Thrift Fashion",
      "Upcycled Clothing",
      "Artisanal & Handmade Wear",
      "Eco Footwear & Accessories",
    ],
  },
  {
    title: "Beauty & Personal Care",
    imageUrl: "natural-cosmetics-frame.jpg",
    videoUrl:
      "Beauty_video.mp4", // 🔁 replace with natural skincare video
    points: [
      "Natural Skin & Haircare",
      "Handmade Soaps",
      "Zero-waste Beauty Products",
      "Ayurvedic & Herbal Cosmetics",
    ],
  },
  {
    title: "Art, Craft & Culture",
    imageUrl: "indian-handicraft_image.jpg",
    videoUrl:
      "Craft_video.mp4", // 🔁 replace with pottery / craft video
    points: [
      "Handmade Crafts & Decor",
      "Handcrafted Jewelry",
      "Terracotta & Pottery",
      "Kid-friendly Creative Crafts",
      "Traditional Artworks & Souvenirs",
    ],
  },
  {
    title: "Kids & Education",
    imageUrl: "kids_and_education.jpg",
    videoUrl:
      "kids_Education", // 🔁 replace with kids eco activities video
    points: [
      "Eco-friendly Toys",
      "Sustainable Learning Kits",
      "Board Games on Earth Awareness",
      "Storytelling & Art Activities",
    ],
  },
  {
    title: "Gardening & Nature",
    imageUrl: "gardening.jpg",
    videoUrl:
      "gardening.mp4", // 🔁 replace with plants / gardening video
    points: [
      "Plants & Indoor Greens",
      "Garden Tools & Accessories",
      "Composting Kits & Seeds",
      "Urban Farming Solutions",
    ],
  },
  {
    title: "Conscious Living Services",
    imageUrl: "conscious_livig.jpg",
    videoUrl:
      "Recycling.mp4", // 🔁 replace with awareness / recycling video
    points: [
      "NGOs & Awareness Stalls",
      "Waste Segregation & Recycling Partners",
    ],
  },
];

export default function StallCategories() {
  return (
    <div className="bg-[#f6efe6] py-10 px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-[#6b4f35] mb-6">
          EcoFair Stall Categories
        </h1>
        <p className="text-sm md:text-[15px] text-[#9b8a7a] mb-8 max-w-2xl">
          Scroll through each category to see what kinds of stalls you’ll find
          at EcoFair. Tap play on any section to watch a short glimpse of the
          experience.
        </p>

        {categories.map((cat) => (
          <CategoryMediaSection key={cat.title} {...cat} />
        ))}
      </div>
    </div>
  );
}
