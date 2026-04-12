import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertTriangle,
  Accessibility,
} from "lucide-react";

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

const hours = [
  { day: "Monday", time: "9:00am – 5:30pm" },
  { day: "Tuesday", time: "9:00am – 5:30pm" },
  { day: "Wednesday", time: "9:00am – 8:00pm" },
  { day: "Thursday", time: "9:00am – 5:30pm" },
  { day: "Friday", time: "8:00am – 12:30pm" },
  { day: "Saturday", time: "Closed" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
    consent: false,
  });

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            We'd love to hear from you. Get in touch today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-serif text-xl font-semibold">
                      Practice Details
                    </h3>
                    <a
                      href="tel:01706527127"
                      className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-secondary" /> 01706 527127
                    </a>
                    <a
                      href="mailto:admin@518dental.co.uk"
                      className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors"
                    >
                      <Mail className="h-5 w-5 text-secondary" />{" "}
                      admin@518dental.co.uk
                    </a>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                      <span>518A Bury Road, Rochdale, OL11 4DQ</span>
                    </div>
                  </CardContent>
                </Card>

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
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          Dental Emergency
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          If you are experiencing a dental emergency during
                          practice hours, please call 01706 527127 immediately.
                          Outside of hours, please call NHS 111 for advice.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Accessibility className="h-5 w-5 text-secondary mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          Disabled Access
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Our practice has ground floor access suitable for
                          wheelchair users and those with limited mobility.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Form + Map */}
            <AnimatedSection>
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-4">
                      Send Us a Message
                    </h3>
                    <form
                      action="https://formsubmit.co/admin@518dental.co.uk"
                      method="POST"
                      className="space-y-4"
                    >
                      <input
                        type="hidden"
                        name="_subject"
                        value="518 Dental Contact Form Submission"
                      />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      <div>
                        <Label>Name *</Label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Email *</Label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label>Treatment Interested In</Label>
                        <select
                          name="treatment"
                          value={formData.treatment}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              treatment: e.target.value,
                            })
                          }
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        >
                          <option value="">Select a treatment...</option>
                          <option>Examination</option>
                          <option>Hygiene</option>
                          <option>Composite Fillings</option>
                          <option>Crowns & Bridges</option>
                          <option>Dentures</option>
                          <option>Root Canal</option>
                          <option>Composite Bonding & Veneers</option>
                          <option>Teeth Whitening</option>
                          <option>Invisalign</option>
                          <option>Implants</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <Label>Message *</Label>
                        <Textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          name="consent"
                          value="I consent to 518 Dental storing my data to respond to my enquiry."
                          checked={formData.consent}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              consent: e.target.checked,
                            })
                          }
                          className="mt-1"
                          required
                        />
                        <Label className="text-sm text-muted-foreground leading-relaxed">
                          I consent to 518 Dental storing my data to respond to
                          my enquiry.
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

                <div className="rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.5!2d-2.1677!3d53.6078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb9a57a2b1d1f%3A0x518dental!2s518A+Bury+Rd%2C+Rochdale+OL11+4DQ!5e0!3m2!1sen!2suk!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="518 Dental Location"
                  />
                </div>
                <Button
                  asChild
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
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
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
