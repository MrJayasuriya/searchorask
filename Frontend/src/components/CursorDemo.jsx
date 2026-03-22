import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { demoChatMessages } from "../constants";

const CursorDemo = () => {
    const [visibleMessages, setVisibleMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        // Animate messages in sequence
        const showMessage = async () => {
            for (let i = 0; i < demoChatMessages.length; i++) {
                // Show typing indicator for AI messages
                if (demoChatMessages[i].type === "ai") {
                    setIsTyping(true);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    setIsTyping(false);
                }

                // Show the message
                await new Promise((resolve) => setTimeout(resolve, 300));
                setVisibleMessages((prev) => [...prev, demoChatMessages[i]]);

                // Wait before next message
                await new Promise((resolve) => setTimeout(resolve, 1500));
            }

            // Loop the animation
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setVisibleMessages([]);
            setTimeout(showMessage, 500);
        };

        showMessage();
    }, []);

    return (
        <Section id="demo">
            <div className="container">
                <Heading
                    tag="See it in action"
                    title="This is how editly.ai works"
                    className="text-center"
                />

                <div className="relative mt-12 lg:mt-16">
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                        {/* Video Preview Panel */}
                        <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-color-1 via-color-5 to-color-6">
                            <div className="relative bg-n-8 rounded-2xl p-6 md:p-8 min-h-[400px] lg:min-h-[500px]">
                                <h4 className="h6 mb-4 text-n-3">🎥 Video Preview</h4>

                                {/* Video Thumbnail */}
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-n-7 mb-4 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-n-6 to-n-8 flex items-center justify-center">
                                        <div className="text-center">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="w-16 h-16 rounded-full bg-n-1/10 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:bg-n-1/20 transition-colors"
                                            >
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="text-n-1 ml-1"
                                                >
                                                    <polygon points="5,3 19,12 5,21" />
                                                </svg>
                                            </motion.div>
                                            <p className="body-2 text-n-4">sample_video.mp4</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="caption text-n-4">Raw video thumbnail</p>
                            </div>
                        </div>

                        {/* Chat Panel */}
                        <div className="relative p-0.5 rounded-2xl bg-gradient-to-br from-color-5 via-color-1 to-color-2">
                            <div className="relative bg-n-8 rounded-2xl p-6 md:p-8 min-h-[400px] lg:min-h-[500px] flex flex-col">
                                <h4 className="h6 mb-4 text-n-3">💬 Chat Panel</h4>

                                {/* Messages Container */}
                                <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                                    <AnimatePresence>
                                        {visibleMessages.map((message, index) => (
                                            <motion.div
                                                key={message.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"
                                                    }`}
                                            >
                                                <div
                                                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${message.type === "user"
                                                            ? "bg-conic-gradient text-n-8"
                                                            : "bg-n-7 text-n-1 border border-n-6"
                                                        }`}
                                                >
                                                    <p
                                                        className="body-2 whitespace-pre-line"
                                                        style={{ wordBreak: "break-word" }}
                                                    >
                                                        {message.text}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>

                                    {/* Typing Indicator */}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-n-7 border border-n-6 px-4 py-3 rounded-2xl">
                                                <div className="flex space-x-1">
                                                    <motion.div
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                                                        className="w-2 h-2 rounded-full bg-n-4"
                                                    />
                                                    <motion.div
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                                        className="w-2 h-2 rounded-full bg-n-4"
                                                    />
                                                    <motion.div
                                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                                        className="w-2 h-2 rounded-full bg-n-4"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Input Field (Disabled for demo) */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        disabled
                                        placeholder="Type your editing command..."
                                        className="w-full px-4 py-3 bg-n-7 border border-n-6 rounded-xl text-n-4 placeholder:text-n-5 cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="caption text-center text-n-4 mt-6">
                        This is how editly.ai works.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default CursorDemo;
