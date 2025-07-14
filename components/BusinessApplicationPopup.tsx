"use client";
import React, { useState, useEffect } from "react";

const BUSINESS_APPLICATION_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScRDi0qjNFqcLJSX_6apHcWpduY_K5LZtMHkUO3akSFjOAkwg/viewform";

export default function BusinessApplicationPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem("businessAppPopupDismissed")
    ) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("businessAppPopupDismissed", "true");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[1000] flex justify-center items-start">
      <div className="bg-ashGold text-charcoal shadow-lg rounded-b-lg px-6 py-4 mt-2 flex items-center gap-4 max-w-xl w-full mx-2 animate-slideDown">
        <span className="font-bold text-lg sm:text-xl">
          Business Team Applications are OPEN!
        </span>
        <a
          href={BUSINESS_APPLICATION_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-charcoal text-ashGold px-4 py-2 rounded-lg font-semibold shadow hover:bg-black transition-colors text-base sm:text-lg"
        >
          Apply Now
        </a>
        <button
          onClick={handleClose}
          className="ml-auto text-charcoal hover:text-red-600 text-2xl font-bold focus:outline-none"
          aria-label="Close popup"
        >
          &times;
        </button>
      </div>
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}
