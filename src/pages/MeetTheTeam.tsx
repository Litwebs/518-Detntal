import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const team = [
  {
    name: "Dr Lawiza",
    role: "Lead Dentist",
    short: "Graduated from the University of Manchester in 2013. Lawiza has a strong passion for cosmetic dentistry and is a certified Invisalign provider.",
    full: "Dr Lawiza graduated from the University of Manchester in 2013 with a Bachelor of Dental Surgery (BDS). She has a strong passion for cosmetic dentistry and enjoys helping patients achieve the smile they have always wanted. Lawiza is a certified Invisalign provider and has completed numerous courses in cosmetic bonding, teeth whitening, and facial aesthetics. She is committed to delivering high quality dental care in a gentle, caring manner and prides herself on putting nervous patients at ease. Outside of dentistry, Lawiza enjoys spending time with her family and travelling.",
  },
  {
    name: "Dr Sajid",
    role: "Lead Dentist",
    short: "Graduated from the University of Manchester in 2012. Sajid has a keen interest in oral surgery and implant dentistry.",
    full: "Dr Sajid graduated from the University of Manchester in 2012 with a Bachelor of Dental Surgery (BDS). He has a keen interest in oral surgery and implant dentistry, and has completed extensive postgraduate training in these areas. Sajid is passionate about providing comprehensive dental care and takes the time to explain treatment options thoroughly to his patients. He regularly attends courses and conferences to stay up to date with the latest advancements in dental techniques and technology. Outside of the practice, Sajid enjoys keeping fit and spending quality time with his family.",
  },
];

export default function MeetTheTeam() {
  const [selected, setSelected] = useState<typeof team[0] | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Meet The Team</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Get to know the people behind your smile.
          </p>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {team.map((member) => (
                <Card key={member.name} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => setSelected(member)}>
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                      <Users className="h-10 w-10 text-secondary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-secondary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6">{member.short}</p>
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 rounded-lg" onClick={(e) => { e.stopPropagation(); setSelected(member); }}>
                        Read Full Bio
                      </Button>
                      <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg">
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
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selected?.name}</DialogTitle>
            <DialogDescription className="text-secondary">{selected?.role}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">{selected?.full}</p>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg mt-2">
            <Link to="/contact" onClick={() => setSelected(null)}>Book an Appointment</Link>
          </Button>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
