import { motion } from "framer-motion";
import shivragImageMobile from "@/assets/bg remove.png";
import shivragImageDesktop from "@/assets/shivraj_image.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[100svh] md:min-h-screen overflow-hidden bg-gradient-to-r from-[#d1ac82] via-[#d1ac82] 50% to-[#ebdcb2] flex flex-col md:block">
      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 h-auto md:h-full flex items-start md:items-center pt-28 pb-10 md:pt-32 md:pb-0 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col max-w-2xl relative z-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-6 drop-shadow-sm leading-[1.1]">
            Providing The Best <br />
            Payroll Consultancy Services
          </h1>
          <p className="text-base md:text-lg text-slate-800 font-semibold max-w-xl mb-10 drop-shadow-sm leading-relaxed">
            Empowering businesses with smart HR solutions. Talent HR Consultancy offers end-to-end  payroll services including compliance, recruitment (white & blue collar), accounts & finance, and statutory documentation. We simplify HR processes so you can focus on growing your business with confidence.
          </p>
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

      {/* Background Image / Person at bottom on Mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative md:absolute inset-x-0 bottom-0 md:top-0 md:bottom-0 z-0 bg-transparent md:pt-0 shrink-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-1/2 lg:w-[45%] h-[35vh] sm:h-[45vh] md:h-[95%] lg:h-full z-[1] flex justify-center items-end md:block"
        >
          <img
            src={shivragImageMobile}
            alt="Professional consultant"
            className="w-full h-full object-contain object-bottom md:hidden scale-110"
          />
          <img
            src={shivragImageDesktop}
            alt="Professional consultant"
            className="hidden md:block w-full h-full object-cover object-left-top desktop-mask origin-center"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
