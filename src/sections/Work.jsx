import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const workItems = [
  {
    number: "01",
    title: "Feasibility Studies",
    subtitle: "& TOR Development",
    description:
      "Conducted feasibility studies and prepared Terms of Reference documents to support project planning, evaluation, procurement, and implementation.",
    category: "Planning",
  },
  {
    number: "02",
    title: "Project Layout",
    subtitle: "& Design Development",
    description:
      "Developed conceptual layouts and design solutions for development projects, facilitating client approval and supporting project execution.",
    category: "Design",
  },
  {
    number: "03",
    title: "Project Scheduling",
    subtitle: "& Monitoring",
    description:
      "Prepared and maintained project schedules using MS Excel Gantt Charts for timeline management, progress tracking, and project control.",
    category: "Project Control",
  },
  {
    number: "04",
    title: "Cost Estimation",
    subtitle: "& Quotation Preparation",
    description:
      "Prepared detailed project quotations and cost estimates for bidding and procurement, supporting accurate pricing, scope alignment, and contractor evaluation.",
    category: "Quantity Surveying",
  },
  {
    number: "05",
    title: "Social Media Content",
    subtitle: "& Graphic Design",
    description:
      "Created social media content and visual materials to communicate information, engage audiences, and strengthen online presence.",
    category: "Design",
  },
  {
    number: "06",
    title: "PlanSwift & Primavera",
    subtitle: "Project Estimation & Scheduling",
    description:
      "Completed training covering construction estimating, quantity take-off, Excel integration, project scheduling, and construction cost management.",
    category: "Training",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        {/* Section heading */}
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#c47a45]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            03 / Things I&apos;ve Done
          </span>
        </div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
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
            Built
            <br />
            <span className="text-black/25">
              Through
            </span>
            <br />
            Experience.
          </motion.h2>

          <div className="flex items-end">
            <p className="max-w-md text-sm leading-6 text-black/55 md:text-base">
              A selection of technical, planning, estimation,
              design, and project-related work developed through
              academic and professional experience.
            </p>
          </div>
        </div>

        {/* Work grid */}
        <div className="mt-24 grid border-t border-black/15 md:grid-cols-2">
          {workItems.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border-b border-black/15 p-7 md:p-10 lg:p-12"
            >
              {/* Number + category */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#c47a45]">
                  {item.number}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/30">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <div className="mt-16 flex items-start justify-between gap-6">
                <h3 className="text-3xl font-medium uppercase leading-[0.9] tracking-[-0.04em] md:text-4xl lg:text-5xl">
                  {item.title}
                  <br />
                  <span className="text-black/30">
                    {item.subtitle}
                  </span>
                </h3>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#c47a45] group-hover:bg-[#c47a45]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="mt-10 max-w-lg text-sm leading-6 text-black/55 md:text-base">
                {item.description}
              </p>

              {/* Bottom marker */}
              <div className="mt-12 flex items-center gap-3">
                <span className="h-px w-5 bg-black/20 transition-all duration-300 group-hover:w-10 group-hover:bg-[#c47a45]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/30">
                  Technical Capability
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom metadata */}
        <div className="mt-8 flex justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            Selected Capabilities
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            06 Entries
          </span>
        </div>

      </div>
    </section>
  );
}