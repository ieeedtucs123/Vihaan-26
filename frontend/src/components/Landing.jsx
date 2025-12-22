

import { useEffect, useState } from "react";

import "../App.css";
import Button from "../utils/button";

export default function Landing() {

  const [mobile, setMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const resize = () => setMobile(window.innerWidth < 900);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);


  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/bglanding.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        color: "#fff",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*  NAVBAR */}
         <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <img
          src="/vihaanlogo.svg"
          alt="logo"
          style={{ width: "100px" }}
        />

        {/* DESKTOP NAV */}
        {!mobile && (
          <div style={{ display: "flex", gap: "32px" }}>
            {["ABOUT US", "SCHEDULE", "PRIZES", "TRACKS","GALLERY","FAQS"].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "Julee, cursive",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {/* MOBILE MENU BUTTON */}
        {mobile && (
          <div
  role="button"
  style={{
    cursor: "pointer",
    color: "#fff",
    fontSize: "28px",
    userSelect: "none",
  }}
>
  ☰
</div>
        )}
      </nav>

        {/*HERO */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          {/* HEADING */}
          <h1
            className="heading"
            style={{
              fontSize: "clamp(48px, 10vw, 100px)",
            }}
          >
            VIHAAN 9.0
          </h1>

          {/* SUBTEXT */}
          <p
            className="paragraph"
            style={{
              fontSize: "clamp(18px, 3vw, 26px)",
              marginBottom: "24px",
            }}
          >
            COMING SOON…
          </p>

          {/* REGISTER INPUT */}
          <div
            style={{
              fontFamily: "Gaegu, cursive",
              fontSize: "clamp(16px, 3vw, 22px)",
              letterSpacing: "0.05em",
              marginBottom: "10px",
            }}
          >
            REGISTER AT
           
           
          </div>

          {/* ✅ UTILS BUTTON */}
          <Button />
        </div>
      </div>
    </div>
  );
}
