import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import logoUrl from "@/assets/logocrop.jpeg";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navLinks: NavItem[] = [
  {
    label: "Compliance",
    href: "#services",
    children: [
      { label: "HR & Payroll", href: "#services" },
      { label: "PF Return Filing", href: "#services" },
      { label: "ESI Return Filing", href: "#services" },
      { label: "Professional Tax Return Filing", href: "#services" },
      { label: "Business Plan", href: "#services" },
      { label: "FSSAI Renewal", href: "#services" },
      { label: "FSSAI Return Filing", href: "#services" },
      { label: "Partnership Compliance", href: "#services" },
      { label: "Proprietorship Compliance", href: "#services" },
    ],
  },
  {
    label: "Registration",
    href: "#services",
    children: [
      { label: "Startup India", href: "#services" },
      { label: "Trade License", href: "#services" },
      { label: "FSSAI Registration", href: "#services" },
      { label: "FSSAI License", href: "#services" },
      { label: "ICEGATE Registration", href: "#services" },
      { label: "Import Export Code", href: "#services" },
      { label: "ISO Registration", href: "#services" },
      { label: "PF Registration", href: "#services" },
      { label: "ESI Registration", href: "#services" },
      { label: "Professional Tax Registration", href: "#services" },
      { label: "12A and 80G Registration", href: "#services" },
      { label: "12A Registration", href: "#services" },
      { label: "80G Registration", href: "#services" },
      { label: "Barcode Registration", href: "#services" },
      { label: "Digital Signature", href: "#services" },
      { label: "Shop Act Registration", href: "#services" },
      { label: "Drug License", href: "#services" },
      { label: "Udyam Registration", href: "#services" },
      { label: "Fire License", href: "#services" },
      { label: "Factory License", href: "#services" },
      { label: "BOCW License", href: "#services" },
      { label: "PSARA License", href: "#services" },
      { label: "CLRA License", href: "#services" },
    ],
  },
  {
    label: "Start up",
    href: "#services",
    children: [
      { label: "Proprietorship", href: "#services" },
      { label: "Partnership", href: "#services" },
      { label: "One Person Company", href: "#services" },
      { label: "Limited Liability Partnership", href: "#services" },
      { label: "Private Limited Company", href: "#services" },
      { label: "Section 8 Company", href: "#services" },
      { label: "Trust Registration", href: "#services" },
      { label: "Public Limited Company", href: "#services" },
      { label: "Producer Company", href: "#services" },
      { label: "Indian Subsidiary", href: "#services" },
    ],
  },
  {
    label: "GST",
    href: "#services",
    children: [
      { label: "GST Registration", href: "#services" },
      { label: "GST Return Filing by Accountant", href: "#services" },
      { label: "GST NIL Return Filing", href: "#services" },
      { label: "GST LUT Form", href: "#services" },
      { label: "GST Notice", href: "#services" },
      { label: "GST Annual Return Filing (GSTR-9)", href: "#services" },
      { label: "GST Registration for Foreigners", href: "#services" },
      { label: "GST Amendment", href: "#services" },
      { label: "GST Revocation", href: "#services" },
      { label: "GSTR-10", href: "#services" },
      { label: "Virtual Office + GSTIN", href: "#services" },
      { label: "CA Support", href: "#services" },
      { label: "Bookkeeping", href: "#services" },
    ],
  },
  {
    label: "Income Tax",
    href: "#services",
    children: [
      { label: "Income Tax E-Filing", href: "#services" },
      { label: "Business Tax Filing", href: "#services" },
      { label: "Partnership Firm / LLP ITR", href: "#services" },
      { label: "Company ITR Filing", href: "#services" },
      { label: "Trust / NGO Tax Filing", href: "#services" },
      { label: "15CA - 15CB Filing", href: "#services" },
      { label: "TAN Registration", href: "#services" },
      { label: "TDS Return Filing", href: "#services" },
      { label: "Income Tax Notice", href: "#services" },
      { label: "CA Support", href: "#services" },
      { label: "Bookkeeping", href: "#services" },
    ],
  },
  {
    label: "MCA & Compliance",
    href: "#services",
    children: [
      { label: "Company Compliance", href: "#services" },
      { label: "LLP Compliance", href: "#services" },
      { label: "OPC Compliance", href: "#services" },
      { label: "Name Change - Company", href: "#services" },
      { label: "Registered Office Change", href: "#services" },
      { label: "DIN eKYC Filing", href: "#services" },
      { label: "DIN Reactivation", href: "#services" },
      { label: "Director Change", href: "#services" },
      { label: "Remove Director", href: "#services" },
      { label: "ADT-1 Filing", href: "#services" },
      { label: "DPT-3 Filing", href: "#services" },
      { label: "LLP Form 11 Filing", href: "#services" },
      { label: "Dormant Status Filing", href: "#services" },
      { label: "MOA Amendment", href: "#services" },
      { label: "AOA Amendment", href: "#services" },
      { label: "Authorized Capital Increase", href: "#services" },
      { label: "Share Transfer", href: "#services" },
      { label: "Demat of Shares", href: "#services" },
      { label: "Winding Up - LLP", href: "#services" },
      { label: "Winding Up - Company", href: "#services" },
      { label: "Commencement (INC-20A)", href: "#services" },
    ],
  },
  {
    label: "Trademark",
    href: "#services",
    children: [
      { label: "Trademark Registration", href: "#services" },
      { label: "Trademark Objection", href: "#services" },
      { label: "Trademark Certificate", href: "#services" },
      { label: "Trademark Opposition", href: "#services" },
      { label: "Trademark Hearing", href: "#services" },
      { label: "Trademark Rectification", href: "#services" },
      { label: "TM Infringement Notice", href: "#services" },
      { label: "Trademark Renewal", href: "#services" },
      { label: "Trademark Transfer", href: "#services" },
      { label: "Expedited TM Registration", href: "#services" },
      { label: "Logo Designing", href: "#services" },
      { label: "Design Registration", href: "#services" },
      { label: "Design Objection", href: "#services" },
      { label: "Copyright Registration", href: "#services" },
      { label: "Copyright Objection", href: "#services" },
      { label: "Patent Registration", href: "#services" },
      { label: "Trademark Protection", href: "#services" },
    ],
  },
];

const DropdownMenu = ({
  items,
  isOpen,
  align = "left",
}: {
  items: { label: string; href: string }[];
  isOpen: boolean;
  align?: "left" | "right" | "center";
}) => {
  const cols = items.length > 25 ? 3 : items.length > 10 ? 2 : 1;
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
          className={`absolute top-full ${align === "center"
            ? "left-1/2 -translate-x-1/2"
            : align === "right"
              ? "right-0"
              : "left-0"
            } mt-0 bg-white border-t-[3px] border-t-gold shadow-xl z-50 py-4 px-2`}
          style={{ minWidth: cols === 3 ? "660px" : cols === 2 ? "440px" : "220px" }}
        >
          <ul
            className="grid gap-x-6 gap-y-0"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-1.5 text-sm font-bold text-left text-foreground hover:text-gold transition-colors whitespace-nowrap"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('openServiceModal', { detail: item.label }));
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === text.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      // Pause before typing again
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block ml-[2px] font-normal"
      >|</motion.span>
    </span>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm"
      ref={navRef}
    >
      <div className="container mx-auto flex items-center w-full px-4 sm:px-6 py-0">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 sm:gap-2 py-1 outline-none focus:outline-none shrink-0 overflow-hidden">
          <img src={logoUrl} alt="Talent HR" className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain shrink-0" />
          <div className="flex items-center gap-1 sm:gap-2 min-w-0">
            <div className="flex flex-col justify-center leading-tight truncate">
              <span className="font-extrabold text-[14px] sm:text-[18px] lg:text-[22px] xl:text-[26px] tracking-tight text-blue-900 truncate">
                TALENT
              </span>
              <span className="font-extrabold text-[9px] sm:text-[11px] lg:text-[13px] xl:text-[15px] tracking-widest text-slate-700 mt-[1px] truncate">
                HR CONSULTANCY
              </span>
            </div>
            <div className="block h-6 lg:h-8 w-[1px] sm:w-[1.5px] lg:w-[2px] bg-slate-900 mx-1 sm:mx-1.5 lg:mx-2.5"></div>
            <div className="flex items-center gap-1 lg:gap-2 text-slate-900 w-[140px] sm:w-[170px] lg:w-[200px] xl:w-[230px] ml-1 sm:ml-2">
              <span className="font-bold text-[9px] sm:text-[11px] lg:text-[13px] xl:text-[15px] whitespace-nowrap text-blue-900">
                <TypewriterText text="End to End Payroll Services" />
              </span>
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0 ml-auto">
          {navLinks.map((link, index) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-0.5 px-2 py-4 text-xs xl:text-sm font-bold text-foreground hover:text-gold transition-colors"
              >
                {link.label}
                {link.children && <ChevronDown size={12} className="mt-0.5 text-muted-foreground" />}
              </a>
              {link.children && (
                <DropdownMenu
                  items={link.children}
                  isOpen={openDropdown === link.label}
                  align={index >= navLinks.length - 4 ? "right" : "left"}
                />
              )}
            </li>
          ))}
        </ul>



        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 shrink-0 ml-auto mr-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => (
                <li key={link.label} className="border-b border-border/50 last:border-0">
                  {link.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(mobileDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full px-6 py-3.5 text-sm font-bold text-foreground hover:text-gold transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${mobileDropdown === link.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === link.label && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-muted overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <a
                                  href={child.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setMobileOpen(false);
                                    window.dispatchEvent(new CustomEvent('openServiceModal', { detail: child.label }));
                                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }}
                                  className="block px-10 py-2.5 text-sm font-bold text-muted-foreground hover:text-gold transition-colors"
                                >
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-6 py-3.5 text-sm font-bold text-foreground hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
