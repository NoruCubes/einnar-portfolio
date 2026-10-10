import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    number: "01",
    period: "2025 — 2026",
    company: "Ayala Property Management Corporation",
    role: "Property Engineer",
    description:
      "Manage construction monitoring, site inspections, contractor coordination, quantity take-offs, cost estimation, and project reporting while ensuring compliance with building regulations and quality standards.",
    responsibilities: [
      "Construction Monitoring",
      "Site Inspections",
      "Contractor Coordination",
      "Quantity Take-offs",
      "Cost Estimation",
      "Project Reporting",
    ],
  },
  {
    number: "02",
    period: "2025",
    company: "Laguna Water Corporation",
    role: "Project Engineer",
    description:
      "Monitored project quality, site safety, and compliance through regular inspections, standards implementation, and daily progress reporting.",
    responsibilities: [
      "Project Quality",
      "Site Safety",
      "Compliance",
      "Regular Inspections",
      "Daily Progress Reporting",
    ],
  },
  {
    number: "03",
    period: "OJT / Internship",
    company: "Prinze Adrian Construction",
    role: "Civil Engineering Internship",
    description:
      "Coordinated daily site activities, reviewed construction plans, and led progress meetings to ensure task clarity, compliance, and timely resolution of site issues.",
    responsibilities: [
      "Daily Site Activities",
      "Construction Plan Review",
      "Progress Meetings",
      "Task Coordination",
      "Site Issue Resolution",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            02 / Experience
          </span>
        </div>

        <div className="mb-24 grid gap-10 lg:grid-cols-[1fr_0.45fr]">

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
            Practical
            <br />
            <span className="text-black/20">
              Experience.
            </span>
          </motion.h2>

          <div className="flex items-end">
            <p className="max-w-sm text-sm leading-6 text-black/50 md:text-base">
              Professional experience across construction,
              project monitoring, property engineering,
              and site coordination.
            </p>
          </div>
        </div>

        <div className="border-t border-black/10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-b border-black/10 py-10 md:py-14"
            >
              <div className="grid gap-8 lg:grid-cols-[80px_180px_1fr_1.2fr] lg:gap-10">

                <div className="font-mono text-[10px] text-[#e87524]">
                  {experience.number}
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/35">
                    {experience.period}
                  </span>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">

                    <h3 className="max-w-md text-3xl font-medium uppercase leading-[0.9] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#e87524] md:text-4xl">
                      {experience.company}
                    </h3>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className="shrink-0 text-black/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#e87524]"
                    />

                  </div>

                  <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-black/30">
                    {experience.role}
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-sm leading-6 text-black/55 md:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                  {experience.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-full border border-[#f3c7a8] bg-[#fff4ec] px-4 py-3 transition-all duration-300 hover:border-[#e87524]/50 hover:bg-[#ffeadb]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#e87524]" />

                      <span className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#5a4030]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            Professional Background
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            2025 — Present
          </span>
        </div>

      </div>
    </section>
  );
}