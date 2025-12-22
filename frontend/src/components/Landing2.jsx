import CardStack from "../utils/CardStack";
import Carousel from "../utils/Carousel";
import FunkyButton from "../utils/FunkyButton";
import { motion } from "motion/react";

export default function Landing2() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* ⭐ DECORATIVE STARS */}
      <img
        src="/star.svg"
        className="absolute left-6 top-20 w-4 opacity-60 md:left-20 md:top-32 md:w-6"
      />
      <img
        src="/star.svg"
        className="absolute right-10 top-28 w-4 opacity-60 md:right-32 md:top-40 md:w-7"
      />
      <img
        src="/star.svg"
        className="absolute left-1/3 bottom-24 w-4 opacity-50 md:left-[35%] md:bottom-40 md:w-8"
      />
      <img
        src="/star.svg"
        className="absolute right-24 bottom-28 w-3 opacity-40 md:right-52 md:bottom-44 md:w-6"
      />

      {/* ================= MAIN WRAPPER ================= */}
      <div className="relative z-10 min-h-screen px-4 sm:px-8 lg:px-16 pt-24">
        <div
          className="
            max-w-[1500px]
            mx-auto
            flex
            flex-col
            md:flex-row
            items-center
            md:items-start
            gap-24
          "
        >

          {/* ================= LEFT SECTION ================= */}
          <div
            className="
              w-full
              md:w-1/2
              flex
              flex-col
              items-center
              md:items-start
              text-center
              md:text-left
            "
          >

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                font-[Julee]
                text-[clamp(36px,5vw,76px)]
                leading-none
                tracking-wide
                mb-8
              "
              style={{ WebkitTextStroke: "1px black" }}
            >
              BATTLE OF BRAINS
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
                font-['Edu_TAS_Beginner']
                text-[clamp(14px,1.6vw,18px)]
                leading-relaxed
                tracking-wide
                text-[#D9D9D9]
                max-w-[620px]
                mb-24
              "
            >
              Vihaan isn’t just about building projects.
              <br />
              It’s about learning fast, collaborating harder,
              <br />
              and creating impact when the clock is ticking.
            </motion.p>

            {/* CARD STACK */}
            <div className="w-full flex justify-center md:justify-start mb-28">
              <CardStack />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-6 justify-center md:justify-start">
              <FunkyButton text="SCHEDULE" />
              <FunkyButton text="DOMAINS" variant="secondary" />
            </div>
          </div>

          {/* ================= RIGHT SECTION ================= */}
          <div
            className="
              w-full
              md:w-1/2
              flex
              justify-center
              md:justify-end
            "
          >
            <div className="w-full max-w-[620px]">
              <Carousel />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
