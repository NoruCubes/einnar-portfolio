<<<<<<< HEAD
=======

>>>>>>> feature/chatbot-navigation
import { useEffect, useState } from "react";
import TechnicalGrid from "../components/TechnicalGrid";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Perimeter Electric Fence Installation",
    category: "Feasibility Study, Cost Analysis",
    year: "2026",
    description:
      "Conducted a feasibility study and prepared the Terms of Reference (TOR) for the proposed installation of an electric fence around the entire property. Evaluated layout options, project costs, technical requirements, safety considerations, and implementation feasibility to determine the most practical and cost-effective solution for the property.",
    images: [ "/projects/1.1.png", "/projects/1.png" ],
  },
  {
    number: "02",
    title:
      "Construction of Watchtower, Asphalting of Existing Concrete Humps and Repainting of Basketball Court",
    category: "Property Engineering",
    year: "2026",
    description:
      "Prepared design layouts for in-house property development projects, ensuring alignment with project requirements, site conditions, technical specifications, and applicable building regulations.",
    images: ["/projects/2.jpg", "/projects/2.1.png", "/projects/2.2.jpg", "/projects/2.3.png", "/projects/2.4.png"],
  },
  {
    number: "03",
    title: "Construction of Concrete Hump Monitoring",
    category: "Project Monitoring",
    year: "2025",
    description:
      "Prepared Gantt charts and monitored project progress for concrete humps projects to track schedules, completed activities, and outstanding tasks.",
    images: [ "/projects/3.png", "/projects/3.1.png"],
  },
  {
    number: "04",
    title: "In-House Property Development Quotation and Cost Monitoring",
    category: "Project Monitoring",
    year: "2025",
    description:
      "Prepared and monitored quotations for in-house property development projects by reviewing contractor proposals, comparing costs, and tracking estimated project expenses.",
    images: ["/projects/4.png", "/projects/4.1.png", "/projects/4.3.jpg", "/projects/4.4.png"],
  },
  {
    number: "05",
    title: "Esports and NFT Social Media Management",
    category: "Social Media Management",
    year: "2022",
    description:
      "Managed and led social media activities for esports and NFT projects, including content planning, creation, and publishing. Developed engaging social media content to strengthen online presence,",
    images: ["/projects/5.jpg", "/projects/5.1.jpg", "/projects/5.2.jpg"],
  },
];

/* =========================================
   PROJECT IMAGE SLIDESHOW
========================================= */

function ProjectImageSlideshow({ project }) {
  const images = project.images || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance to the next image every 3 seconds.
  // Return to the first image after reaching the last.
  useEffect(() => {
    if (images.length <= 1) {
      setCurrentIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Keep the selected image valid if the image collection changes.
  useEffect(() => {
    setCurrentIndex((current) =>
      images.length === 0 ? 0 : current % images.length
    );
  }, [images.length]);

  const showPrevious = () => {
    if (images.length <= 1) return;

    setCurrentIndex(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    if (images.length <= 1) return;

    setCurrentIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="group/slider relative aspect-[16/9] overflow-hidden border border-black/10 bg-[#f7f7f7]">
      {/* SLIDES */}

      {images.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${project.title} - Image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeInOut",
            }}
            className="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />
        </AnimatePresence>
      ) : (
        /* PLACEHOLDER WHEN NO IMAGES ARE PROVIDED */
        <div className="relative flex h-full w-full items-center justify-center">
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

      {/* PROJECT NUMBER */}

      <div className="absolute left-4 top-4 z-20 flex h-8 w-8 items-center justify-center bg-[#e87524] font-mono text-[9px] text-white">
        {project.number}
      </div>

      {/* SLIDESHOW CONTROLS */}

      {images.length > 1 && (
        <>
          {/* Bottom gradient for contrast */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Image counter */}
          <div className="absolute bottom-4 left-4 z-20">
            <span className="font-mono text-[10px] tracking-[0.15em] text-white">
              {String(currentIndex + 1).padStart(2, "0")}
              {" / "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>

          {/* Previous and next buttons */}
          <div className="absolute bottom-4 right-4 z-20 flex gap-2">
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Previous image for ${project.title}`}
              className="flex h-10 w-10 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label={`Next image for ${project.title}`}
              className="flex h-10 w-10 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex h-[2px] gap-0.5">
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`h-full flex-1 transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-[#e87524]"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* =========================================
   PROJECTS SECTION
========================================= */

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />

      <div className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">
        {/* SECTION HEADING */}

        <div className="mb-20 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            05 / Projects
          </span>
        </div>

        {/* INTRODUCTION */}

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
            <span className="text-black/20">Projects.</span>
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

        {/* PROJECT LIST */}

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
              {/* PROJECT HEADER */}

              <div className="mb-8 grid gap-6 md:grid-cols-[80px_1fr_auto] md:items-start md:gap-10">
                {/* Project number */}

                <span className="font-mono text-[10px] text-[#e87524]">
                  {project.number}
                </span>

                {/* Project title and details */}

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

                {/* Decorative arrow */}

                <div className="flex h-10 w-10 items-center justify-center border border-black/10 transition-all duration-300 group-hover:border-[#e87524] group-hover:bg-[#e87524]">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.3}
                    className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </div>

              {/* PROJECT CONTENT */}

              <div className="grid gap-10 md:grid-cols-[80px_1fr] md:gap-10">
                {/* Spacer for alignment */}

                <div className="hidden md:block" />

                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                  {/* IMAGE SLIDESHOW */}

                  <ProjectImageSlideshow project={project} />

                  {/* PROJECT DESCRIPTION */}

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

        {/* BOTTOM INFORMATION */}

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
