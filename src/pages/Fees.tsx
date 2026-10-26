import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
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
    title: "NHS",
    items: [
      { name: "Band 1", price: "£27.90" },
      { name: "Band 2", price: "£76.60" },
      { name: "Band 3", price: "£332.10" },
    ],
  },
  {
    title: "Private",
    items: [
      { name: "Emergency appointment", price: "£50" },
      { name: "Examination, x-rays and basic scale", price: "£50" },
      { name: "Air polish", price: "£90" },
      { name: "Fillings", price: "From £110" },
      { name: "Extraction", price: "From £150" },
      { name: "Root canal treatment", price: "Subject to consultation" },
      { name: "Dentures", price: "Subject to consultation" },
      { name: "Zirconia Crown/Bridge per unit/Veneers", price: "£720" },
      { name: "Aligners consult and scan", price: "£150" },
      { name: "Clear Aligners", price: "From £3200" },
      { name: "Lumi aligners", price: "From £2500" },
      { name: "Composite bonding", price: "From £400 per unit" },
      { name: "Implants", price: "Subject to consultation" },
    ],
  },
];

export default function Fees() {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">518 DENTAL PRICE LIST</h1>
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
                      <div key={i} className="flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:items-center sm:gap-4 px-6 py-3 hover:bg-muted/50 transition-colors">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm font-semibold text-secondary shrink-0 sm:text-right">{item.price === "Subject to consultation" ? (
                          <Link to="/contact" className="underline underline-offset-2 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" aria-label={`Contact us about ${item.name} pricing`}>
                            {item.price}
                          </Link>
                        ) : item.price}</span>
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
          <p className="text-center text-foreground">
            Have a question about our fees or need a personalised quote? Contact us —{" "}
            <Link to="/contact" className="font-semibold text-secondary underline underline-offset-4 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
              click here
            </Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
