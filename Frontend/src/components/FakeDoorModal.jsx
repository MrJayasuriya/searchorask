import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEarlyAccess } from "../api";

const FakeDoorModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        purpose: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Validate mobile (basic validation for 10 digits)
        const mobileRegex = /^[0-9]{10}$/;
        if (!formData.mobile.trim()) {
            newErrors.mobile = "Mobile number is required";
        } else if (!mobileRegex.test(formData.mobile.replace(/[^0-9]/g, ""))) {
            newErrors.mobile = "Please enter a valid 10-digit mobile number";
        }

        // Validate purpose
        if (!formData.purpose.trim()) {
            newErrors.purpose = "Please tell us why you want to use editly.ai";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Submit to backend API
        setIsLoading(true);
        setApiError("");

        try {
            await submitEarlyAccess(formData);
            // Show success state
            setSubmitted(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            setApiError(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        // Reset state when closing
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", mobile: "", purpose: "" });
            setErrors({});
            setApiError("");
            setIsLoading(false);
        }, 300);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-n-8/90 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-md"
                    >
                        {/* Glassmorphism Card */}
                        <div className="relative p-0.5 rounded-2xl bg-conic-gradient">
                            <div className="relative bg-n-8 rounded-2xl p-8 md:p-12">
                                {/* Close Button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-n-3 hover:text-n-1 transition-colors"
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>

                                {!submitted ? (
                                    // Initial State
                                    <div className="text-center">
                                        <div className="text-6xl mb-6">🚀</div>
                                        <h3 className="h3 mb-4">We're finishing this right now</h3>
                                        <p className="body-2 text-n-3 mb-8">
                                            editly.ai is launching soon.
                                            <br />
                                            Be the first to edit videos by chat.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            {/* Name Input */}
                                            <div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your name"
                                                    className="w-full px-6 py-4 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors"
                                                />
                                                {errors.name && (
                                                    <p className="text-color-3 text-sm mt-2 text-left">{errors.name}</p>
                                                )}
                                            </div>

                                            {/* Email Input */}
                                            <div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Your email"
                                                    className="w-full px-6 py-4 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors"
                                                />
                                                {errors.email && (
                                                    <p className="text-color-3 text-sm mt-2 text-left">{errors.email}</p>
                                                )}
                                            </div>

                                            {/* Mobile Input */}
                                            <div>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    placeholder="Mobile number"
                                                    className="w-full px-6 py-4 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors"
                                                />
                                                {errors.mobile && (
                                                    <p className="text-color-3 text-sm mt-2 text-left">{errors.mobile}</p>
                                                )}
                                            </div>

                                            {/* Purpose Input */}
                                            <div>
                                                <textarea
                                                    name="purpose"
                                                    value={formData.purpose}
                                                    onChange={handleChange}
                                                    placeholder="Why do you want to use Askiton.ai? (e.g., Search or ask anything)"
                                                    rows="3"
                                                    className="w-full px-6 py-4 bg-n-7 border border-n-6 rounded-xl text-n-1 placeholder:text-n-4 focus:outline-none focus:border-color-1 transition-colors resize-none"
                                                />
                                                {errors.purpose && (
                                                    <p className="text-color-3 text-sm mt-2 text-left">{errors.purpose}</p>
                                                )}
                                            </div>

                                            {/* API Error Message */}
                                            {apiError && (
                                                <div className="p-4 bg-color-3/10 border border-color-3 rounded-xl">
                                                    <p className="text-color-3 text-sm text-center">
                                                        {apiError}
                                                    </p>
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full px-6 py-4 bg-conic-gradient rounded-xl font-code text-xs font-bold uppercase tracking-wider text-n-8 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? "Submitting..." : "Get Early Access"}
                                            </button>
                                        </form>
                                    </div>
                                ) : (
                                    // Success State
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-8"
                                    >
                                        <div className="text-6xl mb-6">🎉</div>
                                        <h3 className="h3 mb-4">You're in!</h3>
                                        <p className="body-2 text-n-3">
                                            We'll notify you when editly.ai launches.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FakeDoorModal;
