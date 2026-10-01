import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen snap-start scroll-mt-20 overflow-hidden bg-white"
    >
        
      <TechnicalGrid opacity={0.035} size={80} />

      {/* Technical label */}
      <div className="pointer-events-none absolute right-8 top-32 hidden lg:block">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-black/30">
          Engineering / Portfolio
        </span>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-10 pt-32 md:px-10 md:pb-14 lg:px-12">

        {/* Section marker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/45">
            Registered Civil Engineer
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-[1250px]">

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[16vw] font-medium uppercase leading-[0.78] tracking-[-0.065em] text-[#161616] md:text-[12vw] lg:text-[10vw]"
          >
            Building
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[16vw] font-medium uppercase leading-[0.78] tracking-[-0.065em] text-[#161616] md:text-[12vw] lg:text-[10vw]"
          >
            With{" "}
            <span className="text-[#e87524]">
              Precision.
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-5 max-w-[900px] text-[7vw] font-normal uppercase leading-[0.9] tracking-[-0.045em] text-black/25 md:text-[5.5vw] lg:text-[4.5vw]"
          >
            Engineering With Purpose.
          </motion.h2>

        </div>

        {/* Bottom information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >

          <p className="max-w-md text-sm leading-6 text-black/50 md:text-base">
            Experience in construction, project inspection,
            quantity surveying, and property engineering.
          </p>

          <a
            href="#about"
            className="group flex w-fit items-center gap-3 border border-black/15 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
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
            delay: 1.2,
          }}
          className="absolute bottom-10 right-6 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-black/30 md:flex lg:right-12"
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