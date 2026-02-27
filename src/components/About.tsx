import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import aboutImg from "@/assets/about-img.jpg";

const points = [
  "Deep industry expertise with proven results",
  "Commitment to delivering sustainable business value",
  "Trusted by 500+ companies across India",
  "Customized solutions for every business need",
];

const About = () => {
  return (
    <section id="about" className="py-12 bg-surface-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <img
              src={aboutImg}
              alt="Team meeting"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold rounded-xl p-5 shadow-gold hidden sm:block">
              <p className="text-3xl font-bold text-secondary-foreground font-serif">15+</p>
              <p className="text-sm text-secondary-foreground/80 font-medium">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="inline-block px-4 md:px-6 py-2 rounded-full bg-gold/10 text-gold font-black uppercase tracking-widest text-base md:text-lg mb-4">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-1 mb-6">
                A Trusted Consulting Firm Built on Integrity
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-center lg:text-left">
              Talent HR Consultancy is a premier consulting firm in India, built on integrity, deep
              industry expertise, and a strong commitment to delivering sustainable business value.
              We enable strategic business transformation through comprehensive HR solutions,
              talent acquisition, and organizational development. Our specialized <span className="font-bold text-foreground">payroll</span> services ensure seamless statutory compliance and operational efficiency.
            </p>

            {/* Mobile Image */}
            <div className="relative block lg:hidden w-full mb-8 mt-2 mx-auto sm:max-w-none">
              <img
                src={aboutImg}
                alt="Team meeting"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-xl p-4 shadow-gold hidden sm:block delay-100">
                <p className="text-2xl font-bold text-secondary-foreground font-serif">15+</p>
                <p className="text-xs text-secondary-foreground/80 font-medium">Years of Excellence</p>
              </div>
            </div>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CircleCheck size={20} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
