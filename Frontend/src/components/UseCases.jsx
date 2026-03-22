import { motion } from "framer-motion";
import Section from "./Section";
import { CheckCircle2 } from "lucide-react";

const useCases = [
  {
    title: "SaaS Websites",
    description: "Increase demo bookings by answering product questions instantly.",
    highlight: "+35% more pipeline",
  },
  {
    title: "E-commerce",
    description: "Improve product discovery and handle support questions 24/7.",
    highlight: "-20% support tickets",
  },
  {
    title: "Agencies",
    description: "Offer AI search as a killer premium add-on to your clients.",
    highlight: "New revenue stream",
  },
  {
    title: "Coaches & Creators",
    description: "Convert visitors into leads by guiding them to the right resources.",
    highlight: "+50% email captures",
  },
];

const UseCases = () => {
  return (
    <Section id="use-cases" crosses>
      <div className="container relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Copy */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="h2 mb-6">Built for businesses that want to grow.</h2>
            <p className="body-1 text-n-4 mb-8">
              No matter your industry, if you rely on your website for leads or sales,
              AI search is the highest ROI upgrade you can make.
            </p>
            {/* Visual element here */}
            <div className="hidden lg:flex w-full h-[300px] mt-8 rounded-3xl bg-n-8 border border-n-6 flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-n-8/90 z-10 pointer-events-none"></div>
              <div className="w-[80%] h-12 bg-n-7 rounded-xl border border-n-6 mb-4 animate-pulse"></div>
              <div className="w-[60%] h-32 bg-n-7 rounded-xl border border-n-6 flex items-end justify-start p-4">
                 <div className="w-[80%] h-4 bg-primary-1/30 rounded-full mb-2"></div>
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 bg-accent-cyan/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* Right Side: List */}
          <div className="flex-1 w-full flex flex-col gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-2xl bg-n-8 border border-n-6 hover:bg-n-7/50 transition-colors"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary-1" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="h6">{useCase.title}</h4>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-accent-cyan/10 text-accent-cyan">
                      {useCase.highlight}
                    </span>
                  </div>
                  <p className="body-2 text-n-4">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
};

export default UseCases;
