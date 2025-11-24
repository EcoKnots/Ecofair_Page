import React, { useEffect, useState } from "react";

export default function WelcomeOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("ecoFairWelcomeShown");
    if (!alreadyShown) {
      setShow(true);
      localStorage.setItem("ecoFairWelcomeShown", "1");

      const timer = setTimeout(() => {
        setShow(false);
      }, 2600); // show for about 2.6s

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  const emojis = ["🎉", "🌸", "🌼", "💐", "🍃", "🌷", "✨", "🟢", "🟡", "🟣"];

  return (
    // pointer-events-none so it doesn't block scroll or clicks
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Centered welcome text */}
      <div className="absolute inset-x-0 top-10 flex justify-center">
        <div className="px-6 py-3 rounded-2xl bg-[#f6efe6]/95 border border-white/70 shadow-md text-center pointer-events-auto">
          <h1 className="text-lg md:text-xl font-bold text-[#2f7a4a]">
            Welcome to EcoFair
          </h1>
          <p className="mt-1 text-xs md:text-sm text-[#6b4f35]">
            Celebrate conscious living with us 🌿
          </p>
        </div>
      </div>

      {/* Confetti blast around the center */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative w-[260px] h-[160px]">
          {Array.from({ length: 18 }).map((_, i) => {
            const left = 20 + Math.random() * 60; // 20%–80%
            const delay = i * 0.06; // stagger
            return (
              <span
                key={i}
                className="confetti-emoji"
                style={{
                  left: `${left}%`,
                  bottom: "0%",
                  animationDelay: `${delay}s`,
                }}
              >
                {emojis[i % emojis.length]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
