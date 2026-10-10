import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#161616]">
      <Navbar />

      <main>
        <Analytics />
        <Hero />
        <Profile />
        <Experience />
        <Work />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <Chatbot />
    </div>
  );
}