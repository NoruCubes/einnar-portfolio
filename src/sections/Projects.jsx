import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Project Name",
    category: "Construction / Engineering",
    year: "2026",
    description:
      "Project description will go here. This section can describe the scope of work, engineering responsibilities, project objectives, and key contributions.",
    image: null,
  },
  {
    number: "02",
    title: "Project Name",
    category: "Property Engineering",
    year: "2026",
    description:
      "Project description will go here. Highlight the engineering work, site involvement, coordination, inspections, estimating, or other relevant responsibilities.",
    image: null,
  },
  {
    number: "03",
    title: "Project Name",
    category: "Project Monitoring",
    year: "2025",
    description:
      "Project description will go here. Include important project information, responsibilities, technical work, and outcomes.",
    image: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        {/* Section heading */}
        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            05 / Projects
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
            className="max-w-6xl text-[13vw] font-medium uppercase leading-[0.78] tracking-[-0.06em] md:text-[9vw] lg:text-[7vw]"
          >
            Selected
            <br />
            <span className="text-black/20">
              Projects.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-end"
          >
            <p className="max-w-md text-sm leading-7 text-black/50 md:text-base">
              A selection of engineering and construction-related
              projects reflecting experience in project monitoring,
              site coordination, estimation, and property engineering.
            </p>
          </motion.div>

        </div>

        {/* Projects */}
        <div className="mt-24">

          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-t border-black/10 py-10 md:py-14"
            >

              {/* Project header */}
              <div className="mb-8 grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10">

                {/* Number */}
                <span className="font-mono text-[10px] text-[#e87524]">
                  {project.number}
                </span>

                {/* Title */}
                <div>
                  <h3 className="max-w-4xl text-4xl font-medium uppercase leading-[0.9] tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#e87524] md:text-5xl lg:text-6xl">
                    {project.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/40">
                      {project.category}
                    </span>

                    <span className="h-px w-5 bg-black/15" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-10 w-10 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#e87524] group-hover:bg-[#e87524]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>

              </div>

              {/* Project content */}
              <div className="grid gap-10 md:grid-cols-[80px_1fr] md:gap-10">

                {/* Spacer / alignment */}
                <div className="hidden md:block" />

                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">

                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden border border-black/10 bg-[#f7f7f7]">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      />
                    ) : (
                      <div className="relative flex h-full w-full items-center justify-center">

                        {/* Image grid */}
                        <div className="absolute inset-0 opacity-[0.55]">
                          <div
                            className="h-full w-full"
                            style={{
                              backgroundImage: `
                                linear-gradient(
                                  to right,
                                  rgba(0,0,0,0.055) 1px,
                                  transparent 1px
                                ),
                                linear-gradient(
                                  to bottom,
                                  rgba(0,0,0,0.055) 1px,
                                  transparent 1px
                                )
                              `,
                              backgroundSize: "60px 60px",
                            }}
                          />
                        </div>

                        <div className="relative flex flex-col items-center gap-3">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
                            Project Image
                          </span>

                          <span className="h-px w-8 bg-[#e87524]" />

                          <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-black/20">
                            Image Provided By Client
                          </span>
                        </div>

                      </div>
                    )}

                    {/* Image number */}
                    <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center bg-[#e87524] font-mono text-[9px] text-white">
                      {project.number}
                    </div>

                  </div>

                  {/* Description */}
                  <div className="lg:pb-2">

                    <p className="max-w-md text-sm leading-7 text-black/55 md:text-base">
                      {project.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3">
                      <span className="h-px w-5 bg-[#e87524]" />

                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
                        Engineering Project
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom information */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-black/10 pt-6 md:flex-row md:items-center">

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            Selected Work
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e87524]">
            05 / 06
          </span>

        </div>

      </div>
    </section>
  );
}