import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, ClipboardList, MessageSquare, Stethoscope, ThumbsUp } from "lucide-react";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const steps = [
  {
    icon: Phone,
    title: "Initial Contact",
    desc: "Contact us by phone on 01706 527127 or via our online enquiry form to arrange your first appointment. Our friendly team will find a convenient time for you.",
  },
  {
    icon: ClipboardList,
    title: "Assessment",
    desc: "At your first visit we will carry out a thorough examination of your teeth, gums and mouth. This includes digital x-rays and an oral cancer screening. We take the time to understand your dental history and any concerns you may have.",
  },
  {
    icon: MessageSquare,
    title: "Treatment Plan Discussion",
    desc: "We will discuss our findings with you and explain all available treatment options clearly. We believe in shared decision making and will always ensure you understand the benefits, risks and costs before any treatment begins.",
  },
  {
    icon: Stethoscope,
    title: "During Treatment",
    desc: "Throughout your treatment we will keep you informed and comfortable. We use modern techniques and technology to ensure procedures are as efficient and painless as possible. You are always welcome to ask questions.",
  },
  {
    icon: ThumbsUp,
    title: "Post-Treatment & Ongoing Care",
    desc: "After treatment, we will provide you with tailored aftercare advice. We will arrange follow-up appointments as needed and work with you to maintain your dental health for the long term through regular check-ups and hygiene visits.",
  },
];

export default function PatientJourney() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Your Patient Journey</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            What to expect when you visit 518 Dental.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <AnimatedSection key={step.title}>
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg z-10">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-xl font-semibold mb-2 flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-secondary" />
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
