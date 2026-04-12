import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const team = [
  {
    name: "Dr Lawiza Kiani",
    role: "Lead Dentist",
    gdc: "100922",
    image: doctor1,
    short:
      "Lawiza graduated from the University of Manchester in 2005 and has a keen interest in paediatric dentistry and caring for anxious patients.",
    full: "Lawiza graduated from the University of Manchester in 2005. Lawiza has a broad base of experience having spent many years in general practice and has a very keen interest in paediatric dentistry and the treatment of anxious patients. Lawiza makes it a priority to stay up to date with continuing education to ensure that her patients receive the best possible dental care. Lawiza's spare time is mostly spent chauffeuring her 2 young children to their various activities!",
  },
  {
    name: "Dr Sajid Malik",
    role: "Lead Dentist",
    gdc: "176706",
    image: doctor2,
    short:
      "Sajid graduated from the University of Liverpool in 2009 and has a strong interest in restorative and cosmetic dentistry.",
    full: "Sajid graduated from the University of Liverpool in 2009. In addition to his dental degree, Sajid also holds a BSc (Hons) in Biomedical Science and an MSc in Medical Health Promotion. Sajid makes it a priority to stay up to date with continuing education to ensure that his patients receive the best possible dental care. Sajid has a very keen interest in restorative and cosmetic dentistry and has recently completed further training in the latest composite bonding techniques from the Dental Excellence training academy in Liverpool. Sajid devotes most of his spare time to his beloved Liverpool football club.",
  },
  {
    name: "Dr Hassan Adnan",
    role: "Dentist",
    gdc: "277472",
    image: doctor3,
    short:
      "Hassan qualified from the University of Plymouth in 2018 and brings oral and maxillofacial surgery experience back into general practice.",
    full: "Hassan qualified from the University of Plymouth in 2018. After a year working as an SHO in Oral and Maxillofacial surgery treating complex head and neck cases, he returned to general practice. Hassan utilises his approachable sympathetic nature to create a comfortable environment within the surgery and in return delivers high quality dental care. Outside of work, Hassan enjoys spending time with his family and is a keen sportsman - enjoying playing and watching football and cricket!",
  },
  {
    name: "Dr Annum Sabir",
    role: "Dentist",
    gdc: "258862",
    image: doctor4,
    short:
      "Annum graduated from the University of Manchester in 2015 and has a keen interest in Endodontics and Invisalign treatment.",
    full: "Annum graduated from the University of Manchester in 2015. She has completed a Diploma at the prestigious Faculty of Dental Surgery and has a keen interest in Endodontics. Most recently, she completed the Advanced Endodontic Course at the University of Manchester, ensuring that her patients receive the highest possible standard of care. Annum also provides Invisalign for the cosmetic alignment of her patient's teeth. Outside of work, Annum enjoys running, painting and hiking.",
  },
];

export default function MeetTheTeam() {
  const [selected, setSelected] = useState<(typeof team)[0] | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Meet The Team
          </h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Get to know the people behind your smile.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-3xl border border-secondary/20 bg-warm-white p-8 text-center shadow-sm md:p-10">
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
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="pb-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelected(member)}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-secondary/20 bg-secondary/10 shadow-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-secondary">{member.role}</p>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      GDC No {member.gdc}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {member.short}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="border-secondary text-secondary hover:bg-secondary/10 rounded-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(member);
                        }}
                      >
                        Read Full Bio
                      </Button>
                      <Button
                        asChild
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
                      >
                        <Link to="/contact">Book an Appointment</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-secondary/20 bg-secondary/10 shadow-sm">
            <img
              src={selected?.image}
              alt={selected?.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selected?.name}
            </DialogTitle>
            <DialogDescription className="text-secondary">
              {selected?.role} • GDC No {selected?.gdc}
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {selected?.full}
          </p>
          <Button
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg mt-2"
          >
            <Link to="/contact" onClick={() => setSelected(null)}>
              Book an Appointment
            </Link>
          </Button>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
