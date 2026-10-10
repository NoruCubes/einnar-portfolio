import TechnicalGrid from "../components/TechnicalGrid";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "einnarjbose@gmail.com",
    href: "mailto:einnarjbose@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 995 211 2147",
    href: "tel:+639952112147",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "Einnar James Bose",
    href: "https://www.linkedin.com/in/einnarjamesbose",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-white text-[#161616]"
    >
      <TechnicalGrid opacity={0.018} size={80} />

      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-12 lg:py-40">

        {/* Section Heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="h-px w-10 bg-[#e87524]" />

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
            06 / Contact
          </span>
        </div>

        {/* Main CTA */}
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e87524]">
              Open to opportunities
            </p>

            <h2 className="max-w-6xl text-[13vw] font-medium uppercase leading-[0.78] tracking-[-0.065em] md:text-[10vw] lg:text-[8vw]">
              Let's Build
              <br />
              Something
              <br />
              <span className="text-black/20">
                Meaningful.
              </span>
            </h2>
          </motion.div>

          {/* Description and Contact Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-end"
          >
            <p className="max-w-md text-sm leading-7 text-black/50 md:text-base">
              Have a project, professional opportunity, or
              collaboration in mind? Feel free to get in touch.
            </p>

            {/* Buttons Side by Side */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Email Button */}
              <a
                href="mailto:einnarjbose@gmail.com"
                className="group flex w-fit items-center gap-4 border border-black/15 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
              >
                Email Me

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* View Resume Button */}
              <a
                href="/Einnar-Bose-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Einnar Bose's resume in a new tab"
                className="group flex w-fit items-center gap-4 border border-black/15 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
              >
                View Resume

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

            </div>
          </motion.div>

        </div>

        {/* Contact Details */}
        <div className="mt-24 border-t border-black/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group border-b border-black/10 py-8 md:px-8 md:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <div className="flex items-center justify-between">

                    {/* Icon + Information */}
                    <div className="flex items-center gap-4">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-black/10 transition-colors duration-300 group-hover:border-[#e87524] group-hover:bg-[#e87524]">
                        <Icon
                          size={15}
                          strokeWidth={1.3}
                          className="transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">
                          {item.label}
                        </p>

                        <p className="mt-2 text-sm text-black/70">
                          {item.value}
                        </p>
                      </div>

                    </div>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.3}
                      className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e87524]"
                    />

                  </div>
                </motion.a>
              );
            })}

          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 flex flex-col justify-between gap-6 border-t border-black/10 pt-6 md:flex-row md:items-center">

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-black/25">
            Engineering With Purpose
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e87524]">
            06 / 06
          </span>

        </div>

      </div>
    </section>
  );
}
