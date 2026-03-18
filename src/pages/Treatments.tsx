import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const treatments = [
  {
    name: "Examination",
    desc: "A thorough examination of your teeth, gums and mouth. We use digital x-rays to identify any problems early. Our examination also includes an oral cancer screening. We recommend attending for a dental examination at least once every 12 months.",
  },
  {
    name: "Hygiene",
    desc: "Professional cleaning to remove plaque and tartar build-up that cannot be removed by brushing alone. Our hygienist will provide tailored advice on maintaining good oral hygiene at home, including brushing techniques, interdental cleaning and diet advice.",
  },
  {
    name: "Composite Fillings",
    desc: "Tooth-coloured composite resin fillings that blend seamlessly with your natural teeth. These modern fillings are an excellent alternative to traditional silver amalgam fillings and provide a natural-looking, durable restoration.",
  },
  {
    name: "Crowns & Bridges",
    desc: "Crowns are custom-made caps that cover and protect damaged or weakened teeth, restoring their shape, strength and appearance. Bridges are used to replace one or more missing teeth by anchoring to the adjacent natural teeth.",
  },
  {
    name: "Dentures",
    desc: "Removable replacements for missing teeth. We offer both full and partial dentures, including Valplast flexible dentures for improved comfort and aesthetics. Our dentures are custom-made to fit precisely and look natural.",
  },
  {
    name: "Root Canal Treatment",
    desc: "Root canal treatment is needed when the nerve inside your tooth becomes infected. The procedure involves removing the infected tissue, cleaning and shaping the root canals, then sealing them to prevent further infection. This treatment can save a tooth that might otherwise need to be extracted.",
  },
  {
    name: "Composite Bonding & Veneers",
    desc: "Composite bonding involves applying tooth-coloured resin to reshape, repair or improve the appearance of your teeth. Veneers are thin shells that cover the front surface of teeth to improve their colour, shape or alignment. Both treatments can dramatically transform your smile.",
  },
  {
    name: "Teeth Whitening",
    desc: "Professional teeth whitening to brighten and enhance your smile. We offer both in-practice and home whitening options using Boutique Whitening. Our whitening treatments are safe, effective and can lighten your teeth by several shades.",
  },
  {
    name: "Invisalign",
    desc: "Invisalign uses a series of custom-made, virtually invisible clear aligners to gradually straighten your teeth. The aligners are removable, comfortable and virtually undetectable. Invisalign can treat a wide range of orthodontic issues including crowding, spacing and bite problems.",
  },
  {
    name: "Implants",
    desc: "Dental implants are the gold standard for replacing missing teeth. A titanium post is placed into the jawbone to act as an artificial root, onto which a crown, bridge or denture is attached. Implants look, feel and function like natural teeth and can last a lifetime with proper care.",
  },
];

export default function Treatments() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Treatments</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Comprehensive dental care for the whole family.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <AnimatedSection>
                <Accordion type="single" collapsible className="space-y-4">
                  {treatments.map((t) => (
                    <AccordionItem key={t.name} value={t.name} className="border border-border rounded-lg px-6 overflow-hidden">
                      <AccordionTrigger className="font-serif text-lg font-semibold hover:no-underline hover:text-secondary">
                        {t.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed pb-2">{t.desc}</p>
                        <Button asChild size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg mt-2">
                          <Link to="/contact">Enquire About This Treatment</Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>

            {/* Sticky sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <Card className="border-secondary/20 shadow-md">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-secondary mx-auto mb-4" />
                    <h3 className="font-serif text-lg font-semibold mb-2">Interested in a treatment?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Get in touch to discuss your options.</p>
                    <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg">
                      <Link to="/contact">Book / Enquire</Link>
                    </Button>
                    <div className="mt-4">
                      <a href="tel:01706527127" className="text-sm text-secondary hover:underline">
                        Or call 01706 527127
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-16 left-0 right-0 z-40 p-3 lg:hidden">
        <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg shadow-lg">
          <Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Enquire About Treatment</Link>
        </Button>
      </div>
    </Layout>
  );
}
