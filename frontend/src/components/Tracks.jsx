import React, { useState, useEffect } from "react";
import "./Tracks.css";

const Tracks = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  // ESC key close (optional but pro)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveTrack(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <h1
        className="heading mt-20"
        style={{ fontSize: "clamp(48px, 10vw, 100px)" }}
      >
        Tracks:
      </h1>

      {/* CAROUSEL */}
      <div className="banner">
        <div className="slider" style={{ "--quantity": 7 }}>
          {[...Array(7)].map((_, index) => (
            <div
              className="item"
              style={{ "--position": index + 1 }}
              key={index}
              onClick={() => setActiveTrack(index)}
            >

              <div className="click-text heading">
                Track {index + 1} 
                <br />
             
                Coming Soon...
              </div>

              <img src="/Track/card.svg" alt={`Track ${index + 1}`} />

              <div className="click-indicator">
                <span className="arrow heading">⌄</span>
              </div>

            </div>
          ))}
        </div>

        <div className="content">
          <div className="model"></div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr
        className="
          glow-hr
          border-0 h-[8px] w-full
          bg-gradient-to-r from-transparent via-[#bba75d] to-transparent
        "
      />

      {/* MODAL */}
      {activeTrack !== null && (
        <div
          className="track-modal"
          onClick={() => setActiveTrack(null)}
        >
          <div className={`track-flip `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* FRONT */}
            <div className="track-face track-front">
              <img src="/Track/card.svg" alt="Track Front" />
            </div>

            {/* BACK */}
            <div className="track-face track-back">
              <button
                className="track-close"
                onClick={() => setActiveTrack(null)}
                aria-label="Close"
              >
                ✕
              </button>

              <h2>Track {activeTrack + 1}</h2>
              <p>Details coming soon…</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tracks;
