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
import aboutImage4 from "@/assets/About-4.JPG?url";
import aboutImage6 from "@/assets/About-6.JPG?url";
import receptionImage from "@/assets/about-gallery/reception.webp";
import loungeImage from "@/assets/about-gallery/lounge.webp";
import windowImage from "@/assets/about-gallery/window.webp";

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
  { src: loungeImage, alt: "518 Dental upstairs lounge with modern lighting and television", title: "A calming space" },
  { src: aboutImage1, alt: "Dental surgery with modern treatment equipment at 518 Dental", title: "Modern surgeries" },
  { src: windowImage, alt: "Bright waiting area by the front windows at 518 Dental", title: "Light-filled waiting area" },
  { src: aboutImage2, alt: "Comfortable dental treatment chair beside a window", title: "Patient comfort" },
  { src: aboutImage4, alt: "Close-up of dental equipment controls", title: "Attention to detail" },
  { src: aboutImage6, alt: "Wooden surgery entrance door inside 518 Dental", title: "Our clinical rooms" },
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

      {/* Welcome: an editorial split with a unique image */ }
      <AnimatedSection>
        <section className="bg-card py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Welcome to 518 Dental</p>
                <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  Family-focused care in a welcoming setting
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                  <p>
                    518 Dental is a well-established dental practice situated at
                    518A Bury Road, Rochdale. We are a husband and wife led
                    practice, run by principal dentists Dr Lawiza Kiani and Dr Sajid Malik.
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
              <figure className="overflow-hidden rounded-2xl border border-secondary/20 bg-warm-white shadow-lg">
                <img
                  src={receptionImage}
                  alt="The illuminated main reception desk at 518 Dental"
                  className="aspect-[4/3] w-full object-cover object-center lg:aspect-[5/4]"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="flex items-center gap-3 px-5 py-4 text-sm font-medium text-foreground">
                  <span className="h-1.5 w-8 rounded-full bg-secondary" aria-hidden="true" />
                  A warm welcome, from the moment you arrive
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Six different scenes, with no repeated image */ }
      <AnimatedSection>
        <section className="bg-warm-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Inside Our Practice"
              subtitle="Explore our welcoming spaces, modern surgeries and thoughtful details"
            />
            <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aboutGallery.map((image) => (
                <Card
                  key={image.src}
                  className="group overflow-hidden rounded-2xl border border-secondary/10 bg-card shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="aspect-[4/3] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex items-center gap-3 px-5 py-4">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      <p className="font-serif text-base font-semibold text-foreground">{image.title}</p>
                    </div>
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
