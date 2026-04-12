import { Link } from "react-router-dom";
import {
  Phone,
  Calendar,
  Stethoscope,
  Users,
  Heart,
  Smile,
  ShieldCheck,
  GraduationCap,
  Home as HomeIcon,
  Clock,
  MapPin,
  Mail,
  ArrowRight,
  Sparkles,
  Search,
  Syringe,
  Crown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import heroImg from "@/assets/img1.JPG?url";
import doctor1 from "@/assets/doctor-2.png";
import doctor2 from "@/assets/doctor-1.png";
import doctor3 from "@/assets/doctor-3.png";
import doctor4 from "@/assets/doctor-4.png";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

const treatments = [
  { name: "Examination", icon: Search, desc: "Comprehensive dental check-ups" },
  {
    name: "Hygiene",
    icon: Sparkles,
    desc: "Professional cleaning & prevention",
  },
  {
    name: "Composite Fillings",
    icon: Smile,
    desc: "Tooth-coloured restorations",
  },
  { name: "Crowns & Bridges", icon: Crown, desc: "Restore damaged teeth" },
  { name: "Dentures", icon: Smile, desc: "Removable tooth replacements" },
  { name: "Root Canal", icon: Syringe, desc: "Save infected teeth" },
  {
    name: "Composite Bonding & Veneers",
    icon: Sparkles,
    desc: "Cosmetic smile enhancement",
  },
  { name: "Teeth Whitening", icon: Smile, desc: "Professional brightening" },
  { name: "Invisalign", icon: Smile, desc: "Clear aligner orthodontics" },
  { name: "Implants", icon: Syringe, desc: "Permanent tooth replacement" },
];

const whyChoose = [
  {
    title: "NHS & Private Treatments",
    desc: "Comprehensive care options for all patients",
    icon: ShieldCheck,
  },
  {
    title: "Continuing Professional Education",
    desc: "Always learning the latest techniques",
    icon: GraduationCap,
  },
  {
    title: "Caring Relaxed Environment",
    desc: "A warm, friendly atmosphere for every visit",
    icon: Heart,
  },
  {
    title: "Husband & Wife Led Practice",
    desc: "Personal, family-run dental care",
    icon: Users,
  },
];

const hours = [
  { day: "Monday", time: "9:00am – 5:30pm" },
  { day: "Tuesday", time: "9:00am – 5:30pm" },
  { day: "Wednesday", time: "9:00am – 8:00pm" },
  { day: "Thursday", time: "9:00am – 5:30pm" },
  { day: "Friday", time: "8:00am – 12:30pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

const teamPreview = [
  {
    name: "Dr Lawiza Kiani",
    role: "Lead Dentist",
    gdc: "100922",
    image: doctor1,
    bio: "Lawiza graduated from the University of Manchester in 2005 and has a keen interest in paediatric dentistry and caring for anxious patients.",
  },
  {
    name: "Dr Sajid Malik",
    role: "Lead Dentist",
    gdc: "176706",
    image: doctor2,
    bio: "Sajid graduated from the University of Liverpool in 2009 and has a strong interest in restorative and cosmetic dentistry.",
  },
  {
    name: "Dr Hassan Adnan",
    role: "Dentist",
    gdc: "277472",
    image: doctor3,
    bio: "Hassan qualified from the University of Plymouth in 2018 and brings oral and maxillofacial surgery experience back into general practice.",
  },
  {
    name: "Dr Annum Sabir",
    role: "Dentist",
    gdc: "258862",
    image: doctor4,
    bio: "Annum graduated from the University of Manchester in 2015 and has a keen interest in Endodontics and Invisalign treatment.",
  },
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.consent) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: "", phone: "", email: "", consent: false });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="518 Dental practice reception area"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up">
              Family Dental Care Delivered With a Smile
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-up-delay-1">
              Welcome to 518 Dental, a modern dental practice in Rochdale
              providing both NHS and private treatments in a caring, relaxed
              environment.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up-delay-2">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
              >
                <a href="tel:01706527127">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg border-background/80 bg-background/95 text-foreground shadow-lg backdrop-blur-sm hover:bg-background hover:text-foreground"
              >
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" /> Book / Enquire
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg border-secondary/70 bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 hover:text-secondary-foreground"
              >
                <Link to="/treatments">
                  <Stethoscope className="mr-2 h-4 w-4" /> View Treatments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <AnimatedSection>
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Experienced Team",
                  desc: "Led by husband and wife dentists with years of expertise",
                },
                {
                  icon: Heart,
                  title: "Patient-Focused Care",
                  desc: "Your comfort and wellbeing is our top priority",
                },
                {
                  icon: HomeIcon,
                  title: "Modern Practice",
                  desc: "State-of-the-art equipment in a welcoming environment",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-xl bg-secondary/10 p-3">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Treatments Preview */}
      <AnimatedSection>
        <section className="py-20 bg-warm-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Our Treatments"
              subtitle="Comprehensive dental care for the whole family"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {treatments.map((t) => (
                <Link key={t.name} to="/treatments">
                  <Card className="h-full border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <CardContent className="p-5 text-center">
                      <div className="mx-auto mb-3 rounded-xl bg-secondary/10 p-3 w-fit group-hover:bg-secondary/20 transition-colors">
                        <t.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-serif text-sm font-semibold mb-1">
                        {t.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link to="/treatments">
                  View All Treatments <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Why Choose 518 Dental"
              subtitle="Dedicated to providing exceptional dental care"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((item) => (
                <Card
                  key={item.title}
                  className="border border-secondary/20 shadow-none hover:shadow-lg hover:border-secondary/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 rounded-full bg-secondary/10 p-4 w-fit">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Preview */}
      <AnimatedSection>
        <section className="py-20 bg-warm-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Meet Our Team"
              subtitle="Husband and wife led practice committed to your dental health"
            />
            <div className="mx-auto mb-10 max-w-4xl rounded-3xl border border-secondary/20 bg-card p-8 text-center shadow-sm md:p-10">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                518 Dental is headed by husband and wife lead dentists, Lawiza
                and Sajid. We have an extremely dedicated and welcoming team,
                whose priority is to ensure that your visit is as enjoyable and
                comfortable as possible. Coming to the dentist is a daunting
                experience for most people and we pride ourselves in providing a
                caring and relaxed environment for the patient and their
                families.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto">
              {teamPreview.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8">
                    <div className="mb-5 mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-secondary/20 bg-secondary/10 shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-secondary text-center">
                      {member.role}
                    </p>
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground text-center">
                      GDC No {member.gdc}
                    </p>
                    <p className="text-sm text-muted-foreground text-center">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-lg border-secondary text-secondary hover:bg-secondary/10"
              >
                <Link to="/meet-the-team">
                  Meet The Team <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Opening Times + Map */}
      <AnimatedSection>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Find Us"
              subtitle="Conveniently located on Bury Road, Rochdale"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-secondary" /> Opening Hours
                    </h3>
                    <div className="space-y-2">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className="flex justify-between text-sm py-1 border-b border-border last:border-0"
                        >
                          <span className="font-medium">{h.day}</span>
                          <span className="text-muted-foreground">
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 space-y-2 text-sm">
                      <a
                        href="tel:01706527127"
                        className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                      >
                        <Phone className="h-4 w-4 text-secondary" /> 01706
                        527127
                      </a>
                      <a
                        href="mailto:admin@518dental.co.uk"
                        className="flex items-center gap-2 text-foreground hover:text-secondary transition-colors"
                      >
                        <Mail className="h-4 w-4 text-secondary" />{" "}
                        admin@518dental.co.uk
                      </a>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                        518A Bury Road, Rochdale, OL11 4DQ
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md min-h-[350px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d-2.1677!3d53.6078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb9a57a2b1d1f%3A0x518dental!2s518A+Bury+Rd%2C+Rochdale+OL11+4DQ!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="518 Dental Location"
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <Button
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
              >
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=518A+Bury+Road+Rochdale+OL11+4DQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" /> Get Directions
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Ready to Book Your Appointment?
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            We'd love to hear from you. Get in touch today to schedule your
            visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
            >
              <a href="tel:01706527127">
                <Phone className="mr-2 h-4 w-4" /> Call 01706 527127
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" /> Enquire Online
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <AnimatedSection>
        <section className="py-20 bg-warm-white">
          <div className="container mx-auto px-4 max-w-lg">
            <SectionHeading
              title="Get In Touch"
              subtitle="Send us a quick message and we'll get back to you"
            />
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) =>
                        setFormData({ ...formData, consent: e.target.checked })
                      }
                      className="mt-1"
                      required
                    />
                    <Label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I consent to 518 Dental storing my data to respond to my
                      enquiry.
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}
