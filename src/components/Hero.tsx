import { motion } from "framer-motion";
import heroSection from "@/assets/hero_section.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[100svh] md:min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroSection}
          alt="Professional consultant"
          className="w-full h-full object-cover object-[80%_center] md:object-center lg:object-top"
        />
        {/* Modern Gradient Overlay for readability while keeping the person visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent md:from-black/40 md:to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 h-full min-h-[100svh] md:min-h-screen flex items-center pt-32 pb-24 lg:pt-32 lg:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-[1.1]">
            Provide Best <br />
            Payroll Consultancy Services
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-medium max-w-xl mb-10 drop-shadow-md leading-relaxed">
            Empowering businesses with smart HR solutions. Talent HR Consultancy offers end-to-end services including payroll, compliance, recruitment (white & blue collar), accounts & finance, and statutory documentation. We simplify HR processes so you can focus on growing your business with confidence.          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-fit px-10 py-4 bg-primary text-white font-bold rounded-md uppercase tracking-widest gap-3 shadow-xl shadow-primary/30 transition-shadow"
          >
            CONTACT US
            <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 11.5L9.5 7.5L5.5 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative vertical lines or scroll indicator can be added here if needed */}
    </section>
  );
};

export default Hero;
