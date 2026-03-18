import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

interface FeeItem { name: string; price: string }
interface FeeCategory { title: string; items: FeeItem[] }

const feeCategories: FeeCategory[] = [
  {
    title: "Independent Fees",
    items: [
      { name: "New Patient Examination", price: "£50.00" },
      { name: "Routine Examination", price: "£30.00" },
      { name: "Emergency Examination", price: "£30.00" },
      { name: "Small X-ray", price: "£10.00" },
      { name: "Large X-ray (OPG)", price: "£50.00" },
      { name: "Scale & Polish (per session)", price: "From £55.00" },
      { name: "Composite Filling (per surface)", price: "From £60.00" },
      { name: "Extraction", price: "From £80.00" },
      { name: "Surgical Extraction", price: "From £150.00" },
    ],
  },
  {
    title: "Private Cosmetic Dentistry",
    items: [
      { name: "Porcelain Crown", price: "From £450.00" },
      { name: "Porcelain Bridge (per unit)", price: "From £450.00" },
      { name: "Porcelain Veneer", price: "From £450.00" },
    ],
  },
  {
    title: "Invisalign",
    items: [
      { name: "Invisalign Comprehensive", price: "From £3,500.00" },
      { name: "Invisalign Lite", price: "From £2,500.00" },
      { name: "Invisalign i7", price: "From £1,500.00" },
    ],
  },
  {
    title: "Lumi Aligners",
    items: [
      { name: "Lumi Aligners", price: "From £1,200.00" },
    ],
  },
  {
    title: "Avant Garde Composite Bonding",
    items: [
      { name: "Composite Bonding (per tooth)", price: "From £250.00" },
    ],
  },
  {
    title: "Root Canal",
    items: [
      { name: "Anterior Root Canal", price: "From £250.00" },
      { name: "Premolar Root Canal", price: "From £350.00" },
      { name: "Molar Root Canal", price: "From £450.00" },
    ],
  },
  {
    title: "Dentures",
    items: [
      { name: "Acrylic Denture (complete)", price: "From £500.00" },
      { name: "Acrylic Denture (partial)", price: "From £300.00" },
      { name: "Valplast Flexible Denture", price: "From £500.00" },
    ],
  },
  {
    title: "Tooth Whitening",
    items: [
      { name: "Boutique Home Whitening", price: "£250.00" },
      { name: "Enlighten Whitening", price: "From £395.00" },
    ],
  },
  {
    title: "Bite Guards",
    items: [
      { name: "Bite Guard / Night Guard", price: "From £150.00" },
    ],
  },
  {
    title: "NHS Bands (England)",
    items: [
      { name: "Band 1 – Examination, diagnosis, prevention", price: "£26.80" },
      { name: "Band 2 – Fillings, extractions, root canal", price: "£73.50" },
      { name: "Band 3 – Crowns, dentures, bridges", price: "£319.10" },
    ],
  },
];

export default function Fees() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Fees</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-secondary mb-6" />
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
            Transparent pricing for all our treatments.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {feeCategories.map((cat) => (
            <AnimatedSection key={cat.title}>
              <Card className="border-none shadow-md overflow-hidden">
                <CardHeader className="bg-warm-white border-b border-border">
                  <CardTitle className="font-serif text-xl text-foreground">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-border">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-center px-6 py-3 hover:bg-muted/50 transition-colors">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-semibold text-secondary whitespace-nowrap ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}

          <p className="text-sm text-muted-foreground text-center mt-8">
            All fees are approximate and may vary depending on individual treatment needs. Please contact us for a personalised quote.
          </p>
        </div>
      </section>
    </Layout>
  );
}
