import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import einnarImage from "../assets/einnar.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-white"
    >
      <TechnicalGrid opacity={0.035} size={80} />

      {/* =========================================
          DESKTOP TECHNICAL BACKGROUND
      ========================================= */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] overflow-hidden lg:block xl:w-[45%]">
        {/* Orange atmospheric glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[18%] top-[22%] h-[min(420px,50vh)] w-[min(420px,35vw)] rounded-full bg-[#e87524]/[0.07] blur-3xl"
        />

        {/* Vertical technical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[24%] top-[15%] h-[70%] w-px origin-top bg-[#e87524]/20"
        />

        {/* Horizontal technical line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-0 top-[52%] h-px w-[95%] origin-right bg-[#e87524]/20"
        />

        {/* Outer animated circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[10%] top-[24%] aspect-square w-[min(440px,36vw)] rounded-full border border-[#e87524]/10"
        >
          <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-[#e87524]" />
        </motion.div>

        {/* Inner dashed circle */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[15%] top-[29%] aspect-square w-[min(360px,30vw)] rounded-full border border-dashed border-black/[0.08]"
        />

        {/* =====================================
            DESKTOP PORTRAIT
        ===================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute right-[17%] top-[18%] h-[min(500px,58vh)] w-[clamp(220px,22vw,340px)] xl:right-[20%] xl:w-[clamp(260px,23vw,360px)]"
        >
          {/* Portrait frame */}
          <div className="absolute inset-0 overflow-hidden border border-black/10 bg-white/60">
            <img
              src={einnarImage}
              alt="Einnar James Bose"
              className="h-full w-full object-cover object-center"
            />

            {/* Subtle image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

            {/* Orange tint */}
            <div className="pointer-events-none absolute inset-0 bg-[#e87524]/[0.025] mix-blend-multiply" />
          </div>

          {/* Corner markers */}
          <span className="absolute -left-2 -top-2 h-5 w-5 border-l border-t border-[#e87524]" />
          <span className="absolute -right-2 -top-2 h-5 w-5 border-r border-t border-[#e87524]" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-[#e87524]" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-[#e87524]" />

          {/* Portrait metadata */}
          <span className="absolute -left-7 top-6 font-mono text-[8px] uppercase tracking-[0.2em] text-[#e87524]">
            01 / 06
          </span>

          <span className="absolute -right-8 bottom-0 origin-bottom-right rotate-90 font-mono text-[8px] uppercase tracking-[0.2em] text-black/35">
            Civil Engineering / Profile
          </span>
        </motion.div>
      </div>

      {/* Desktop technical label */}
      <div className="pointer-events-none absolute right-6 top-32 hidden lg:block xl:right-12">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/30">
          Engineering / Portfolio
        </span>
      </div>

      {/* =========================================
          MAIN HERO CONTENT
      ========================================= */}
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-6 py-24 sm:px-8 md:px-10 md:py-28 lg:px-12 lg:py-24">
        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mb-8 flex items-center gap-4 sm:mb-10"
        >
          <span className="h-px w-10 shrink-0 bg-[#e87524]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/50 sm:text-[10px] sm:tracking-[0.2em]">
            Registered Civil Engineer
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="relative z-10 w-full lg:max-w-[58%] xl:max-w-[60%]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(3.2rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] text-[#161616] lg:text-[7vw] xl:text-[7.5vw]"
          >
            Building
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(3.2rem,8vw,8rem)] font-medium uppercase leading-[0.82] tracking-[-0.065em] text-[#161616] lg:text-[7vw] xl:text-[7.5vw]"
          >
            With{" "}
            <span className="text-[#e87524]">Precision.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 max-w-[900px] text-[clamp(1.65rem,4.5vw,4.5rem)] font-normal uppercase leading-[0.92] tracking-[-0.045em] text-black/25 sm:mt-5 lg:text-[4.2vw]"
          >
            Engineering With Purpose.
          </motion.h2>
        </div>

        {/* =========================================
            MOBILE AND TABLET PORTRAIT
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mx-auto mt-10 block h-[clamp(300px,100vw,440px)] w-full max-w-[520px] lg:hidden"
        >
          {/* Decorative outer circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-[17%] top-[15%] h-[min(470px,54vh)] w-[clamp(220px,21vw,320px)] xl:right-[19%] xl:top-[16%] xl:w-[clamp(250px,22vw,340px)]"
          >
            <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-[#e87524]" />
          </motion.div>

          {/* Portrait */}
          <div className="absolute left-1/2 top-1/2 h-[min(370px,85vw)] w-[min(270px,72vw)] -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-black/10 bg-white/60">
            <img
              src={einnarImage}
              alt="Einnar James Bose"
              className="h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
            <div className="pointer-events-none absolute inset-0 bg-[#e87524]/[0.025] mix-blend-multiply" />

            {/* Frame corners */}
            <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#e87524]" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#e87524]" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#e87524]" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#e87524]" />
          </div>

          {/* Mobile metadata */}
          <span className="absolute bottom-2 left-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#e87524]">
            01 / 06 — Profile
          </span>
        </motion.div>

        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="relative z-10 mt-8 flex flex-col justify-between gap-6 sm:mt-12 md:flex-row md:items-end md:gap-8"
        >
          <p className="max-w-md text-sm leading-6 text-black/55 sm:text-base">
            Experience in construction, project inspection,
            quantity surveying, and property engineering.
          </p>

          <a
            href="#about"
            className="group flex w-fit shrink-0 items-center gap-3 border border-black/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
          >
            Explore Work

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
          }}
          className="pointer-events-none absolute bottom-10 right-6 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/35 md:flex lg:right-12"
        >
          Scroll

          <ArrowDownRight
            size={13}
            strokeWidth={1.5}
          />
        </motion.div>
      </div>
    </section>
  );
}
