import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldCheck,
  GraduationCap,
  Heart,
  Users,
  Stethoscope,
  Smile,
} from "lucide-react";
import aboutImage1 from "@/assets/About-1.JPG?url";
import aboutImage2 from "@/assets/About-2.JPG?url";
import aboutImage3 from "@/assets/About-3.JPG?url";
import aboutImage4 from "@/assets/About-4.JPG?url";
import aboutImage5 from "@/assets/About-5.JPG?url";
import aboutImage6 from "@/assets/About-6.JPG?url";

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

const values = [
  {
    icon: ShieldCheck,
    title: "NHS & Private Care",
    desc: "We provide both NHS and private dental treatments to suit all patients.",
  },
  {
    icon: GraduationCap,
    title: "Continuing Education",
    desc: "Our team regularly attends courses to stay at the forefront of dentistry.",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    desc: "We strive to make every visit as comfortable and stress-free as possible.",
  },
  {
    icon: Users,
    title: "Family-Run Practice",
    desc: "A husband and wife led practice with a personal touch.",
  },
  {
    icon: Stethoscope,
    title: "Modern Equipment",
    desc: "We use state-of-the-art technology for accurate diagnoses and treatments.",
  },
  {
    icon: Smile,
    title: "Welcoming Environment",
    desc: "Our practice is designed to feel warm, clean and inviting.",
  },
];

const aboutGallery = [
  {
    src: aboutImage1,
    alt: "518 Dental reception seating area",
    className: "lg:col-span-2",
  },
  {
    src: aboutImage2,
    alt: "518 Dental treatment room interior",
    className: "",
  },
  {
    src: aboutImage3,
    alt: "518 Dental welcoming practice space",
    className: "",
  },
  { src: aboutImage4, alt: "518 Dental modern clinic details", className: "" },
  { src: aboutImage5, alt: "518 Dental patient area and décor", className: "" },
  {
    src: aboutImage6,
    alt: "518 Dental interior practice view",
    className: "lg:col-span-2",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            About 518 Dental
          </h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            A passionate team dedicated to providing outstanding dental care in
            Rochdale.
          </p>
        </div>
      </section>

      {/* About Text */}
      <AnimatedSection>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg mx-auto space-y-5 text-muted-foreground leading-relaxed">
              <p>
                518 Dental is a well-established dental practice situated at
                518A Bury Road, Rochdale. We are a husband and wife led
                practice, run by Dr Lawiza and Dr Sajid, both graduates of the
                University of Manchester.
              </p>
              <p>
                We are passionate about providing high quality dental care in a
                caring, relaxed environment. We offer both NHS and private
                dental treatments, ensuring comprehensive care options are
                available for all our patients.
              </p>
              <p>
                Our team is committed to continuing professional education,
                regularly attending courses and training to stay at the
                forefront of modern dentistry. Whether you need a routine
                check-up, cosmetic treatment, or specialist dental care, we are
                here to help.
              </p>
              <p>
                We believe that visiting the dentist should be a positive
                experience, and we work hard to ensure every patient feels
                welcome, comfortable and well cared for from the moment they
                walk through our door.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery */}
      <AnimatedSection>
        <section className="py-20 bg-warm-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Inside Our Practice"
              subtitle="A look around 518 Dental"
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {aboutGallery.map((image) => (
                <Card
                  key={image.src}
                  className={`group overflow-hidden border-none shadow-md ${image.className}`}
                >
                  <CardContent className="h-full p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-[5/4]"
                      loading="lazy"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection>
        <section className="py-20 bg-warm-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Our Values"
              subtitle="What makes 518 Dental different"
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <Card
                  key={v.title}
                  className="border border-secondary/20 shadow-none hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 rounded-full bg-secondary/10 p-4 w-fit">
                      <v.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
}
