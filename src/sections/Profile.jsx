import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Profile() {
  return (
    <section
      id="about"
      className="relative snap-start scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.035} size={80} />
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        {/* Section marker */}
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            01 / Profile
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="max-w-5xl text-[11vw] font-medium uppercase leading-[0.82] tracking-[-0.06em] md:text-[8vw] lg:text-[6.5vw]">
              Turning Plans,
              <br />
              Numbers &
              <br />
              <span className="text-[#e87524]">
                Ideas
              </span>
              <br />
              Into Reality.
            </h2>
          </motion.div>

          <div className="flex flex-col justify-between gap-12">

            <p className="max-w-md text-sm leading-7 text-black/55 md:text-base">
              Civil Engineer with experience in construction,
              project inspection, quantity surveying, property
              engineering, and project monitoring.
            </p>

            <div className="border-l border-[#e87524] pl-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                Approach
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
                Combining technical knowledge, field experience,
                and structured project management to support
                efficient and quality-driven project execution.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-24 flex items-center justify-between border-t border-black/10 pt-5">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
            Engineering Philosophy
          </span>

          <ArrowDownRight
            size={16}
            strokeWidth={1.2}
            className="text-[#e87524]"
          />
        </div>

      </div>
    </section>
  );
}