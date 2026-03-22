import { motion } from "framer-motion";
import Section from "./Section";
import { Link2, BrainCircuit, MessageSquareText } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Connect Your Website",
    text: "Paste your website URL or upload your sitemap. No complex setup or coding required.",
    icon: <Link2 className="w-8 h-8 text-n-1" />,
  },
  {
    id: "2",
    title: "AI Learns Your Content",
    text: "We securely crawl, index, and deeply understand your entire site's content in minutes.",
    icon: <BrainCircuit className="w-8 h-8 text-n-1" />,
  },
  {
    id: "3",
    title: "Users Ask, AI Converts",
    text: "Visitors ask questions naturally. Our AI provides instant answers, guiding them to conversion.",
    icon: <MessageSquareText className="w-8 h-8 text-n-1" />,
  },
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works" crosses className="bg-n-8/50">
      <div className="container">
        <div className="text-center max-w-[50rem] mx-auto mb-16 lg:mb-20">
          <h2 className="h2 mb-4">How It Works</h2>
          <p className="body-2 text-n-4">
            Up and running in under 2 minutes. We do all the heavy lifting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 reltive">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[45%] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-n-6 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="mx-auto w-20 h-20 bg-n-8 border border-n-6 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-1/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-cyan rounded-full flex items-center justify-center text-n-8 font-bold text-sm">
                  {step.id}
                </div>
              </div>
              <h4 className="h5 mb-3">{step.title}</h4>
              <p className="body-2 text-n-4 max-w-[20rem] mx-auto">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
