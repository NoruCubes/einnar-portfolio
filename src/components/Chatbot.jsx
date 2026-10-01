import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  ChevronDown,
  Send,
  X,
} from "lucide-react";

import portfolioData from "../data/portfolioData";

const suggestedQuestions = [
  "Tell me about Einnar",
  "What is Einnar's experience?",
  "What projects has Einnar worked on?",
  "Where is Einnar based?",
  "What training has Einnar completed?",
  "How can I contact Einnar?",
];

function getResponse(message) {
  const normalized = message.toLowerCase().trim();

  const {
    profile,
    experience,
    training,
    projects,
    contact,
  } = portfolioData;

  // Profile
  if (
    normalized.includes("who") ||
    normalized.includes("einnar") ||
    normalized.includes("about")
  ) {
    return `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.summary}`;
  }

  // Experience
  if (
    normalized.includes("experience") ||
    normalized.includes("work") ||
    normalized.includes("career") ||
    normalized.includes("worked")
  ) {
    if (!experience.length) {
      return "There is currently no professional experience information available.";
    }

    const companies = experience
      .map((item) => `${item.company} (${item.role})`)
      .join(", ");

    return `Einnar has professional experience across ${companies}. His work includes construction monitoring, site inspections, project monitoring, quantity take-offs, cost estimation, and project reporting.`;
  }

  // Training
  if (
    normalized.includes("training") ||
    normalized.includes("certification") ||
    normalized.includes("certificate")
  ) {
    if (!training.length) {
      return "There is currently no training information available.";
    }

    const trainingList = training
      .map((item) => item.title)
      .join(", ");

    return `Einnar's training includes ${trainingList}. These cover areas such as construction estimating, quantity take-offs, project scheduling, digital plan analysis, and cost management.`;
  }

  // Projects
  if (
    normalized.includes("project") ||
    normalized.includes("projects")
  ) {
    if (!projects.length) {
      return "Project information is currently being prepared. More projects will be added once the portfolio content is finalized.";
    }

    return `Einnar has ${
      projects.length
    } project${projects.length > 1 ? "s" : ""} featured in his portfolio. You can explore them through the Projects section.`;
  }

  // Contact
  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("phone") ||
    normalized.includes("linkedin") ||
    normalized.includes("reach")
  ) {
    return `You can contact Einnar through the Contact section. His current location is ${contact.location}, and his portfolio also provides his email, phone, and LinkedIn information.`;
  }

  // Skills / focus
  if (
    normalized.includes("skill") ||
    normalized.includes("skills") ||
    normalized.includes("special") ||
    normalized.includes("focus")
  ) {
    return `Einnar's professional focus includes ${profile.focus.join(
      ", "
    )}.`;
  }

  // Location
  if (
    normalized.includes("where") ||
    normalized.includes("location") ||
    normalized.includes("based")
  ) {
    return `Einnar is based in ${profile.location}.`;
  }

  // Fallback
  return "I can help you learn more about Einnar's profile, experience, training, projects, professional focus, and contact information. Try asking about one of those topics.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello. I'm Einnar's portfolio assistant. How can I help you?",
    },
  ]);

  const sendMessage = (text = message) => {
    const trimmedMessage = text.trim();

    if (!trimmedMessage) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedMessage,
    };

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getResponse(trimmedMessage),
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
      {/* Floating launcher */}
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

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed bottom-24 right-6 z-[60] flex h-[520px] w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#e87524] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-white text-[#e87524]">
                  <Bot size={17} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em]">
                    Einnar Assistant
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
                <ChevronDown
                  size={15}
                  strokeWidth={1.4}
                />
              </button>
            </div>

            {/* Messages */}
            <div className="relative flex-1 overflow-y-auto px-4 py-5">

              {/* Technical grid */}
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

                {/* Conversation */}
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
                      className={`max-w-[85%] px-4 py-3 text-sm leading-6 ${
                        item.sender === "user"
                          ? "bg-[#e87524] text-white"
                          : "border border-black/10 bg-white text-black/70"
                      }`}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}

                {/* Suggested Questions */}
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
            </div>

            {/* Input */}
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
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask about Einnar..."
                className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm text-black outline-none placeholder:text-black/25"
              />

              <button
                type="submit"
                className="flex w-14 items-center justify-center border-l border-black/10 text-[#e87524] transition-colors hover:bg-[#e87524] hover:text-white"
                aria-label="Send message"
              >
                <Send
                  size={16}
                  strokeWidth={1.4}
                />
              </button>
            </form>

            {/* Footer */}
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