import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Training", href: "#certifications" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div className="flex h-20 w-full items-center justify-between bg-[#e87524] px-6 md:px-10 lg:px-12">

          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center bg-white text-sm font-semibold text-[#e87524]">
              E
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[-0.02em] text-white">
                Einnar Bose
              </p>

              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/65">
                Civil Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.18em] text-white/85 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className="group ml-8 hidden shrink-0 items-center gap-2 border border-white/40 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-white hover:text-[#e87524] md:flex"
          >
            Contact

            <ArrowUpRight
              size={13}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors duration-300 hover:bg-white hover:text-[#e87524] md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>

        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-x-0 top-20 z-40 border-t border-white/20 bg-[#e87524]/75 backdrop-blur-md md:hidden"
          >
            <nav className="px-6 pb-8 pt-4">

              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="flex items-center justify-between border-b border-white/15 py-5 font-mono text-xs uppercase tracking-[0.18em] text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.3}
                  />
                </motion.a>
              ))}

              {/* Mobile Contact */}
              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navItems.length * 0.05,
                }}
                className="mt-6 flex items-center justify-between bg-white px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] text-[#e87524]"
              >
                Contact

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                />
              </motion.a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}