import { ArrowUpRight, ArrowUp } from "lucide-react";

const links = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white text-[#161616]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-12">

        {/* Main footer */}
        <div className="grid gap-16 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">

          {/* Identity */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#e87524]">
              Civil Engineer
            </p>

            <h2 className="mt-5 max-w-3xl text-[12vw] font-medium uppercase leading-[0.78] tracking-[-0.065em] md:text-[9vw] lg:text-[7vw]">
              Einnar
              <br />
              <span className="text-black/20">
                Portfolio.
              </span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex flex-col justify-end">

            <p className="mb-6 font-mono text-[9px] uppercase tracking-[0.2em] text-black/30">
              Navigate
            </p>

            <nav className="grid grid-cols-2 border-t border-black/10">

              <a
                href="#top"
                className="group border-b border-r border-black/10 py-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Home
              </a>

              <a
                href="#about"
                className="group border-b border-black/10 py-4 pl-5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                About
              </a>

              <a
                href="#experience"
                className="border-b border-r border-black/10 py-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Experience
              </a>

              <a
                href="#work"
                className="border-b border-black/10 py-4 pl-5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Work
              </a>

              <a
                href="#certifications"
                className="border-b border-r border-black/10 py-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Certifications
              </a>

              <a
                href="#projects"
                className="border-b border-black/10 py-4 pl-5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="border-r border-black/10 py-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#e87524]"
              >
                Contact
              </a>

            </nav>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-black/10 py-6 md:flex-row md:items-center md:justify-between">

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">
              © {new Date().getFullYear()} Einnar
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#e87524] md:block" />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/30">
              Engineering With Purpose
            </span>
          </div>

          {/* Social / Email */}
          <div className="flex items-center gap-6">

            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-black/40 transition-colors duration-300 hover:text-[#e87524]"
              >
                {link.label}

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            ))}

            <a
              href="#top"
              className="flex h-9 w-9 items-center justify-center border border-black/10 transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp
                size={14}
                strokeWidth={1.3}
              />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}