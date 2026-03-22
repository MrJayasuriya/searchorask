import Section from "./Section";
import { motion } from "framer-motion";

const useCases = [
    {
        id: "0",
        icon: "⚡",
        title: "Speed Up Production",
        description: "Edit videos 10x faster without touching a timeline. Just describe your vision.",
    },
    {
        id: "1",
        icon: "🎯",
        title: "No Skills Required",
        description: "Skip the learning curve. If you can text, you can edit professional videos.",
    },
    {
        id: "2",
        icon: "💰",
        title: "Save Money",
        description: "Stop paying editors or expensive software subscriptions. Edit unlimited videos.",
    },
    {
        id: "3",
        icon: "🔄",
        title: "Iterate Instantly",
        description: "Don't like it? Just say what to change. Get revisions in seconds, not hours.",
    },
];

const WhyPromptEdit = () => {
    return (
        <Section crosses className="!py-20">
            <div className="container">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full border border-n-6 bg-n-8/50 mb-4"
                    >
                        <span className="tagline text-n-3">Why editly.ai?</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h2 mb-4"
                    >
                        Create content faster.
                        <br />
                        Without the complexity.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="body-1 text-n-3"
                    >
                        Traditional video editing is slow, expensive, and requires technical skills.
                        <br />
                        editly.ai lets you edit videos the way you think — with words.
                    </motion.p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative p-0.5 rounded-2xl bg-n-6 group-hover:bg-gradient-to-br group-hover:from-color-1 group-hover:via-color-5 group-hover:to-color-6 transition-all duration-300">
                                <div className="relative bg-n-8 rounded-2xl p-6 text-center min-h-[240px] flex flex-col">
                                    {/* Icon */}
                                    <div className="text-5xl mb-4">{useCase.icon}</div>

                                    {/* Title */}
                                    <h4 className="h6 mb-3">{useCase.title}</h4>

                                    {/* Description */}
                                    <p className="body-2 text-n-4 flex-1">{useCase.description}</p>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-color-1/0 to-color-1/0 group-hover:from-color-1/5 group-hover:to-color-6/5 rounded-2xl transition-all duration-500 pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default WhyPromptEdit;
