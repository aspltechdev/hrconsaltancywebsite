import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileSignature, Rocket, Receipt, Coins, ScrollText, CheckCircle2, ChevronRight, X, Scale } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { getServiceDetail, ServiceDetail } from "@/data/servicesContent";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ShieldCheck,
    title: "Compliance",
    desc: "Stay aligned with all regulatory requirements and statutory updates to ensure your business operates smoothly without legal hurdles.",
  },
  {
    icon: FileSignature,
    title: "Registration",
    desc: "Seamless business registration services for various legal entities, licenses, and permits required to start your operations.",
  },
  {
    icon: Rocket,
    title: "Start up",
    desc: "Specialized support for new ventures, from initial structuring and legal advice to growth-focused advisory services.",
  },
  {
    icon: Receipt,
    title: "GST",
    desc: "Complete Goods and Services Tax management, including registration, monthly filing, and audit support.",
  },
  {
    icon: Coins,
    title: "Income Tax",
    desc: "Expert tax planning and return filing services for individuals and corporates, ensuring maximum tax efficiency.",
  },
  {
    icon: ScrollText,
    title: "MCA & Compliance",
    desc: "Managing all Ministry of Corporate Affairs (MCA) filings, ROC compliance, and company secretarial requirements.",
  },
  {
    icon: Scale,
    title: "Trademark",
    desc: "Protect your brand identity with our comprehensive trademark registration and intellectual property protection services.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<string>) => {
      const detail = getServiceDetail(e.detail);
      setSelectedService(detail);
      setIsSuccess(false);
      setIsModalOpen(true);
    };

    window.addEventListener('openServiceModal', handleOpenModal as EventListener);
    return () => window.removeEventListener('openServiceModal', handleOpenModal as EventListener);
  }, []);

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbdaqqpy", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        if ('errors' in data) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your request.");
        }
      }
    } catch (error) {
      console.error("Error submitting request", error);
      alert("Oops! There was a problem submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="services" className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 md:px-6 py-2 rounded-full bg-gold/10 text-gold font-black uppercase tracking-widest text-base md:text-lg mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Comprehensive HR Solutions
          </h2>
          <p className="text-muted-foreground">
            We provide end-to-end HR consulting services that deliver strategic insight, operational
            excellence, and sustainable business growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
                <service.icon size={26} className="text-primary group-hover:text-gold transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none shadow-2xl bg-slate-50">
          {selectedService && (
            <div className="flex flex-col md:flex-row w-full h-full relative">

              {/* Left Column - Main Details */}
              <div className="w-full md:w-2/3 p-8 bg-white md:border-r border-slate-200">
                <DialogHeader className="mb-6 text-left">
                  <DialogTitle className="text-3xl font-serif font-bold text-foreground">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-slate-600 mt-4 leading-relaxed">
                    {selectedService.shortDescription}
                  </DialogDescription>
                </DialogHeader>

                {selectedService.stats && (
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-slate-100">
                    {selectedService.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gold">{stat.value}</div>
                        <div className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {selectedService.features && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 font-serif">Why Choose Us?</h4>
                    <div className="space-y-4">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-foreground block">{feature.title}</span>
                            <span className="text-sm text-slate-600 leading-relaxed">{feature.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedService.packages && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-4 font-serif">Our Packages</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {selectedService.packages.map((pkg, idx) => (
                        <div key={idx} className={`p-4 rounded-xl border ${pkg.recommended ? 'border-gold bg-gold/5 shadow-md relative' : 'border-slate-200 bg-white'}`}>
                          {pkg.recommended && (
                            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span>
                          )}
                          <div className="font-bold text-lg">{pkg.name}</div>
                          <div className="text-xs text-slate-500 mb-3">{pkg.target}</div>
                          <ul className="space-y-1.5 mb-4">
                            {pkg.features.map((f, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Sidebar / Form */}
              <div className="w-full md:w-1/3 bg-slate-50 p-6 flex flex-col justify-start">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm sticky top-0">
                  <h4 className="font-serif font-bold text-lg mb-1 block">Request Call Back</h4>
                  <p className="text-xs text-slate-500 mb-5 pb-4 border-b border-slate-100">Your employee data is safe with us.</p>

                  {isSuccess ? (
                    <div className="py-8 text-center bg-green-50 rounded-lg border border-green-100">
                      <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-3" />
                      <h5 className="font-bold text-green-800 text-lg mb-1">Request Sent!</h5>
                      <p className="text-sm text-green-600">We'll get back to you shortly.</p>
                      <Button onClick={() => setIsModalOpen(false)} className="mt-5 w-full bg-slate-100 text-slate-800 hover:bg-slate-200">Close</Button>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleQuoteSubmit}>
                      <input type="hidden" name="subject" value={`Service Request: ${selectedService.title}`} />
                      <div>
                        <label className="text-xs font-medium text-slate-700 mb-1 block">Full Name</label>
                        <input name="name" type="text" required className="w-full h-9 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-700 mb-1 block">Mobile Number</label>
                        <input name="phone" type="tel" required className="w-full h-9 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-700 mb-1 block">Email Address</label>
                        <input name="email" type="email" required className="w-full h-9 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-slate-700 mb-1 block">Company Size</label>
                        <select name="company_size" required className="w-full h-9 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white">
                          <option value="">Select...</option>
                          <option value="1-10">1-10 Employees</option>
                          <option value="11-50">11-50 Employees</option>
                          <option value="50+">50+ Employees</option>
                        </select>
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-gold hover:bg-gold/90 text-white mt-2">
                        {isSubmitting ? "Sending..." : "Get Quote"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
