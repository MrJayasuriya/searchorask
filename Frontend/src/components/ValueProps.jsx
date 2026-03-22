import { motion } from "framer-motion";
import Section from "./Section";
import { Search, TrendingUp, Users, Target } from "lucide-react";

const valueProps = [
  {
    id: "1",
    title: "AI Search Experience",
    text: "Let users find answers instantly instead of clicking through pages.",
    icon: <Search className="w-6 h-6 text-accent-cyan" />,
  },
  {
    id: "2",
    title: "SEO Optimization Engine",
    text: "Automatically improve content, keywords, and rankings based on queries.",
    icon: <TrendingUp className="w-6 h-6 text-primary-1" />,
  },
  {
    id: "3",
    title: "Smart Personalization",
    text: "Show different content based on user intent, behavior, and location.",
    icon: <Users className="w-6 h-6 text-primary-2" />,
  },
  {
    id: "4",
    title: "Conversion Boost",
    text: "Turn visitors into customers with intelligent, proactive responses.",
    icon: <Target className="w-6 h-6 text-green-400" />,
  },
];

const ValueProps = () => {
  return (
    <Section id="features" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-[50rem] mx-auto mb-16 md:mb-20">
          <h2 className="h2 mb-4">Why upgrade to AI Search?</h2>
          <p className="body-2 text-n-4">
            Standard site search is broken. We bring intelligent, conversational
            experiences that drive real business results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-n-8 border border-n-6 overflow-hidden group hover:border-n-5 transition-colors cursor-default"
            >
              {/* Glassmorphism gradient effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-1/10 to-transparent blur-2xl group-hover:from-primary-1/20 transition-all"></div>
              
              <div className="relative z-10 flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-n-7 border border-n-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="h5 mb-3">{item.title}</h4>
              <p className="body-2 text-n-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ValueProps;
