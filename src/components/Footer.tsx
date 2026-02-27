import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-gradient text-primary-foreground">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-primary-foreground transition-colors">
              <span className="text-gold">Talent HR Consultancy</span>
            </a>
            <p className="text-primary-foreground text-sm mt-4 leading-relaxed hover:text-gold transition-colors cursor-default">
              A trusted consulting firm in India delivering strategic insight, operational excellence,
              and sustainable business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3 text-gold text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              {["Home", "About", "Services", "Why Us", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-primary-foreground hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-3 text-gold text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground">
              {[
                "Compliance",
                "Registration",
                "Start up",
                "GST",
                "Income Tax",
                "MCA & Compliance",
                "Trademark",
              ].map((service) => (
                <li
                  key={service}
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("openServiceModal", { detail: service }));
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 text-gold text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-primary-foreground group">
                <div className="bg-gold/10 p-2 rounded-lg shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={18} className="text-gold" />
                </div>
                <a href="tel:+919008557998" className="hover:text-gold transition-colors">+91 8431094143</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground group">
                <div className="bg-gold/10 p-2 rounded-lg shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={18} className="text-gold" />
                </div>
                <a href="mailto:info@talenthr.com" className="hover:text-gold transition-colors">info@talenthr.com</a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground group">
                <div className="bg-gold/10 p-2 rounded-lg shrink-0 mt-0.5 group-hover:bg-gold/20 transition-colors">
                  <MapPin size={18} className="text-gold" />
                </div>
                <span className="leading-relaxed hover:text-gold transition-colors cursor-pointer">
                  Shop No 2 Nagamuneshwara Layout Parappana Agrahara, post, Hosa Road, Electronic City, Bengaluru, Karnataka 560100
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground hover:text-gold transition-colors cursor-default">
          © {new Date().getFullYear()} Talent HR Consultancy. All rights reserved by Aspltech.in
        </div>
      </div>
    </footer>
  );
};

export default Footer;
