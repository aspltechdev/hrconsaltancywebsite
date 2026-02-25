import { motion } from "framer-motion";
import { Award, Clock, Handshake, Target } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Industry Expertise",
    desc: "Deep domain knowledge across multiple industries with proven track record of successful placements.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    desc: "Efficient processes and vast network enable us to deliver quality candidates in record time.",
  },
  {
    icon: Handshake,
    title: "Client-Centric Approach",
    desc: "We build lasting partnerships with customized solutions aligned to your business goals.",
  },
  {
    icon: Target,
    title: "Quality Focused",
    desc: "Rigorous screening and assessment processes ensure only the best talent reaches you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-12 bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 md:px-6 py-2 rounded-full bg-gold/10 text-gold font-black uppercase tracking-widest text-base md:text-lg mb-4">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-3 mb-4">
            Your Trusted HR Partner
          </h2>
          <p className="text-primary-foreground/60">
            We are committed to excellence and delivering measurable results for every client.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/25 flex items-center justify-center mx-auto mb-5">
                <r.icon size={28} className="text-gold" />
              </div>
              <h3 className="text-lg font-serif font-bold mb-2">{r.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
