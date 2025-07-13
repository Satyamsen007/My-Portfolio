import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import FlameStarEffectUnderline from "@/components/FlameStarEffectUnderline";
import AnimatedCard from "@/components/dynamic-border-animations-card";
import { motion } from 'framer-motion';

export const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setFeedback("");
    try {
      // Send main email to you
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      // Send auto-reply to user
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_email: data.email,
          to_name: data.name,
          message: data.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setFeedback("Thank you for contacting me! I will get back to you soon.");
      reset();
    } catch (error) {
      setFeedback("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={sectionVariants}
      id="contact" className="w-full py-16 max-md:py-2 px-4 md:px-0 flex flex-col items-center justify-center drop-shadow-sm">
      {/* Top Heading and Professional Paragraph */}
      <div className="w-full flex flex-col items-center relative mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#e0c6f7] via-[#a084e8] to-[#8e44ec] text-transparent bg-clip-text drop-shadow-lg text-center mb-4 max-md:mb-2">
          Get in Touch
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-gray-300 text-center font-medium">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out for professional collaborations or just to say hello!
        </p>

        {/* Fade underlines */}
        <FlameStarEffectUnderline />
      </div>
      <AnimatedCard>
        <div className="p-10 max-md:py-6 max-md:px-0 flex flex-col gap-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 relative z-10">
            {/* Name Field */}
            <div className="relative">
              <input
                {...register("name", { required: "Name is required" })}
                id="contact-name"
                className={`peer w-full border px-4 pt-6 pb-2 max-md:pb-3 rounded-xl bg-[#240C36]/60 text-[#e0c6f7] placeholder-transparent focus:bg-[#240C36]/80 max-md:text-sm focus:outline-none focus:ring-2 focus:ring-[#e86fff] transition duration-200 ${errors.name ? 'border border-[#e86fff]' : 'border border-[#a084e8]/20'}`}
                placeholder="Your Name"
                autoComplete="off"
              />
              <label htmlFor="contact-name" className="absolute left-4 top-2 text-[#e86fff] text-sm font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e0c6f7]/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e86fff]">Name</label>
              {errors.name && <span className="text-[#e86fff] text-xs mt-1 block">{errors.name.message}</span>}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                id="contact-email"
                className={`peer w-full px-4 pt-6 pb-2 max-md:pb-3 rounded-xl bg-[#240C36]/60 text-[#e0c6f7] placeholder-transparent focus:bg-[#240C36]/80 max-md:text-sm focus:outline-none focus:ring-2 focus:ring-[#e86fff] transition duration-200 ${errors.email ? 'border border-[#e86fff]' : 'border border-[#a084e8]/20'}`}
                placeholder="you@email.com"
                type="email"
                autoComplete="off"
              />
              <label htmlFor="contact-email" className="absolute left-4 top-2 text-[#e86fff] text-sm font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e0c6f7]/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e86fff]">Email</label>
              {errors.email && <span className="text-[#e86fff] text-xs mt-1 block">{errors.email.message}</span>}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9\-\s]{7,16}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                id="contact-phone"
                className={`peer w-full px-4 pt-6 pb-2 max-md:pb-3 rounded-xl bg-[#240C36]/60 text-[#e0c6f7] placeholder-transparent focus:bg-[#240C36]/80 max-md:text-sm focus:outline-none focus:ring-2 focus:ring-[#e86fff] transition duration-200 ${errors.phone ? 'border border-[#e86fff]' : 'border border-[#a084e8]/20'}`}
                placeholder="Your phone number"
                autoComplete="off"
                type="tel"
              />
              <label htmlFor="contact-phone" className="absolute left-4 top-2 text-[#e86fff] text-sm font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e0c6f7]/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e86fff]">Phone</label>
              {errors.phone && <span className="text-[#e86fff] text-xs mt-1 block">{errors.phone.message}</span>}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                {...register("message", { required: "Message is required" })}
                id="contact-message"
                className={`peer w-full px-4 pt-6 pb-2 max-md:pb-3 rounded-xl bg-[#240C36]/60 text-[#e0c6f7] placeholder-transparent focus:bg-[#240C36]/80 max-md:text-sm focus:outline-none focus:ring-2 focus:ring-[#e86fff] min-h-[120px] transition duration-200 ${errors.message ? 'border border-[#e86fff]' : 'border border-[#a084e8]/20'}`}
                placeholder="Your message..."
                autoComplete="off"
              />
              <label htmlFor="contact-message" className="absolute left-4 top-2 text-[#e86fff] text-sm font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#e0c6f7]/60 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e86fff]">Message</label>
              {errors.message && <span className="text-[#e86fff] text-xs mt-1 block">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 w-[40%] max-md:w-full px-8 py-3 rounded-xl font-bold text-[#240C36] shadow-lg bg-gradient-to-r from-[#f3c6ff] via-[#d1b3ff] to-[#bfaaff] focus:outline-none focus:ring-2 focus:ring-[#e86fff] cursor-pointer flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ boxShadow: "0 4px 24px 0 rgba(232,111,255,0.10), 0 1.5px 6px 0 rgba(142,68,236,0.06)" }}
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-[#a084e8]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-75" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            {feedback && (
              <div
                className={`mt-4 text-center max-md:text-sm text-base font-semibold px-6 py-4 shadow-xl mx-auto animate-fade-in
                  border-2 backdrop-blur-md rounded-lg
                `}
              >
                {feedback}
              </div>
            )}
          </form>
        </div>
      </AnimatedCard>

    </motion.section>
  );
};
