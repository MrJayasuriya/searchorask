import { motion } from "framer-motion";
import Section from "./Section";

const FinalCTA = ({ onOpenModal }) => {
  return (
    <Section id="cta" className="overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-[3rem] p-1 overflow-hidden"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-1 via-accent-cyan to-primary-2 opacity-50 blur-xl"></div>
          
          <div className="relative bg-n-8 rounded-[2.9rem] px-6 py-16 md:py-20 text-center border border-n-6/50 flex flex-col items-center z-10">
            <h2 className="h2 mb-6 font-semibold max-w-2xl mx-auto text-n-1">
              Stop Losing Visitors. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-accent-cyan">
                Start Converting.
              </span>
            </h2>
            <p className="body-1 text-n-3 mb-10 max-w-xl mx-auto">
              Ready to give your visitors the search experience they expect?
            </p>
            
            <button
              onClick={onOpenModal}
              className="py-4 px-10 rounded-xl bg-gradient-to-r from-primary-1 to-primary-2 text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(124,58,237,0.5)] mb-4"
            >
              Get Early Access
            </button>
            <p className="text-sm text-n-4 font-medium">
              Join founders using AI to turn traffic into revenue.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FinalCTA;
