import { motion } from "framer-motion";
import Section from "./Section";
import { MessageSquare, ArrowDownRight, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  return (
    <Section id="dashboard">
      <div className="container">
        <div className="text-center max-w-[50rem] mx-auto mb-16 lg:mb-20">
          <h2 className="h2 mb-4">See What Your Users Are Asking</h2>
          <p className="body-2 text-n-4">
            Stop guessing what your visitors want. Our dashboard gives you real-time
            insights into their exact questions and intents.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-1 via-accent-cyan to-primary-2 rounded-[2.5rem] blur-xl opacity-30"></div>
          
          <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-b from-n-7 to-n-8 border border-n-6 overflow-hidden">
            <div className="bg-n-8 rounded-[2rem] p-6 lg:p-10 border border-n-6 shadow-2xl">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-n-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-1/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary-1" />
                  </div>
                  <div>
                    <h5 className="h6 text-n-1">AI Insights Dashboard</h5>
                    <div className="text-xs text-n-4">Last 30 days</div>
                  </div>
                </div>
                <div className="hidden sm:flex gap-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-n-1">2,492</div>
                    <div className="text-xs text-n-4">Total Questions</div>
                  </div>
                  <div className="text-right border-l border-n-6 pl-4">
                    <div className="text-2xl font-bold text-green-400">+18%</div>
                    <div className="text-xs text-n-4">Conversion Lift</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Panel 1: Top Questions */}
                <div className="bg-n-7/50 rounded-2xl p-6 border border-n-6">
                  <h6 className="font-semibold text-n-1 mb-6 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-accent-cyan" />
                    Trending Questions
                  </h6>
                  <ul className="space-y-4">
                    {[
                      { q: "Does this integrate with Shopify?", count: "342" },
                      { q: "What's the pricing for agencies?", count: "289" },
                      { q: "How long is the free trial?", count: "156" },
                      { q: "Can I cancel anytime?", count: "98" }
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center text-sm">
                        <span className="text-n-3 truncate pr-4">{item.q}</span>
                        <span className="text-n-4 bg-n-8 px-2 py-1 rounded-md">{item.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel 2: Drop-offs */}
                <div className="bg-n-7/50 rounded-2xl p-6 border border-n-6">
                  <h6 className="font-semibold text-n-1 mb-6 flex items-center gap-2">
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                    Drop-off Points Avoided
                  </h6>
                  <div className="space-y-5">
                    {[
                      { p: "Pricing Page", saved: "420 visitors saved", w: "80%" },
                      { p: "Checkout Flow", saved: "185 visitors saved", w: "45%" },
                      { p: "Features Page", saved: "95 visitors saved", w: "25%" }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-n-3">{item.p}</span>
                          <span className="text-green-400 text-xs">{item.saved}</span>
                        </div>
                        <div className="w-full h-2 bg-n-8 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: item.w }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary-1 to-primary-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DashboardPreview;
