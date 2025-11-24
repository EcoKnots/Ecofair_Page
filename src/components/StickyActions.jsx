import React from "react";

const SITE_URL = "https://ecofairhyderabad.in"; // update after your domain works
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdQEL8o_PLopXZBz1A3rjRT7FbqpYf-AXsvpX_oFJcnfn4dqw/viewform?usp=dialog"; // paste your form link here

export default function StickyActions() {
  const handleRegisterClick = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const handleQrClick = () => {
    window.open(SITE_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-[1100px] flex items-center justify-between gap-3 pointer-events-auto">
        {/* Left: QR mini button (desktop only) */}
        <button
          type="button"
          onClick={handleQrClick}
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#6b4f35]/15 bg-white px-3 py-2 text-xs font-medium text-[#6b4f35] shadow-sm"
        >
          <span className="inline-block w-6 h-6 rounded-md bg-[repeating-linear-gradient(45deg,#eee_0_2px,#fff_2px_6px)]" />
          <span>Open EcoFair page</span>
        </button>

        {/* Right: main register button (centered on mobile) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <button
            type="button"
            onClick={handleRegisterClick}
            className="inline-flex items-center justify-center rounded-full bg-[#2f7a4a] text-white text-sm font-semibold px-6 py-2.5 shadow-[0_4px_14px_rgba(47,122,74,0.35)] hover:shadow-[0_6px_18px_rgba(47,122,74,0.4)] hover:-translate-y-[1px] transition-all duration-150"
          >
            Register for EcoFair – Hyderabad
          </button>
        </div>
      </div>
    </div>
  );
}
