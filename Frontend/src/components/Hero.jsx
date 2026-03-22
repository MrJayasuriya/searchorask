import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import { Search, Sparkles } from "lucide-react";
import { BackgroundCircles, BottomLine } from "./design/Hero";

const Hero = ({ onOpenModal }) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = [
    "Ask anything about this website…",
    "How does your pricing work?",
    "Do you integrate with Shopify?",
    "Where can I find the API docs?",
  ];

  useEffect(() => {
    let timeoutId;
    const currentText = placeholders[placeholderIndex];

    if (!isDeleting && displayText === currentText) {
      // Pause before deleting
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next string
      setIsDeleting(false);
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    } else {
      // Typing or deleting
      const delay = isDeleting ? 30 : 70;
      timeoutId = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentText.substring(0, prev.length - 1)
            : currentText.substring(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, placeholderIndex]);

  return (
    <Section
      className="pt-[10rem] -mt-[5.25rem] pb-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative border-b border-n-6 pb-20">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-16 lg:mb-[5rem]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-n-8 border border-n-6 text-xs font-semibold text-accent-cyan tracking-wide uppercase">
              <Sparkles className="w-3 h-3 mr-2" />
              Next-Gen Search Engine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h1 mb-6 font-semibold"
          >
            Turn Your Website Into an <br />
            <span className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-2">
              AI Search Engine
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-1 max-w-3xl mx-auto mb-10 text-n-3 lg:mb-12 font-medium"
          >
            <p className="mb-2">
              Let users ask anything on your website. Increase conversions, improve SEO, and personalize every visitor experience — automatically.
            </p>
          </motion.div>

          {/* Input Box - Live Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-1 via-accent-cyan to-primary-2 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative p-1 rounded-2xl bg-gradient-to-b from-n-7 to-n-8 border border-n-6">
              <div className="relative flex items-center bg-n-8 rounded-[0.875rem] overflow-hidden px-4 md:px-6 py-4">
                <Search className="w-6 h-6 text-n-4 mr-3" />
                <div className="flex-1 text-left text-n-1 text-lg">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[2px] h-5 bg-accent-cyan ml-1 align-middle"
                  />
                </div>
                <button 
                  onClick={onOpenModal}
                  className="hidden md:flex ml-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-1 to-primary-2 text-white font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(124,58,237,0.5)]"
                >
                  Generate Answer
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <button
              onClick={onOpenModal}
              className="py-4 px-8 rounded-xl bg-n-1 text-n-8 font-bold text-base hover:bg-n-2 transition-colors mb-4 md:hidden w-full max-w-[20rem]"
            >
              Add AI Search to Your Website
            </button>
            <button
              onClick={onOpenModal}
              className="hidden md:inline-block py-4 px-8 rounded-xl bg-n-1 text-n-8 font-bold text-base hover:bg-n-2 transition-colors mb-4 relative overflow-hidden group"
            >
              <span className="relative z-10">Add AI Search to Your Website</span>
              <div className="absolute inset-0 bg-gradient-to-r from-n-1 via-n-3 to-n-1 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <div className="text-sm text-n-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No code. Setup in 2 minutes.
            </div>
          </motion.div>
        </div>
        
        <BackgroundCircles />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
