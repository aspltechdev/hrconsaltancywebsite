import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Plus } from "lucide-react";
import { useState } from "react";

const messageTemplates = [
  "Payroll Management",
  "Compliance Filing",
  "Recruitment Services",
  "Startup Registration",
  "GST & Tax",
  "Trademark & IP",
  "General Enquiry"
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!validateForm(formData)) {
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mojnbjnv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        form.reset();
        setMessage("");
        setErrors({});
      } else {
        const data = await response.json();
        if ('errors' in data) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact" className="py-12 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 md:px-10 py-2.5 rounded-full bg-gold/10 text-gold font-black uppercase tracking-widest text-lg md:text-xl mb-4">Contact Us</span>
          {/* <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mt-3 mb-4">
            Get In Touch
          </h2> */}
          <p className="text-muted-foreground">
            Ready to transform your HR operations? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 8431094143", href: "tel:+91 8431094143" },
              { icon: Mail, label: "Email", value: "info@talenthrconsultancy.com", href: "mailto:info@talenthrconsultancy.com" },
              { icon: MapPin, label: "Address", value: "Shop No 2 Nagamuneshwara Layout Parappana Agrahara, post, Hosa Road, Electronic City, Bengaluru, Karnataka 560100", href: "#" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/15 transition-colors">
                  <item.icon size={20} className="text-primary group-hover:text-gold transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm ${errors.name ? 'border-red-500' : 'border-border'}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm ${errors.email ? 'border-red-500' : 'border-border'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 text-left">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
              />
            </div>
            <div className="space-y-4">
              <div>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1 text-left">{errors.message}</p>}
              </div>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-700 block uppercase tracking-wider">Quick Select Topic</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {messageTemplates.map((template) => (
                    <button
                      key={template}
                      type="button"
                      onClick={() => {
                        setMessage(prev => prev ? `${prev}\n- I am interested in ${template}.` : `- I am interested in ${template}.`);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-gold hover:text-white transition-colors text-xs font-semibold border border-slate-200 hover:border-gold"
                    >
                      {template} <Plus size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-gold text-secondary-foreground px-7 py-3 rounded-lg font-semibold hover:brightness-110 transition-all shadow-gold"
            >
              {submitted ? "Message Sent!" : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
