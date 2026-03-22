import Section from "./Section";
import { creatorPersonas } from "../constants";
import { motion } from "framer-motion";

const CreatorPositioning = () => {
    return (
        <Section id="creators" className="overflow-hidden">
            <div className="container">
                {/* Headline */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h2 mb-6"
                    >
                        Built  Askiton.ai who hate editing.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="body-1 text-n-3"
                    >
                        If you can describe it,
                        <br />
                        you can create it.
                    </motion.p>
                </div>

                {/* Creator Personas Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {creatorPersonas.map((persona, index) => (
                        <motion.div
                            key={persona.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-0.5 rounded-2xl bg-n-6 group-hover:bg-gradient-to-br group-hover:from-color-1 group-hover:via-color-5 group-hover:to-color-6 transition-all duration-300">
                                <div className="relative bg-n-8 rounded-2xl p-8 text-center h-full min-h-[200px] flex flex-col justify-center">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-6xl mb-4"
                                    >
                                        {persona.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h4 className="h5 mb-2">{persona.title}</h4>

                                    {/* Description */}
                                    <p className="body-2 text-n-4">{persona.description}</p>

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-color-1/0 to-color-1/0 group-hover:from-color-1/10 group-hover:to-color-6/10 rounded-2xl transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default CreatorPositioning;
