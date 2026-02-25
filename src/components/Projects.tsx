import { motion } from "framer-motion";

const projects = [
    {
        title: "Corporate Compliance",
        desc: "Managing MCA and statutory compliance across industries.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Business Registrations",
        desc: "Handling company, LLP, & startup registrations end to end.",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "GST & Tax Compliance",
        desc: "Providing accurate GST and income tax filing services.",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Trademark & IP Services",
        desc: "Assisting with trademark registration and IP protection.",
        img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Startup Advisory",
        desc: "Supporting startups and MSMEs with compliance and strategy.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Digital Compliance",
        desc: "Delivering technology-driven compliance and reporting systems.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-12 bg-surface-warm">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 md:px-6 py-2 rounded-full bg-gold/10 text-gold font-black uppercase tracking-widest text-base md:text-lg mb-4">Our Projects</span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
                        Transforming Visions into Reality
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A glimpse into the successful transformations and compliant infrastructures we have built for our esteemed clients.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
                        >
                            <div className="relative h-48 overflow-hidden bg-slate-100">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                                <p className="text-slate-600 text-sm">{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
