import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "PlanSwift & Primavera",
    type: "Training",
    description:
      "Training covering construction estimating, quantity take-off, Excel integration, project scheduling, and construction cost management.",
    certificateUrl: "/certificates/planswift-primavera.pdf",
  },
  {
    number: "02",
    title: "SmartSourcing USA",
    type: "Training",
    description:
      "Training focused on construction estimating workflows including roofing estimation, digital plan analysis, material quantification, and labor costing.",
    certificateUrl: "",
  },
  {
    number: "03",
    title: "40-Hour COSH Training",
    type: "Safety Training",
    description:
      "Training focused on construction occupational safety and health, workplace safety practices, and Safety Officer 2 responsibilities, including additional Training of Trainers (TOT) preparation.",
    date: "January 2025",
    provider:
      "Think Safe Training, Consultancy and Services Corporation",
    certificateUrl: "/certificates/cosh-training.pdf",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />

      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        {/* Section Heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            04 / Certifications & Training
          </span>
        </div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-5xl text-[12vw] font-medium uppercase leading-[0.8] tracking-[-0.06em] md:text-[9vw] lg:text-[7vw]"
          >
            Continuous
            <br />
            <span className="text-black/20">
              Learning.
            </span>
          </motion.h2>

        </div>

        {/* Clickable Credential List */}
        <div className="mt-20 border-t border-black/10">

          {certifications.map((item, index) => (
            <motion.a
              key={item.number}
              href={item.certificateUrl || undefined}
              target={item.certificateUrl ? "_blank" : undefined}
              rel={
                item.certificateUrl
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={
                item.certificateUrl
                  ? `View ${item.title} certificate in a new tab`
                  : `${item.title} certificate link not yet configured`
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group block border-b border-black/10 py-10 transition-colors duration-300 md:py-12 ${
                item.certificateUrl
                  ? "cursor-pointer hover:bg-[#fff4ec] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e87524]"
                  : "cursor-default"
              }`}
            >
              <div className="grid gap-8 px-0 lg:grid-cols-[80px_1fr_1fr] lg:gap-12">

                {/* Number */}
                <span className="font-mono text-[10px] text-[#e87524]">
                  {item.number}
                </span>

                {/* Title and Arrow */}
                <div>
                  <div className="flex items-start justify-between gap-5">

                    <div>
                      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-black/35">
                        {item.type}
                      </p>

                      <h3 className="text-4xl font-medium uppercase leading-[0.9] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#e87524] md:text-5xl lg:text-6xl">
                        {item.title}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 ${
                        item.certificateUrl
                          ? "group-hover:border-[#e87524] group-hover:bg-[#e87524]"
                          : ""
                      }`}
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.3}
                        className={`transition-all duration-300 ${
                          item.certificateUrl
                            ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                            : ""
                        }`}
                      />
                    </div>

                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col justify-end">
                  <p className="max-w-lg text-sm leading-6 text-black/50 md:text-base">
                    {item.description}
                  </p>

                  {/* Optional Credential Details */}
                  {item.date && item.provider && (
                    <div className="mt-4">
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/40">
                        {item.date}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-black/50">
                        {item.provider}
                      </p>
                    </div>
                  )}

                  {/* View Certificate Hint */}
                  {item.certificateUrl && (
                    <span className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#e87524]">
                      Click to View Certificate
                    </span>
                  )}
                </div>

              </div>
            </motion.a>
          ))}

        </div>

        {/* Bottom Information */}
        <div className="mt-10 flex items-center justify-between">

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            Professional Development
          </span>

          <Award
            size={18}
            strokeWidth={1.2}
            className="text-[#e87524]"
          />

        </div>

      </div>
    </section>
  );
}