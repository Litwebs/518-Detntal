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
import { team, type TeamMember } from "@/data/team";

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

export default function MeetTheTeam() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

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
                Dr Lawiza Kiani and Dr Sajid Malik are the proud owners and
                principal dentists at 518 Dental. Together, they have built a
                team that shares their values of professionalism, kindness and
                excellence. Their vision is a modern, patient-focused practice
                where people of all ages feel valued, listened to and confident
                in their treatment.
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
                    <div className="mb-6 mx-auto flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-secondary/20 bg-secondary/10 shadow-sm">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                      ) : (
                        <span className="font-serif text-4xl text-secondary" aria-hidden="true">
                          {member.name.replace("Dr ", "").split(" ").map((name) => name[0]).join("")}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-secondary">{member.role}</p>
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {member.gdc ? `GDC No ${member.gdc}` : "Dental Surgeon"}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {member.short}
                    </p>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="rounded-lg border-secondary text-secondary hover:bg-secondary/10 hover:!text-primary"
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
          <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-secondary/20 bg-secondary/10 shadow-sm">
            {selected?.image ? (
              <img src={selected.image} alt={selected.name} className="h-full w-full object-cover object-top" />
            ) : (
              <span className="font-serif text-5xl text-secondary" aria-hidden="true">
                {selected?.name.replace("Dr ", "").split(" ").map((name) => name[0]).join("")}
              </span>
            )}
          </div>
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selected?.name}
            </DialogTitle>
            <DialogDescription className="text-secondary">
              {selected?.role}{selected?.gdc ? ` • GDC No ${selected.gdc}` : ""}
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
