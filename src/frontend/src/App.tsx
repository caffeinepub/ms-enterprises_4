import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  Activity,
  BadgeCheck,
  ChevronRight,
  FlaskConical,
  Globe,
  HeartPulse,
  IndianRupee,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Package,
  Phone,
  Shield,
  Syringe,
  TestTube2,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitInquiry } from "./hooks/useQueries";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "IVD Kits", href: "#products" },
  { label: "Medical Devices", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
];

const IVD_PRODUCTS = [
  {
    img: "/assets/generated/product-vacutainer.dim_400x300.jpg",
    title: "Blood Collection Tubes",
    desc: "Vacutainer-style tubes for safe and efficient blood specimen collection in clinical labs.",
    Icon: TestTube2,
  },
  {
    img: "/assets/generated/product-rapid-test-kits.dim_400x300.jpg",
    title: "Rapid Test Kits",
    desc: "Fast and accurate diagnostic kits for point-of-care testing in clinics and hospitals.",
    Icon: FlaskConical,
  },
  {
    img: "/assets/generated/product-reagents.dim_400x300.jpg",
    title: "Diagnostic Reagents",
    desc: "High-quality reagents and lab consumables ensuring precise laboratory test results.",
    Icon: Microscope,
  },
];

const DEVICE_PRODUCTS = [
  {
    img: "/assets/generated/product-syringes.dim_400x300.jpg",
    title: "Disposable Syringes",
    desc: "Sterile single-use syringes in multiple capacities for safe medication administration.",
    Icon: Syringe,
  },
  {
    img: "/assets/generated/product-medical-devices.dim_400x300.jpg",
    title: "Monitoring Devices",
    desc: "BP monitors, pulse oximeters, thermometers and nebulizers for patient care settings.",
    Icon: Activity,
  },
  {
    img: "/assets/generated/product-gloves.dim_400x300.jpg",
    title: "Medical Gloves",
    desc: "Nitrile and latex examination gloves offering protection and comfort for healthcare workers.",
    Icon: Package,
  },
];

const WHY_CHOOSE = [
  {
    Icon: BadgeCheck,
    label: "High Quality Products",
    desc: "ISO-compliant and certified products from trusted manufacturers.",
  },
  {
    Icon: IndianRupee,
    label: "Competitive Pricing",
    desc: "Best-in-market pricing for bulk and regular orders across India.",
  },
  {
    Icon: Shield,
    label: "Reliable Supply",
    desc: "Consistent availability with no supply gaps for critical medical items.",
  },
  {
    Icon: Truck,
    label: "Fast Delivery",
    desc: "Safe packaging and timely dispatch to your doorstep, Pan India.",
  },
  {
    Icon: Globe,
    label: "Pan India Service",
    desc: "Serving hospitals, labs and clinics across all states and UTs.",
  },
  {
    Icon: HeartPulse,
    label: "Trusted by Hospitals & Labs",
    desc: "Preferred partner of diagnostic labs and healthcare professionals.",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow bg-white ${scrolled ? "shadow-md" : "shadow-sm border-b border-border"}`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          data-ocid="nav.link"
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-lg leading-tight text-foreground tracking-tight">
              MS Enterprises
            </span>
            <p className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
              Medical Devices &amp; IVD Kits
            </p>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Button
            onClick={() => scrollTo("contact")}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-5"
            data-ocid="nav.primary_button"
          >
            Request a Quote
          </Button>
        </div>
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 px-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  scrollTo("contact");
                }}
                size="sm"
                className="mt-2 bg-primary text-white"
                data-ocid="nav.primary_button"
              >
                Request a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-ms-enterprises.dim_1600x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.18 0.07 225 / 0.92) 0%, oklch(0.22 0.07 225 / 0.80) 50%, oklch(0.28 0.06 225 / 0.55) 100%)",
        }}
      />
      <div className="relative container mx-auto px-4 lg:px-8 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <HeartPulse className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              Established 2022 · Delhi, India
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Trusted Supplier of
            <br />
            <span className="text-sky-200">Medical Devices</span> &amp;
            <br />
            IVD Kits Across India
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-lg leading-relaxed">
            Providing high-quality medical devices and In Vitro Diagnostic kits
            to hospitals, diagnostic labs, and clinics across India.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => scrollTo("contact")}
              size="lg"
              className="bg-white text-primary font-bold hover:bg-white/90 px-7"
              data-ocid="hero.primary_button"
            >
              Contact Sales <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              onClick={() => scrollTo("products")}
              variant="outline"
              size="lg"
              className="border-white text-white font-semibold px-7"
              style={{ background: "rgba(255,255,255,0.10)" }}
              data-ocid="hero.secondary_button"
            >
              Explore Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 mb-4">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-5 leading-tight">
              Delhi&apos;s Trusted Medical Supply Partner
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              MS Enterprises is a Delhi-based supplier of medical devices and In
              Vitro Diagnostic (IVD) kits, established in 2022. We provide
              high-quality products to hospitals, diagnostic labs, clinics, and
              healthcare professionals across India.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our focus is on delivering reliable products, competitive pricing,
              and timely service. We support accurate medical testing and
              patient care with consistent quality and dependable supply.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Established", value: "2022" },
                { label: "Products", value: "100+" },
                { label: "Cities Served", value: "Pan India" },
                { label: "Experience", value: "7+ Years" },
              ].map((stat) => (
                <div key={stat.label} className="bg-secondary rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                Icon: FlaskConical,
                title: "IVD Kits",
                desc: "Blood collection tubes, rapid test kits & reagents",
              },
              {
                Icon: Syringe,
                title: "Medical Devices",
                desc: "Syringes, monitors, nebulizers & more",
              },
              {
                Icon: Package,
                title: "Lab Consumables",
                desc: "Complete range of consumables for diagnostic labs",
              },
              {
                Icon: Truck,
                title: "Pan India Delivery",
                desc: "Safe packaging and timely delivery nationwide",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-secondary rounded-xl p-5 shadow-card"
              >
                <item.Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-sm text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  img,
  title,
  desc,
  Icon,
  index,
}: {
  img: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-card border border-border hover:shadow-lg transition-shadow group"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Icon className="w-4 h-4 text-primary" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {desc}
        </p>
        <button
          type="button"
          className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
        >
          Learn More <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xs">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Complete Medical Supply Catalog
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive range of IVD test kits and medical devices for
            hospitals, labs, and clinics.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                IVD Test Kits
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              {IVD_PRODUCTS.map((p, i) => (
                <ProductCard
                  key={p.title}
                  img={p.img}
                  title={p.title}
                  desc={p.desc}
                  Icon={p.Icon}
                  index={i}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Medical Devices
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              {DEVICE_PRODUCTS.map((p, i) => (
                <ProductCard
                  key={p.title}
                  img={p.img}
                  title={p.title}
                  desc={p.desc}
                  Icon={p.Icon}
                  index={i + 3}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={() => scrollTo("contact")}
            size="lg"
            className="bg-primary text-white font-bold hover:bg-primary/90 px-8"
            data-ocid="products.primary_button"
          >
            Request Bulk Order Quote <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-1.5 mb-4">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            What Sets Us Apart
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            MS Enterprises is committed to delivering quality, reliability, and
            value to every healthcare partner.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-sm text-foreground mb-2">
                {item.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReachSection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-3">
              Pan India Supply Network
            </h2>
            <p className="text-white/80 leading-relaxed">
              We supply medical devices and IVD kits across all states and union
              territories of India. With safe packaging and timely delivery, we
              ensure your healthcare facility never runs short. Bulk orders are
              accepted nationwide.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex items-center gap-2 text-white/90">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Serving All India</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Bulk Orders Welcome</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">Safe Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-10 items-start"
        >
          <div className="flex flex-col items-center lg:items-start pt-2">
            <h3 className="text-white font-bold text-xl">Rohit Kumar</h3>
            <p className="text-sky-200 text-sm mt-1">Founder, MS Enterprises</p>
            <p className="text-white/60 text-xs mt-1">
              M.Sc Microbiology · 7+ Years
            </p>
          </div>
          <div className="lg:col-span-2">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(255,255,255,0.10)" }}
            >
              <span className="text-sky-200 text-xs font-bold uppercase tracking-wider">
                Founder&apos;s Message
              </span>
            </div>
            <blockquote className="text-white/90 text-lg leading-relaxed mb-4 italic">
              &ldquo;With the vision to provide reliable and high-quality
              medical products, I established MS Enterprises in Delhi in 2022
              and have been actively serving the healthcare industry since then.
              Our goal is to support hospitals, diagnostic labs, and clinics
              with trusted medical devices and IVD kits, ensuring quality,
              consistency, and timely delivery across India.
            </blockquote>
            <p className="text-white/80 leading-relaxed mb-6">
              We are committed to building long-term relationships through
              professionalism, transparency, and customer satisfaction. Thank
              you for your trust.&rdquo;
            </p>
            <div
              className="border-t pt-4"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <p className="text-white font-bold">— Rohit Kumar</p>
              <p className="text-sky-200 text-sm">
                Founder &amp; Director, MS Enterprises
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { mutate: submitInquiry, isPending, isSuccess } = useSubmitInquiry();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    submitInquiry(form, {
      onSuccess: () => {
        toast.success(
          "Your inquiry has been submitted! We'll contact you shortly.",
        );
        setForm({ name: "", phone: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to submit. Please try again or call us directly.");
      },
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-4 shadow-xs">
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Contact us today for best price and bulk orders. Pan India delivery
            available.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-7 shadow-card">
            <h3 className="font-bold text-foreground text-lg mb-5">
              Send an Inquiry
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              data-ocid="contact.panel"
            >
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm font-semibold mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  data-ocid="contact.input"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-sm font-semibold mb-1.5 block"
                >
                  Phone / WhatsApp *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  type="tel"
                  data-ocid="contact.input"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-sm font-semibold mb-1.5 block"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  type="email"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-semibold mb-1.5 block"
                >
                  Message / Requirements *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your product requirements or bulk order needs..."
                  rows={4}
                  data-ocid="contact.textarea"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={isPending || isSuccess}
                className="bg-primary text-white font-bold w-full"
                data-ocid="contact.submit_button"
              >
                {isPending
                  ? "Sending..."
                  : isSuccess
                    ? "Inquiry Sent!"
                    : "Send Inquiry"}
              </Button>
            </form>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-card">
            <h3 className="font-bold text-foreground text-lg mb-5">
              Contact Details
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    Office Address
                  </p>
                  <p className="text-sm text-foreground">
                    A/8, Ground Floor, Jaitpur, Badarpur,
                    <br />
                    New Delhi – 110044
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    Factory Address
                  </p>
                  <p className="text-sm text-foreground">
                    D-87, Hanuman Mandir Gali, Mehrauli,
                    <br />
                    New Delhi – 110030
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+919354838543"
                    className="text-sm text-primary font-semibold hover:underline"
                  >
                    +91 93548 38543
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:msenterprisesdelhi27@gmail.com"
                    className="text-sm text-primary font-semibold hover:underline break-all"
                  >
                    msenterprisesdelhi27@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                Business Hours
              </p>
              <p className="text-sm text-foreground">
                Monday – Saturday: 9:00 AM – 7:00 PM
              </p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-card min-h-80">
            <iframe
              title="MS Enterprises Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3456!2d77.297!3d28.509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c4b4e5f1b5%3A0x7f1c6b4f3a7d9e2!2sJaitpur%2C%20Badarpur%2C%20New%20Delhi%2C%20Delhi%20110044!5e0!3m2!1sen!2sin!4v1679999999999"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 350 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.10)" }}
              >
                <HeartPulse className="w-5 h-5 text-sky-200" />
              </div>
              <span className="font-bold text-lg">MS Enterprises</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Trusted supplier of medical devices and IVD kits across India
              since 2022.
            </p>
            <p className="text-white/50 text-xs">
              A/8, Ground Floor, Jaitpur, Badarpur, New Delhi – 110044
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Home",
                "About Us",
                "Products",
                "Why Choose Us",
                "Contact Us",
              ].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Blood Collection Tubes",
                "Rapid Test Kits",
                "Diagnostic Reagents",
                "Disposable Syringes",
                "Medical Gloves",
                "Monitoring Devices",
              ].map((p) => (
                <li key={p}>
                  <span className="text-white/60 text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-4">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919354838543"
                  className="text-white/70 text-sm hover:text-white"
                >
                  +91 93548 38543
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:msenterprisesdelhi27@gmail.com"
                  className="text-white/70 text-sm hover:text-white break-all"
                >
                  msenterprisesdelhi27@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-sky-300 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-5 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: "rgba(255,255,255,0.10)" }}
        >
          <p className="text-white/40 text-xs">
            © {year} MS Enterprises. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919354838543"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
      data-ocid="whatsapp.button"
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="w-7 h-7"
        role="img"
        aria-label="WhatsApp"
      >
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <ReachSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
