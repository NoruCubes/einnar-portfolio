
<<<<<<< HEAD
import { useEffect, useRef, useState } from "react";
=======
import { useState } from "react";
>>>>>>> feature/chatbot-navigation
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Send,
  X,
} from "lucide-react";

import portfolioData from "../data/portfolioData";

/* ========================================
   SUGGESTED QUESTIONS
======================================== */

const suggestedQuestions = [
  "Tell me about Einnar",
  "What is Einnar's experience?",
  "What projects has Einnar worked on?",
  "Tell me about the perimeter fence project",
  "What training has Einnar completed?",
  "How can I contact Einnar?",
];

/* ========================================
<<<<<<< HEAD
   PROJECT INFORMATION
=======
   FEATURED PROJECTS
   Synchronized with Projects.jsx
>>>>>>> feature/chatbot-navigation
======================================== */

const featuredProjects = [
  {
    number: "01",
    title: "Perimeter Electric Fence Installation",
    category: "Feasibility Study, Cost Analysis",
<<<<<<< HEAD
    year: "2025",
=======
    year: "2026",
>>>>>>> feature/chatbot-navigation
    keywords: [
      "perimeter fence",
      "electric fence",
      "fence installation",
      "feasibility study",
      "terms of reference",
<<<<<<< HEAD
=======
      "tor",
>>>>>>> feature/chatbot-navigation
      "safety considerations",
    ],
    description:
      "Conducted a feasibility study and prepared the Terms of Reference (TOR) for the proposed installation of an electric fence around the entire property. Evaluated layout options, project costs, technical requirements, safety considerations, and implementation feasibility to determine the most practical and cost-effective solution for the property.",
  },
  {
    number: "02",
    title:
      "Construction of Watchtower, Asphalting of Existing Concrete Humps and Repainting of Basketball Court",
    category: "Property Engineering",
    year: "2026",
    keywords: [
      "watchtower",
      "asphalting",
      "basketball court",
      "repainting",
<<<<<<< HEAD
      "design layouts",
      "building regulations",
=======
      "design layout",
      "building regulations",
      "property development",
>>>>>>> feature/chatbot-navigation
    ],
    description:
      "Prepared design layouts for in-house property development projects, ensuring alignment with project requirements, site conditions, technical specifications, and applicable building regulations.",
  },
  {
    number: "03",
    title: "Construction of Concrete Hump Monitoring",
    category: "Project Monitoring",
    year: "2025",
    keywords: [
      "concrete hump",
      "hump monitoring",
      "gantt chart",
      "gantt charts",
      "project scheduling",
      "construction progress",
<<<<<<< HEAD
=======
      "outstanding tasks",
>>>>>>> feature/chatbot-navigation
    ],
    description:
      "Prepared Gantt charts and monitored project progress for concrete humps projects to track schedules, completed activities, and outstanding tasks.",
  },
  {
    number: "04",
<<<<<<< HEAD
    title:
      "In-House Property Development Quotation and Cost Monitoring",
=======
    title: "In-House Property Development Quotation and Cost Monitoring",
>>>>>>> feature/chatbot-navigation
    category: "Project Monitoring",
    year: "2025",
    keywords: [
      "quotation",
      "quotations",
      "cost monitoring",
      "contractor proposals",
      "project expenses",
<<<<<<< HEAD
      "cost comparison",
      "estimated expenses",
=======
      "estimated expenses",
      "cost comparison",
      "project costs",
>>>>>>> feature/chatbot-navigation
    ],
    description:
      "Prepared and monitored quotations for in-house property development projects by reviewing contractor proposals, comparing costs, and tracking estimated project expenses.",
  },
  {
    number: "05",
<<<<<<< HEAD
    title: "Construction of Concrete Hump Monitoring",
    category: "Project Monitoring",
    year: "2025",
    keywords: ["concrete hump project", "construction monitoring"],
    description:
      "Prepared Gantt charts and monitored project progress for concrete humps projects to track schedules, completed activities, and outstanding tasks.",
=======
    title: "Esports and NFT Social Media Management",
    category: "Social Media Management",
    year: "2022",
    keywords: [
      "concrete hump project",
      "construction monitoring",
    ],
    description:
      "Managed and led social media activities for esports and NFT projects, including content planning, creation, and publishing. Developed engaging social media content to strengthen online presence.",
>>>>>>> feature/chatbot-navigation
  },
];

/* ========================================
<<<<<<< HEAD
   TRAINING INFORMATION
=======
   TRAINING & CERTIFICATIONS
   Synchronized with Certifications.jsx
>>>>>>> feature/chatbot-navigation
======================================== */

const featuredTraining = [
  {
    title: "PlanSwift & Primavera",
    description:
      "Training covering construction estimating, quantity take-off, Excel integration, project scheduling, and construction cost management.",
  },
  {
    title: "SmartSourcing USA",
    description:
      "Training focused on construction estimating workflows, including roofing estimation, digital plan analysis, material quantification, and labor costing.",
  },
  {
    title: "40-Hour COSH Training",
    description:
      "Training focused on construction occupational safety and health, workplace safety practices, and Safety Officer 2 responsibilities, including additional Training of Trainers (TOT) preparation.",
    date: "January 2025",
    provider:
      "Think Safe Training, Consultancy and Services Corporation",
  },
];

/* ========================================
   RESPONSE LOGIC
======================================== */

function getResponse(message) {
  const normalized = message.toLowerCase().trim();

  const { profile, experience, contact } = portfolioData;

  const hasAny = (...keywords) =>
    keywords.some((keyword) => normalized.includes(keyword));

  /* ----------------------------------------
     GREETING
  ---------------------------------------- */

  if (
<<<<<<< HEAD
    /^(hi|hello|hey|heya|hiya)[!.? ]*$/.test(normalized) ||
    hasAny(
      "good morning",
      "good afternoon",
      "good evening"
    )
  ) {
    return {
      text:
        "Hello! I'm Einnar's portfolio assistant. I can help you explore his background, professional experience, projects, training, skills, and contact information. What would you like to know?",
=======
    /^(hi|hello|hey|heya|hiya|good morning|good afternoon|good evening)[!.? ]*$/i.test(
      normalized
    ) ||
    hasAny("good morning", "good afternoon", "good evening")
  ) {
    return {
      text: "Hello! I'm Foreman, Einnar's portfolio assistant. I can help you explore his background, professional experience, projects, training, skills, and contact information. What would you like to know?",
>>>>>>> feature/chatbot-navigation
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     LINKEDIN
     Check before general contact questions.
=======
     ABOUT / PROFILE
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  if (
    hasAny(
<<<<<<< HEAD
      "linkedin",
      "linked in",
      "professional profile",
      "online profile"
    )
  ) {
    const linkedinUrl = contact?.linkedin?.url;

    if (!linkedinUrl || linkedinUrl === "#") {
      return {
        text:
          "Einnar's LinkedIn profile link will be added once the final profile URL is provided.",
        action: {
          label: "Contact Einnar",
          target: "#contact",
        },
      };
    }

    return {
      text:
        "You can visit Einnar's professional profile on LinkedIn using the link below.",
      action: {
        label: "View LinkedIn",
        target: linkedinUrl,
        external: true,
      },
    };
  }

  /* ----------------------------------------
     CONTACT
     IMPORTANT: Check before profile/location.
  ---------------------------------------- */

  if (
    hasAny(
      "contact",
      "how can i reach",
      "how do i reach",
      "how to reach",
      "how can i contact",
      "how do i contact",
      "how to contact",
      "reach einnar",
      "reach him",
      "get in touch",
      "send him a message",
      "send einnar a message",
      "email",
      "phone number",
      "telephone",
      "hire him",
      "hire einnar",
      "contact details",
      "contact information"
    )
  ) {
    return {
      text:
        "You can get in touch with Einnar through the Contact section of his portfolio. There, you can find his available email, phone number, and professional contact information.",
      action: {
        label: "Contact Einnar",
        target: "#contact",
      },
    };
  }

  /* ----------------------------------------
     LOCATION
     Keep this separate from the profile response.
  ---------------------------------------- */

  if (
    hasAny(
      "where is einnar",
      "where is he",
      "where is he based",
      "where does he live",
      "location",
      "based in",
      "which country",
      "which city"
    )
  ) {
    return {
      text: `Einnar is based in ${profile.location}.`,
=======
      "who is einnar",
      "who is he",
      "tell me about einnar",
      "tell me about him",
      "about einnar",
      "background",
      "profile",
      "introduce einnar",
      "who am i talking to"
    ) ||
    normalized === "about"
  ) {
    return {
      text: `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.summary}`,
>>>>>>> feature/chatbot-navigation
      action: {
        label: "View About",
        target: "#about",
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     EXPERIENCE
=======
     EXPERIENCE / CAREER
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  if (
    hasAny(
      "experience",
      "career",
      "work history",
      "worked before",
      "worked at",
      "where has he worked",
      "where did he work",
      "professional background",
      "employment",
      "previous job",
      "previous jobs",
      "companies"
    )
  ) {
    if (!experience?.length) {
      return {
        text:
          "There is currently no professional experience information available.",
        action: {
          label: "View Experience",
          target: "#experience",
        },
      };
    }

    const companies = experience
      .map((item) => `${item.company} as ${item.role}`)
<<<<<<< HEAD
      .join(", ");

    return {
      text: `Einnar has professional experience with ${companies}. His work includes construction monitoring, site inspections, contractor coordination, quantity take-offs, cost estimation, and project reporting.`,
=======
      .join("; ");

    return {
      text: `Einnar's professional experience includes ${companies}. His portfolio describes work related to construction monitoring, site inspections, contractor coordination, quantity take-offs, cost estimation, and project reporting.`,
>>>>>>> feature/chatbot-navigation
      action: {
        label: "View Experience",
        target: "#experience",
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     TRAINING / CERTIFICATIONS
=======
     SKILLS / PROFESSIONAL FOCUS
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  if (
    hasAny(
<<<<<<< HEAD
      "training",
      "certification",
      "certifications",
      "certificate",
      "certificates",
      "trained",
      "professional development",
      "cosh",
      "planswift",
      "primavera",
      "smartsourcing",
      "safety officer",
      "quantity take-off",
      "quantity takeoff",
      "roofing estimation",
      "digital plan analysis"
    )
  ) {
    const matchedTraining = featuredTraining.find((item) =>
      normalized.includes(item.title.toLowerCase())
    );

    if (matchedTraining) {
      return {
        text: `${matchedTraining.title}\n\n${matchedTraining.description}${
          matchedTraining.date
            ? `\n\nDate: ${matchedTraining.date}`
            : ""
        }${
          matchedTraining.provider
            ? `\nProvider: ${matchedTraining.provider}`
            : ""
        }`,
        action: {
          label: "View Training",
          target: "#certifications",
=======
      "skill",
      "skills",
      "specialty",
      "specialties",
      "specialize",
      "specialization",
      "expertise",
      "professional focus",
      "what does he do",
      "what is he good at",
      "what kind of engineering",
      "areas of focus",
      "technical abilities"
    )
  ) {
    const focus = profile.focus || [];

    if (!focus.length) {
      return {
        text:
          "Einnar's detailed professional focus and skills are not currently available.",
        action: {
          label: "View About",
          target: "#about",
>>>>>>> feature/chatbot-navigation
        },
      };
    }

<<<<<<< HEAD
=======
    return {
      text: `Einnar's professional focus includes ${focus.join(", ")}.`,
      action: {
        label: "View About",
        target: "#about",
      },
    };
  }

  /* ----------------------------------------
     TRAINING / CERTIFICATIONS
  ---------------------------------------- */

  if (
    hasAny(
      "training",
      "certification",
      "certifications",
      "certificate",
      "certificates",
      "trained",
      "professional development",
      "cosh",
      "planswift",
      "primavera",
      "smartsourcing",
      "safety officer",
      "quantity take-off",
      "quantity takeoff",
      "roofing estimation",
      "digital plan analysis"
    )
  ) {
>>>>>>> feature/chatbot-navigation
    const trainingList = featuredTraining
      .map((item) => item.title)
      .join(", ");

<<<<<<< HEAD
    return {
      text: `Einnar's listed training and certifications include ${trainingList}.\n\nPlanSwift & Primavera covers construction estimating, quantity take-off, Excel integration, project scheduling, and cost management.\n\nSmartSourcing USA focuses on roofing estimation, digital plan analysis, material quantification, and labor costing.\n\nThe 40-Hour COSH Training covers construction occupational safety and health, workplace safety practices, and Safety Officer 2 responsibilities, including additional Training of Trainers (TOT) preparation.`,
      action: {
        label: "View Training",
        target: "#certifications",
      },
    };
  }

  /* ----------------------------------------
     PROJECTS
  ---------------------------------------- */

  const matchedProject = featuredProjects.find((project) =>
    project.keywords.some((keyword) =>
      normalized.includes(keyword.toLowerCase())
    )
  );

  if (
    matchedProject ||
    hasAny(
      "project",
      "projects",
      "portfolio projects",
      "what has he worked on",
      "what did he work on",
      "construction work",
      "construction project",
      "engineering project",
      "show me his work",
      "selected work",
      "project monitoring",
      "feasibility study",
      "property engineering"
    )
  ) {
    if (matchedProject) {
      return {
        text: `${matchedProject.title} (${matchedProject.year})\n${matchedProject.category}\n\n${matchedProject.description}`,
        action: {
          label: "View Projects",
          target: "#projects",
=======
    const matchedTraining = featuredTraining.find((item) =>
      normalized.includes(item.title.toLowerCase())
    );

    if (matchedTraining) {
      return {
        text: `${matchedTraining.title}: ${matchedTraining.description}${
          matchedTraining.date
            ? `\n\nDate: ${matchedTraining.date}`
            : ""
        }${
          matchedTraining.provider
            ? `\nProvider: ${matchedTraining.provider}`
            : ""
        }`,
        action: {
          label: "View Training",
          target: "#certifications",
>>>>>>> feature/chatbot-navigation
        },
      };
    }

<<<<<<< HEAD
    const projectList = featuredProjects
      .map(
        (project) =>
          `${project.number}. ${project.title} (${project.year})`
      )
      .join("\n\n");

    return {
      text: `Einnar's portfolio currently features ${featuredProjects.length} project entries covering feasibility studies, property engineering, construction monitoring, project scheduling, and cost monitoring.\n\n${projectList}\n\nVisit the Projects section to explore the project descriptions and visuals.`,
      action: {
        label: "View Projects",
        target: "#projects",
=======
    return {
      text: `Einnar's listed training and certifications include ${trainingList}.\n\nPlanSwift & Primavera covers construction estimating, quantity take-off, Excel integration, project scheduling, and construction cost management.\n\nSmartSourcing USA focuses on construction estimating workflows, roofing estimation, digital plan analysis, material quantification, and labor costing.\n\nThe 40-Hour COSH Training covers construction occupational safety and health, workplace safety practices, and Safety Officer 2 responsibilities, including additional Training of Trainers (TOT) preparation.`,
      action: {
        label: "View Training",
        target: "#certifications",
>>>>>>> feature/chatbot-navigation
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     SKILLS / PROFESSIONAL FOCUS
  ---------------------------------------- */

  if (
    hasAny(
      "skill",
      "skills",
      "specialty",
      "specialties",
      "specialize",
      "specialization",
      "expertise",
      "professional focus",
      "what does he do",
      "what is he good at",
      "what kind of engineering",
      "areas of focus",
      "technical abilities"
    )
  ) {
    const focus = profile.focus || [];

    if (!focus.length) {
      return {
        text:
          "Einnar's detailed professional focus and skills are not currently available.",
        action: {
          label: "View About",
          target: "#about",
=======
     PROJECTS
  ---------------------------------------- */

  const matchedProject = featuredProjects.find((project) =>
    project.keywords.some((keyword) =>
      normalized.includes(keyword.toLowerCase())
    )
  );

  if (
    matchedProject ||
    hasAny(
      "project",
      "projects",
      "portfolio projects",
      "what has he worked on",
      "what did he work on",
      "construction work",
      "construction project",
      "engineering project",
      "show me his work",
      "selected work",
      "project monitoring",
      "feasibility study",
      "property engineering"
    )
  ) {
    if (matchedProject) {
      return {
        text: `${matchedProject.title} (${matchedProject.year})\n${matchedProject.category}\n\n${matchedProject.description}`,
        action: {
          label: "View Projects",
          target: "#projects",
>>>>>>> feature/chatbot-navigation
        },
      };
    }

<<<<<<< HEAD
    return {
      text: `Einnar's professional focus includes ${focus.join(", ")}.`,
      action: {
        label: "View About",
        target: "#about",
=======
    const projectList = featuredProjects
      .map(
        (project) =>
          `${project.number}. ${project.title} (${project.year})`
      )
      .join("\n\n");

    return {
      text: `Einnar's portfolio currently features ${featuredProjects.length} project entries covering feasibility studies, property engineering, construction monitoring, project scheduling, and cost monitoring.\n\n${projectList}\n\nVisit the Projects section to explore the descriptions and project visuals.`,
      action: {
        label: "View Projects",
        target: "#projects",
>>>>>>> feature/chatbot-navigation
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     PROFILE / ABOUT
     Do not match every message containing
     the word "Einnar" here.
=======
     LOCATION
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  if (
    hasAny(
<<<<<<< HEAD
      "who is einnar",
      "who is he",
      "tell me about einnar",
      "tell me about him",
      "about einnar",
      "his background",
      "introduce einnar",
      "profile"
    ) ||
    normalized === "about"
  ) {
    return {
      text: `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.summary}`,
=======
      "where is einnar",
      "where is he",
      "where does he live",
      "where is he based",
      "location",
      "based in",
      "which country",
      "which city"
    )
  ) {
    return {
      text: `Einnar is based in ${profile.location}.`,
>>>>>>> feature/chatbot-navigation
      action: {
        label: "View About",
        target: "#about",
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
     RESUME
=======
     LINKEDIN
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  if (
    hasAny(
<<<<<<< HEAD
      "resume",
      "résumé",
      "cv",
      "curriculum vitae"
    )
  ) {
    return {
      text:
        "You can view Einnar's resume through the View Resume button in the Contact section of his portfolio.",
      action: {
        label: "View Contact Section",
        target: "#contact",
=======
      "linkedin",
      "linked in",
      "professional profile",
      "online profile"
    )
  ) {
    const linkedinUrl = contact.linkedin?.url;

    if (!linkedinUrl || linkedinUrl === "#") {
      return {
        text:
          "Einnar's LinkedIn profile link will be added once the final profile URL is provided.",
      };
    }

    return {
      text:
        "You can visit Einnar's professional profile on LinkedIn using the link below.",
      action: {
        label: "View LinkedIn",
        target: linkedinUrl,
        external: true,
>>>>>>> feature/chatbot-navigation
      },
    };
  }

  /* ----------------------------------------
<<<<<<< HEAD
=======
     CONTACT
  ---------------------------------------- */

  if (
    hasAny(
      "contact",
      "contact him",
      "contact einnar",
      "reach him",
      "reach einnar",
      "get in touch",
      "how can i reach",
      "how do i contact",
      "email",
      "phone",
      "telephone",
      "hire him",
      "hire einnar",
      "send him a message"
    )
  ) {
    return {
      text:
        "You can get in touch with Einnar through the Contact section of his portfolio, where his available contact information and professional links are provided.",
      action: {
        label: "Contact Einnar",
        target: "#contact",
      },
    };
  }

  /* ----------------------------------------
     RESUME
  ---------------------------------------- */

  if (
    hasAny(
      "resume",
      "résumé",
      "cv",
      "curriculum vitae"
    )
  ) {
    return {
      text:
        "You can view Einnar's resume through the View Resume button in the Contact section of his portfolio.",
      action: {
        label: "View Contact Section",
        target: "#contact",
      },
    };
  }

  /* ----------------------------------------
>>>>>>> feature/chatbot-navigation
     FALLBACK
  ---------------------------------------- */

  return {
    text:
<<<<<<< HEAD
      "I can help you learn more about Einnar's background, experience, professional focus, projects, training, location, and contact information. Try asking about a specific project or choose one of the suggested questions.",
=======
      "I can help you learn more about Einnar's background, experience, professional focus, projects, training, location, and contact information. You can ask about a specific project, such as the perimeter electric fence installation or concrete hump monitoring, or choose one of the suggested questions.",
>>>>>>> feature/chatbot-navigation
  };
}

/* ========================================
   CHATBOT COMPONENT
======================================== */

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
<<<<<<< HEAD
        "Hello. I'm Einnar's portfolio assistant. How can I help you?",
    },
  ]);

  // Reference to the bottom of the chat conversation.
  const messagesEndRef = useRef(null);

  // Automatically scroll the chat panel to the latest message.
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isOpen]);

  /* ----------------------------------------
     NAVIGATE TO A SECTION OR EXTERNAL LINK
=======
        "Hello. I'm Foreman, Einnar's portfolio assistant. How can I help you?",
    },
  ]);

  /* ----------------------------------------
     NAVIGATION
>>>>>>> feature/chatbot-navigation
  ---------------------------------------- */

  const navigateToSection = (target, external = false) => {
    if (external) {
      window.open(target, "_blank", "noopener,noreferrer");
      return;
    }

    const element = document.querySelector(target);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  /* ----------------------------------------
     SEND MESSAGE
  ---------------------------------------- */

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) return;

    const timestamp = Date.now();
    const response = getResponse(trimmedMessage);

    const userMessage = {
      id: timestamp,
      sender: "user",
      text: trimmedMessage,
    };

    const botMessage = {
      id: timestamp + 1,
      sender: "bot",
      text: response.text,
      action: response.action,
    };

    setMessages((current) => [
      ...current,
      userMessage,
      botMessage,
    ]);

    setMessage("");
  };

  return (
    <>
<<<<<<< HEAD
      {/* FLOATING LAUNCHER */}
=======
      {/* =====================================
          FLOATING CHATBOT LAUNCHER
      ===================================== */}
>>>>>>> feature/chatbot-navigation

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center bg-[#e87524] text-white shadow-lg shadow-black/10 transition-colors duration-300 hover:bg-[#d96516]"
        aria-label={
          isOpen
            ? "Close portfolio assistant"
            : "Open portfolio assistant"
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
            >
              <X size={20} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Bot size={20} strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

<<<<<<< HEAD
      {/* CHAT WINDOW */}
=======
      {/* =====================================
          CHAT WINDOW
      ===================================== */}
>>>>>>> feature/chatbot-navigation

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed bottom-24 right-6 z-[60] flex h-[520px] w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10"
          >
            {/* HEADER */}

            <div className="flex items-center justify-between bg-[#e87524] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-white text-[#e87524]">
                  <Bot size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                    Foreman
                  </p>

                  <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white/70">
                    Portfolio Information
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center border border-white/30 transition-colors hover:bg-white hover:text-[#e87524]"
                aria-label="Close chatbot"
              >
                <ChevronDown size={15} strokeWidth={1.4} />
              </button>
            </div>

            {/* MESSAGES */}

            <div className="relative flex-1 overflow-y-auto px-4 py-5">
              {/* Technical grid background */}

              <div className="pointer-events-none absolute inset-0 opacity-[0.45]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        to right,
                        rgba(0,0,0,0.035) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.035) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              <div className="relative space-y-4">
<<<<<<< HEAD
                {/* CONVERSATION */}
=======
                {/* Conversation messages */}
>>>>>>> feature/chatbot-navigation

                {messages.map((item) => (
                  <div
                    key={item.id}
                    className={`flex ${
                      item.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] ${
                        item.sender === "user"
                          ? "bg-[#e87524] text-white"
                          : "border border-black/10 bg-white text-black/70"
                      }`}
                    >
<<<<<<< HEAD
=======
                      {/* Message text */}

>>>>>>> feature/chatbot-navigation
                      <div className="whitespace-pre-line px-4 py-3 text-sm leading-6">
                        {item.text}
                      </div>

<<<<<<< HEAD
                      {/* RESPONSE ACTION */}
=======
                      {/* Action button */}
>>>>>>> feature/chatbot-navigation

                      {item.sender === "bot" && item.action && (
                        <div className="px-4 pb-3">
                          <button
                            type="button"
                            onClick={() =>
                              navigateToSection(
                                item.action.target,
                                item.action.external
                              )
                            }
                            className="group flex items-center gap-2 border border-black/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-black/55 transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
                          >
                            {item.action.label}

                            <ArrowUpRight
                              size={12}
                              strokeWidth={1.4}
                              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* SUGGESTED QUESTIONS */}

                {messages.length === 1 && (
                  <div className="pt-2">
                    <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-black/35">
                      Suggested Questions
                    </p>

                    <div className="flex flex-col gap-2">
                      {suggestedQuestions.map((question) => (
                        <button
                          key={question}
                          type="button"
                          onClick={() => sendMessage(question)}
                          className="w-fit max-w-full border border-black/10 bg-white px-3 py-2 text-left text-xs text-black/60 transition-all duration-300 hover:border-[#e87524] hover:bg-[#e87524] hover:text-white"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* AUTO-SCROLL TARGET */}

              <div ref={messagesEndRef} />
            </div>

<<<<<<< HEAD
            {/* INPUT */}
=======
            {/* MESSAGE INPUT */}
>>>>>>> feature/chatbot-navigation

            <form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex border-t border-black/10 bg-white"
            >
              <input
                type="text"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Ask about Einnar..."
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-black outline-none placeholder:text-black/25"
                aria-label="Ask the portfolio assistant"
              />

              <button
                type="submit"
                className="flex w-14 items-center justify-center border-l border-black/10 text-[#e87524] transition-colors hover:bg-[#e87524] hover:text-white"
                aria-label="Send message"
              >
                <Send size={16} strokeWidth={1.4} />
              </button>
            </form>

            {/* FOOTER */}

            <div className="flex items-center justify-between border-t border-black/10 px-4 py-2">
              <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-black/25">
                Engineering With Purpose
              </span>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-1 font-mono text-[7px] uppercase tracking-[0.15em] text-black/35 transition-colors hover:text-[#e87524]"
              >
                Contact

                <ArrowUpRight
                  size={10}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
